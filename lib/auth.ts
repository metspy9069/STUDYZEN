import { getServerSession } from "next-auth";

export async function requireAuth(req: any) {
  const session = await getServerSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  return session;
}