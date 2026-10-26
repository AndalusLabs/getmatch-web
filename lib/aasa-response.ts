import { buildAppleAppSiteAssociation } from "@/lib/apple";

/** Shared AASA response: JSON, HTTP 200, no redirect. */
export function appleAppSiteAssociationResponse(): Response {
  return new Response(JSON.stringify(buildAppleAppSiteAssociation()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
