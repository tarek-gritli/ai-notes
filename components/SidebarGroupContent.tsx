"use client";

import {
  SidebarGroupContent as SidebarGroupContentShadCN,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Note } from "@/lib/generated/prisma";
import SelectNoteButton from "./buttons/SelectNoteButton";
import DeleteNoteButton from "./buttons/DeleteNoteButton";

type Props = {
  notes: Note[];
};

function SidebarGroupContent({ notes }: Props) {
  const [searchText, setSearchText] = useState("");
  const [deletedNoteIds, setDeletedNoteIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    setDeletedNoteIds(new Set());
  }, [notes]);

  const visibleNotes = notes.filter((note) => !deletedNoteIds.has(note.id));

  const fuse = new Fuse(visibleNotes, {
    keys: ["text"],
    threshold: 0.4,
  });

  // Filter notes based on search text
  const filteredNotes = searchText
    ? fuse.search(searchText).map((result) => result.item)
    : visibleNotes;

  const deleteNoteLocally = (noteId: string) => {
    setDeletedNoteIds((prevDeleted) => new Set(prevDeleted).add(noteId));
  };

  return (
    <SidebarGroupContentShadCN>
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-2 size-4" />
        <Input
          className="bg-muted pl-8"
          placeholder="Search your notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <SidebarMenu className="mt-4">
        {filteredNotes.map((note) => (
          <SidebarMenuItem key={note.id} className="group/item">
            <SelectNoteButton note={note} />

            <DeleteNoteButton
              noteId={note.id}
              deleteNoteLocally={deleteNoteLocally}
            />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContentShadCN>
  );
}

export default SidebarGroupContent;
