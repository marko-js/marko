export async function grade({ fetchText, withPage, check, htmlText }) {
  const html = await fetchText("/");
  check("ssr: initial Likes: 0", /Likes:\s*0/.test(htmlText(html)), htmlText(html).slice(0, 300));
  await withPage(async (page, { pageErrors }) => {
    const btn = page.locator("#like");
    check("browser: button exists", (await btn.count()) === 1);
    await btn.click();
    await btn.click();
    await page.waitForTimeout(300);
    const text = (await btn.textContent()) || "";
    check("browser: two clicks -> Likes: 2", /Likes:\s*2/.test(text), text);
    check("browser: no page errors", pageErrors.length === 0, pageErrors.join("; "));
  });
}
