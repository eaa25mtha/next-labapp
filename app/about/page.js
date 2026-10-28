import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/wordpress";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default async function AboutPage() {
  const page = await getPageBySlug("about");

  if (!page) {
    notFound();
  }

  // embeded image
  const image = page._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      {image && (
        <Image
          className="featured-image"
          src={image.source_url}
          alt={image.alt_text}
        />
      )}
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}
