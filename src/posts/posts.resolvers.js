const description =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const posts = [...Array(100).keys()].map(i => {
  const id = i + 1;
  const idPad = String(id).padStart(3, '0');

  return {
    id,
    user_id: Math.floor(Math.random() * 2 + 1),
    slug: `post${idPad}`,
    title: `Post ${idPad}`,
    description,
    created_at: new Date().toISOString(),
  };
});

export function getPosts() {
  return posts;
}

export function getPostsByUserId(userData) {
  const userPosts = posts.filter(p => p.user_id === userData.id);

  return userPosts;
}
