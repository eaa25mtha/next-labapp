import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/wordpress";

export default async function AboutPage() {
  const page = await getPageBySlug();

  if (!page) {
    notFound();
  }

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}
