export async function grade({ fetchText, withPage, check, htmlText }) {
  const html = await fetchText("/");
  check("ssr: all cities", /Amsterdam/.test(html) && /Osaka/.test(html), html.slice(0, 400));
  check("ssr: 10 matches", /10 matches/.test(htmlText(html)), htmlText(html).slice(0, 300));
  await withPage(async (page, { pageErrors }) => {
    await page.fill("#q", "os");
    await page.waitForTimeout(300);
    const items = await page.locator("#results li").allTextContents();
    const names = items.map((t) => t.trim()).sort();
    check("browser: 'os' filters case-insensitively", names.join(",") === "Boston,Oslo,Osaka".split(",").sort().join(","), names.join(","));
    check("browser: count 3 matches", /3 matches/.test((await page.locator("#count").textContent()) || ""));
    await page.fill("#q", "zzz");
    await page.waitForTimeout(300);
    check("browser: no matches", (await page.locator("#results li").count()) === 0);
    check("browser: count 0 matches", /0 matches/.test((await page.locator("#count").textContent()) || ""));
    check("browser: no page errors", pageErrors.length === 0, pageErrors.join("; "));
  });
}
