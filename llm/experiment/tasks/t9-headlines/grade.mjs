export async function grade({ fetchText, withPage, check }) {
  const raw = await fetchText("/news");
  check("raw: loading text present", /Loading headlines/.test(raw), raw.slice(0, 400));
  check("raw: all three headlines present", /Local otter/.test(raw) && /Harbor bridge/.test(raw) && /Rare comet/.test(raw), raw.slice(-500));
  check(
    "raw: loading text streams before headlines",
    raw.indexOf("Loading headlines") !== -1 && raw.indexOf("Local otter") !== -1 && raw.indexOf("Loading headlines") < raw.indexOf("Local otter"),
    `loading@${raw.indexOf("Loading headlines")} otter@${raw.indexOf("Local otter")}`,
  );
  await withPage(async (page) => {
    await page.waitForSelector("#headlines li.headline");
    const items = await page.$$eval("#headlines li.headline", (els) => els.map((el) => el.textContent.trim()));
    check("dom: three headline items", items.length === 3, JSON.stringify(items));
    check("dom: first item text", items[0]?.includes("Local otter learns to juggle"), items[0]);
    const bodyText = await page.$eval("body", (el) => el.textContent);
    check("dom: loading text gone", !bodyText.includes("Loading headlines"), bodyText.slice(0, 200));
  }, "/news");
}
