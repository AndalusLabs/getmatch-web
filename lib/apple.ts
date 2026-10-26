import { IOS_BUNDLE_ID } from "@/lib/config";

/**
 * Apple Developer Team ID (10 characters).
 *
 * Do not invent this value. Set `APPLE_TEAM_ID` in the Vercel project
 * environment, then redeploy.
 *
 * Find it in:
 * - Apple Developer → Membership details → Team ID
 * - App Store Connect → Users and Access → the Team ID shown for the account
 * - Xcode → the app target → Signing & Capabilities
 */
export function getAppleTeamId(): string | null {
  const value = process.env.APPLE_TEAM_ID?.trim().toUpperCase() ?? "";
  if (!/^[A-Z0-9]{10}$/.test(value)) {
    return null;
  }
  return value;
}

export function getAppleAppId(): string | null {
  const teamId = getAppleTeamId();
  if (!teamId) return null;
  return `${teamId}.${IOS_BUNDLE_ID}`;
}

export type AppleAppSiteAssociation = {
  applinks: {
    apps: [];
    details: Array<{
      appID: string;
      appIDs: string[];
      paths: string[];
      components: Array<{ "/": string; comment?: string }>;
    }>;
  };
};

export function buildAppleAppSiteAssociation(): AppleAppSiteAssociation {
  const appId = getAppleAppId();
  if (!appId) {
    return {
      applinks: {
        apps: [],
        details: [],
      },
    };
  }

  return {
    applinks: {
      apps: [],
      details: [
        {
          appID: appId,
          appIDs: [appId],
          paths: ["/invite/*"],
          components: [
            {
              "/": "/invite/*",
              comment: "Team invitation links",
            },
          ],
        },
      ],
    },
  };
}
