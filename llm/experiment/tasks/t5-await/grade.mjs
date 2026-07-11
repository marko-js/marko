export async function grade({ fetchText, withPage, check, htmlText }) {
  const html = await fetchText("/");
  check("ssr: streamed placeholder present in raw html", /Loading profile/.test(html), html.slice(0, 600));
  check("ssr: resolved name present", /Ada Lovelace/.test(html));
  const nameIdx = html.indexOf("Ada Lovelace");
  const loadIdx = html.indexOf("Loading profile");
  check("ssr: placeholder flushed before data", loadIdx !== -1 && loadIdx < nameIdx, `load@${loadIdx} name@${nameIdx}`);
  await withPage(async (page, { pageErrors }) => {
    check("browser: name rendered", ((await page.locator("#user-name").textContent()) || "").includes("Ada Lovelace"));
    check("browser: role rendered", ((await page.locator("#user-role").textContent()) || "").includes("Engineer"));
    check("browser: loading indicator gone", !(await page.getByText("Loading profile").isVisible().catch(() => false)));
    check("browser: no page errors", pageErrors.length === 0, pageErrors.join("; "));
  });
}
