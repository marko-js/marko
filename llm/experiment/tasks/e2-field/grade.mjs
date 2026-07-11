export async function grade({ fetchRes, fetchText, withPage, check, htmlText }) {
  const detail = await fetchText("/recipes/1");
  check("seed: difficulty element", /id="?difficulty"?/.test(detail), detail.slice(0, 300));
  check("seed: difficulty medium", /medium/i.test(htmlText(detail)));
  const form = await fetchText("/recipes/new");
  check("form: select present", /<select[^>]*name="?difficulty"?/.test(form), form.slice(0, 400));
  check("form: three options", /easy/.test(form) && /medium/.test(form) && /hard/.test(form));
  const post = await fetchRes("/recipes/new", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: "title=Pan+pizza&minutes=40&difficulty=hard",
  });
  check("post: redirect", post.status >= 300 && post.status < 400, String(post.status));
  const loc = post.headers.get("location") || "";
  const rel = loc.startsWith("http") ? new URL(loc).pathname : loc;
  const created = await fetchText(rel);
  check("created: title", /Pan pizza/.test(htmlText(created)));
  check("created: difficulty hard", /hard/i.test(htmlText(created)), htmlText(created).slice(0, 300));
  await withPage(async (page) => {
    await page.fill("input[name=title]", "Rice bowl");
    await Promise.all([page.waitForURL(/\/recipes\/\d+/), page.click("button[type=submit]")]);
    const text = htmlText(await page.content());
    check("untouched select: saves medium", /Rice bowl/.test(text) && /medium/i.test(text), text.slice(0, 300));
  }, "/recipes/new");
}
