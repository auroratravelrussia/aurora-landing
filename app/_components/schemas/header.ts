import { headers } from "next/headers";
import { HEADERS } from "./url";

/**
 * Read custom headers set by middleware.
 * `x-pathname` is set in middleware.ts to expose current path to server components.
 */
export const getHeaders = async () => {
  try {
    const headerList = await headers();
    return {
      path: headerList.get(HEADERS.path) ?? "/",
    };
  } catch {
    // Fallback if headers() fails (e.g., during build time static generation)
    return {
      path: "/",
    };
  }
};