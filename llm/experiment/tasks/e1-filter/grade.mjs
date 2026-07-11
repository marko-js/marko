export async function grade({ fetchText, withPage, check, htmlText }) {
  const raw = await fetchText("/");
  check("ssr: all cards in initial response", (raw.match(/class="?card"?[ >]/g) || []).length === 3, raw.slice(0, 300));
  await withPage(async (page) => {
    await page.waitForSelector("#q");
    await page.waitForSelector("#recipes");
    const visibleTitles = () =>
      page.$$eval("#recipes li", (els) =>
        els
          .filter((el) => el.offsetParent !== null)
          .map((el) => (el.querySelector("a") || el).textContent.trim()),
      );
    const count = async () => htmlText(await page.$eval("#match-count", (el) => el.textContent));
    let titles = await visibleTitles();
    check("empty query: 3 visible", titles.length === 3, JSON.stringify(titles));
    check("empty query: count", /3 shown/.test(await count()), await count());
    await page.fill("#q", "lem");
    titles = await visibleTitles();
    check("query lem: only Lemon pasta", titles.length === 1 && /Lemon pasta/.test(titles[0]), JSON.stringify(titles));
    check("query lem: count", /1 shown/.test(await count()), await count());
    await page.fill("#q", "TOMATO");
    titles = await visibleTitles();
    check("query TOMATO: case-insensitive", titles.length === 1 && /Tomato soup/.test(titles[0]), JSON.stringify(titles));
    await page.fill("#q", "");
    titles = await visibleTitles();
    check("cleared: 3 visible again", titles.length === 3, JSON.stringify(titles));
  });
}
