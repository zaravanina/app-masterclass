import { Metadata } from "next";
import getPageData from "../helpers/getPageData";
import TextPage from "@/layout/pages/TextPage";
import ImagePage from "@/layout/pages/ImagePage";
import {
  ImagePageProps,
  TextColumnsPageProps,
  TextPageProps,
} from "@/models/page.interface";
import TextColumnsPage from "@/layout/pages/TextColumnsPage";

type Params = Promise<{ path: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { path } = await params;
  const pathDecoded = decodeURIComponent(
    Array.isArray(path) ? path.join("/") : path
  );
  const pageData = await getPageData(pathDecoded);
  return {
    title: pageData?.name || "Heyday Masterclass 2025",
  };
}

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
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {firstBlockType === "blockText" && blocks?.[0]?.content ? (
          <TextPage {...(pageData as TextPageProps)} />
        ) : firstBlockType === "blockImage" && blocks?.[0]?.content ? (
          <ImagePage {...(pageData as ImagePageProps)} />
        ) : firstBlockType === "blockTextColumns" && blocks?.[0]?.content ? (
          <TextColumnsPage {...(pageData as TextColumnsPageProps)} />
        ) : null}
      </main>
    </div>
  );
}
