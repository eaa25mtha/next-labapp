import PostList from "@/components/PostList";
import { getPosts } from "@/lib/wordpress";
//import styles from "./page.module.css";

export const metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Alle posts</h1>
      <PostList posts={posts} />
    </main>
  );
}
