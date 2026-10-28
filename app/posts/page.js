import PostList from "@/components/PostList";
//import styles from "./page.module.css";

export const metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`,
  );
  const posts = await response.json();

  return (
    <main>
      <h1>Alle posts</h1>
      <PostList posts={posts} />
    </main>
  );
}
