export async function grade({ fetchText, check, htmlText, readSource, listSource }) {
  const home = await fetchText("/");
  check("home: three meta rows", (home.match(/class="?meta"?[ >]/g) || []).length === 3, home.slice(0, 300));
  check("home: recipe 1 meta content", /30 min/.test(htmlText(home)) && /★{4}/.test(htmlText(home)));
  const detail = await fetchText("/recipes/1");
  check("detail: one meta row", (detail.match(/class="?meta"?[ >]/g) || []).length === 1);
  check("detail: meta content", /30 min/.test(htmlText(detail)) && /★{4}/.test(htmlText(detail)));
  check("detail: no card leak", !/class="?card"?[ >]/.test(detail));

  const files = await listSource("src");
  const withMeta = [];
  for (const f of files) {
    const content = (await readSource(f)) || "";
    if (/class="?\[?"?meta/.test(content)) withMeta.push(f);
  }
  check("source: meta markup in exactly one file", withMeta.length === 1, JSON.stringify(withMeta));
  check("source: that file is a tag", withMeta.length === 1 && /^src\/tags\//.test(withMeta[0]), JSON.stringify(withMeta));
  if (withMeta.length === 1 && /^src\/tags\//.test(withMeta[0])) {
    const tagName = withMeta[0].replace(/^src\/tags\//, "").replace(/\.marko$/, "");
    const card = (await readSource("src/tags/recipe-card.marko")) || "";
    const page = (await readSource("src/routes/recipes/$id/+page.marko")) || "";
    check("source: card uses the new tag", card.includes(`<${tagName}`), tagName);
    check("source: detail uses the new tag", page.includes(`<${tagName}`), tagName);
  }
}
