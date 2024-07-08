import { NewsList } from "@/components/NewsList";
import { getItemsByCategory } from "@/lib/get-items";

export default async function Page({ params }: { params: { slug: string } }) {
  const newsItems = await getItemsByCategory(params.slug);

  if (!newsItems) return;

  return (
    <main>
      <div className="container">
        <NewsList newsItems={newsItems} />
      </div>
    </main>
  );
}
