import { getUser } from "@/auth/server";
import AskAIButton from "@/components/buttons/AskAIButton";
import NewNoteButton from "@/components/buttons/NewNoteButton";
import HomeToast from "@/components/HomeToast";
import NoteTextInput from "@/components/NoteTextInput";
import prisma from "@/prisma/prisma";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function HomePage({ searchParams }: Props) {
  const noteIdParam = (await searchParams).noteId;
  const user = await getUser();

  if (!user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-lg">Please log in to access your notes</p>
      </div>
    );
  }

  const noteId = Array.isArray(noteIdParam)
    ? noteIdParam![0]
    : noteIdParam || "";

  const note = await prisma.note.findUnique({
    where: { id: noteId, authorId: user.id },
  });

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2">
        <AskAIButton user={user} />
        <NewNoteButton user={user} />
      </div>

      <NoteTextInput noteId={noteId} startingNoteText={note?.text || ""} />

      <HomeToast />
    </div>
  );
}

export default HomePage;
