export async function grade({ fetchText, check }) {
  const home = await fetchText("/");
  const about = await fetchText("/about");
  check("home: h1", /<h1[^>]*>\s*Home\s*<\/h1>/.test(home), home.slice(0, 300));
  check("about: h1", /<h1[^>]*>\s*About\s*<\/h1>/.test(about), about.slice(0, 300));
  for (const [name, html] of [["home", home], ["about", about]]) {
    check(`${name}: header present`, /id="?site-header"?/.test(html));
    check(`${name}: footer present`, /built with marko/.test(html));
    check(`${name}: nav links`, /href="?\/"?[\s>]/.test(html) && /href="?\/about"?/.test(html));
    check(`${name}: content inside main`, /<main[\s>][\s\S]*<h1/.test(html));
  }
  check("about: no home text bleed", !/<h1[^>]*>\s*Home\s*<\/h1>/.test(about));
}
