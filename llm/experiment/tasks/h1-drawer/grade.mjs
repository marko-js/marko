export async function grade({ fetchText, withPage, check }) {
  await fetchText("/");
  await withPage(async (page, { pageErrors }) => {
    check("browser: drawer hidden initially", !(await page.locator("#notes").isVisible().catch(() => false)));
    await page.click("#toggle");
    await page.waitForTimeout(250);
    check("browser: drawer visible after toggle", await page.locator("#notes").isVisible());
    await page.fill("#notes", "remember the milk");
    await page.click("#toggle");
    await page.waitForTimeout(250);
    check("browser: drawer hidden again", !(await page.locator("#notes").isVisible().catch(() => false)));
    await page.click("#toggle");
    await page.waitForTimeout(250);
    check("browser: draft preserved", (await page.inputValue("#notes").catch(() => "")) === "remember the milk", await page.inputValue("#notes").catch(() => "MISSING"));
    check("browser: no page errors", pageErrors.length === 0, pageErrors.join("; "));
  });
}
