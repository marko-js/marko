export async function grade({ fetchText, withPage, check }) {
  const html = await fetchText("/");
  check("ssr: empty state", /No todos yet/.test(html), html.slice(0, 400));
  await withPage(async (page, { pageErrors }) => {
    const add = async (text) => {
      await page.fill("#new-todo", text);
      await page.click("#add");
      await page.waitForTimeout(250);
    };
    await add("buy milk");
    await add("walk dog");
    const items = page.locator("#list li");
    check("browser: two items", (await items.count()) === 2, String(await items.count()));
    check("browser: empty state removed", (await page.locator("#empty").count()) === 0);
    check("browser: remaining 2 left", /2 left/.test((await page.locator("#remaining").textContent()) || ""));
    check("browser: input cleared", (await page.inputValue("#new-todo")) === "");
    await items.nth(0).locator("input[type=checkbox]").check();
    await page.waitForTimeout(250);
    check("browser: remaining 1 left after check", /1 left/.test((await page.locator("#remaining").textContent()) || ""));
    await add("   ");
    check("browser: whitespace not added", (await items.count()) === 2, String(await items.count()));
    check("browser: no page errors", pageErrors.length === 0, pageErrors.join("; "));
  });
}
