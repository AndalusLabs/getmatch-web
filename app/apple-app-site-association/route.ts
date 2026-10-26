import { appleAppSiteAssociationResponse } from "@/lib/aasa-response";

export const dynamic = "force-dynamic";

export function GET() {
  return appleAppSiteAssociationResponse();
}
