/* this function will generate links for routing purposes */

function importAll(r) {
  return r.keys().map((fileName) => {
    const appended = `/blog`.concat(
      fileName.substr(1).replace(/\/index\.mdx$/, ``)
    );

    return {
      appended,
      meta: r(fileName).meta,
    };
  });
}

function sortBlogPosts(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

function getPostMetaData() {
  return importAll(require.context(`../pages/blog`, true, /\.mdx$/)).sort(
    (aPosts, bPosts) => {
      return sortBlogPosts(aPosts.meta.data, bPosts.meta.date);
    }
  );
}

export default getPostMetaData;
