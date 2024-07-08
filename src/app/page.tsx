import { NewsList } from "@/components/NewsList";
import { getAllItems } from "@/lib/get-items";

export default async function Home() {
  const newsItems = await getAllItems();
  return (
    <main>
      <div className="container">
        <NewsList newsItems={newsItems} />
      </div>
    </main>
  );
}
