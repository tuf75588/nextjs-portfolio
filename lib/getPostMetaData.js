/* this function will generate links for routing purposes */

function importAll(r) {
  return r.keys().map((fileName) => ({
    link: `/blog`.concat(fileName.substr(1).replace(/\/index\.mdx$/, ``)),
    meta: r(fileName).meta,
  }));
}

const names = importAll(require.context(`../pages/blog`, true, /\.mdx$/));
export default names;
