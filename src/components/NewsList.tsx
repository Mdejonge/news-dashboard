import Image from "next/image";
import parse from "html-react-parser";

export const NewsList = async ({ newsItems }: any) => {
  console.log(newsItems);
  if (!newsItems) return;
  return (
    <section className="py-10">
      <div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-4 grid gap-10 grid-cols-4">
            {newsItems.map((item: any) => (
              <a
                key={item.title}
                href={item.link}
                className="flex flex-col gap-y-4 relative group"
                target="_blank"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-full rounded-lg object-cover object-center aspect-4/3"
                />

                <div className="flex items-center">
                  <span className="bg-yellow-400 w-fit py-1 px-2 rounded-md text-xs font-bold">
                    {item.source}
                  </span>
                  {item.pubDate && (
                    <span className="ml-auto text-xs">
                      {new Date(item.pubDate).toDateString() !== new Date().toDateString()
                        ? new Date(item.pubDate).toLocaleDateString("nl-NL", {
                            day: "2-digit",
                            month: "long",
                          })
                        : new Date(item.pubDate).toLocaleTimeString("nl-NL", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                    </span>
                  )}
                </div>
                {item.title && (
                  <b className="group-hover:text-red-600 group-hover:underline">{item.title}</b>
                )}
                {item.description &&
                  parse(
                    item.description
                      .replace(/<p[^>]*>(.*?)<\/p>\s*$/, "")
                      .substring(0, 155)
                      .trimEnd() + "..."
                  )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
