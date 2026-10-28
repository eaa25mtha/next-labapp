import styles from "./page.module.css";
import PostList from "@/components/PostList";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts` + "?per_page=3",
  );
  const posts = await response.json();

  return (
    <main>
      <section className={styles.hero}>
        <h1>Posts fra hverdagen</h1>
      </section>

      <section>
        <h2 className={styles.heading}>Seneste posts</h2>
        <PostList posts={posts} />
        <p className={styles.more}>
          <Link href="/posts">Se alle posts →</Link>
        </p>
      </section>
    </main>
  );
}
