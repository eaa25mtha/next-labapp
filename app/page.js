import styles from "./page.module.css";
import PostList from "@/components/PostList";
import { getLatestPosts } from "@/lib/wordpress";
import Link from "next/link";

export default async function Home() {
  const posts = await getLatestPosts();

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
