import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const session = await prisma.studySession.create({
    data: {
      duration: body.duration,
      userId: body.userId,
    },
  });

  return Response.json(session);
}