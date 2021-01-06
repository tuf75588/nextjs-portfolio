function importAll(r) {
  return r.keys();
}

const names = importAll(require.context(`../components/footer`));
