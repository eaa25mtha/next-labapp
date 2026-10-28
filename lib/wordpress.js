// Alle fetch kald er samlet ét sted

const API_URL = `${process.env.WORDPRESS_URL}/wp-json/wp/v2`; //starten af url'en så den ikke skal skrives 4 gange

//GetPosts
export async function getPosts() {
  const response = await fetch(`${API_URL}/posts?_embed`);

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const posts = await response.json();
  return posts;
}

//getLatestsPosts
export async function getLatestPosts() {
  const response = await fetch(`${API_URL}/posts?per_page=3&_embed`);

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const posts = await response.json();
  return posts;
}

//getPostBySlug
export async function getPostBySlug(slug) {
  const response = await fetch(`${API_URL}/posts?slug=${slug}&_embed`);

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const posts = await response.json();
  return posts[0];
}

//getPageBySlug
export async function getPageBySlug(slug) {
  const response = await fetch(`${API_URL}/pages?slug=${slug}&_embed`);

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  const pages = await response.json();
  return pages[0];
}
