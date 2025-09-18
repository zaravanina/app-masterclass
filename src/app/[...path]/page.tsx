import getPageData from "../helpers/getPageData";

type Params = Promise<{ path: string }>;

export default async function Page({ params }: { params: Params }) {
  const { path } = await params;
  const pathDecoded = decodeURIComponent(
    Array.isArray(path) ? path.join("/") : path
  );
  const pageData = await getPageData(pathDecoded);
  const blocks = pageData?.properties?.blocks?.items || null;
  const firstBlockType = blocks?.[0]?.content?.contentType || null;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
    </div>
  );
}
