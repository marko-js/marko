export async function grade({ fetchText, withPage, check, htmlText }) {
  const html = await fetchText("/");
  check("ssr: fahrenheit 68", /68/.test(htmlText(html)), htmlText(html).slice(0, 300));
  await withPage(async (page, { pageErrors }) => {
    await page.fill("#celsius", "100");
    await page.dispatchEvent("#celsius", "change");
    await page.waitForTimeout(300);
    let f = (await page.locator("#fahrenheit").textContent()) || "";
    check("browser: 100C -> 212F", /(^|[^\d.])212([^\d.]|$)/.test(f.trim()), f);
    await page.click("#warmer");
    await page.waitForTimeout(300);
    const c = await page.inputValue("#celsius");
    f = (await page.locator("#fahrenheit").textContent()) || "";
    check("browser: warmer -> celsius 101", c.trim() === "101", c);
    check("browser: warmer -> fahrenheit 213.8", /213\.8/.test(f), f);
    check("browser: no page errors", pageErrors.length === 0, pageErrors.join("; "));
  });
}
