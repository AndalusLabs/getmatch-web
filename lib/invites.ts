import { MATCH_URL_SCHEME } from "@/lib/config";

const INVITE_CODE_PATTERN = /^[a-z0-9]{1,64}$/;

export function normalizeInviteCode(raw: string): string {
  return raw.trim().toLowerCase();
}

export function isPlausibleInviteCode(code: string): boolean {
  return INVITE_CODE_PATTERN.test(code);
}

export function matchInviteDeepLink(code: string): string {
  return `${MATCH_URL_SCHEME}://invite/${encodeURIComponent(code)}`;
}
