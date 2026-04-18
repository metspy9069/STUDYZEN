import { prisma } from "@/lib/prisma";

export async function GET() {
  const rewards = await prisma.reward.findMany();
  return Response.json(rewards);
}