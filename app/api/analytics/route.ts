import { prisma } from "@/lib/prisma";

export async function GET() {
  const sessions = await prisma.studySession.findMany();

  const total = sessions.reduce((acc, s) => acc + s.duration, 0);

  return Response.json({
    totalTime: total,
    sessions: sessions.length,
  });
}