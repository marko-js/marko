export async function grade({ withPage, check }) {
  await withPage(async (page) => {
    await page.waitForSelector("#note-input");
    await page.fill("#note-input", "more garlic next time");
    await page.click("#add-note");
    let notes = await page.$$eval("#notes li.note", (els) => els.map((el) => el.textContent.trim()));
    check("first note appears", notes.length === 1 && /more garlic/.test(notes[0]), JSON.stringify(notes));
    await page.fill("#note-input", "simmer longer");
    await page.click("#add-note");
    notes = await page.$$eval("#notes li.note", (els) => els.map((el) => el.textContent.trim()));
    check("second note appends in order", notes.length === 2 && /more garlic/.test(notes[0]) && /simmer longer/.test(notes[1]), JSON.stringify(notes));
  }, "/recipes/1");
}
