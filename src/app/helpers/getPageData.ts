import { getContentByPath } from "@/lib/api";
import PageData from "@/models/page.interface";

export default async function getPageData(path: string) {
  const data = await getContentByPath(path, true);
  if (!data) return null;

  return data;
}
