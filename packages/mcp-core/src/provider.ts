export type ApiProvider = "sentry" | "glitchtip";

export function detectApiProvider(host?: string | null): ApiProvider {
  const normalizedHost = host?.toLowerCase() ?? "";
  return normalizedHost.includes("glitchtip") ? "glitchtip" : "sentry";
}

export function parseApiProvider(value: string): ApiProvider | null {
  const normalizedValue = value.trim().toLowerCase();
  if (normalizedValue === "sentry" || normalizedValue === "glitchtip") {
    return normalizedValue;
  }
  return null;
}
