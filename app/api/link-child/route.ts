import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";
import { ratelimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  try {
    // 🚫 RATE LIMIT FIRST
    const { success } = await ratelimit.limit("link-child");

    if (!success) {
      return Response.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const session = await requireAuth(req);
    const { childEmail } = await req.json();

    if (!childEmail) {
      return Response.json(
        { error: "Missing email" },
        { status: 400 }
      );
    }

    const parent = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!parent || parent.role !== "PARENT") {
      return Response.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    const child = await prisma.user.update({
      where: { email: childEmail },
      data: { parentId: parent.id },
    });

    return Response.json(child);

  } catch (err) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}