export async function GET() {
  return Response.json({
    sites: ["youtube.com", "instagram.com"],
  });
}