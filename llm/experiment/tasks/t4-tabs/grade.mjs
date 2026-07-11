export async function grade({ fetchText, withPage, check }) {
  const html = await fetchText("/");
  check("ssr: labels present", ["Install", "Usage", "FAQ"].every((l) => html.includes(l)), html.slice(0, 500));
  check("ssr: first tab content present", html.includes("npm install to get started"));
  await withPage(async (page, { pageErrors }) => {
    const buttons = page.locator("[role=tablist] button");
    check("browser: three tab buttons", (await buttons.count()) === 3, String(await buttons.count()));
    check("browser: first content visible", await page.getByText("npm install to get started").isVisible());
    check("browser: second content hidden", !(await page.getByText("call run()").isVisible().catch(() => false)));
    const first = buttons.nth(0);
    check("browser: first aria-selected", (await first.getAttribute("aria-selected")) === "true");
    await buttons.nth(1).click();
    await page.waitForTimeout(300);
    check("browser: second content visible after click", await page.getByText("call run()").isVisible());
    check("browser: first content hidden after click", !(await page.getByText("npm install to get started").isVisible().catch(() => false)));
    check("browser: aria-selected moved", (await buttons.nth(1).getAttribute("aria-selected")) === "true" && (await first.getAttribute("aria-selected")) !== "true");
    check("browser: no page errors", pageErrors.length === 0, pageErrors.join("; "));
  });
}
