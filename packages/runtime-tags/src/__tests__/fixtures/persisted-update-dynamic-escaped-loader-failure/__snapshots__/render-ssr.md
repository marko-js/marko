# Render `{"crew":["ada","grace"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="board"
>
  <h2
    class="tally"
  >
    2 aboard
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ul
    class="crew"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ul>
</section>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="board"
>
  <h2
    class="tally"
  >
    2 aboard
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ul
    class="crew"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update
```js
for (const mode of ["debug", "optimize"]) {
const chunk = path.join(
  import.meta.dirname,
  "dist",
  mode,
  "dom",
  "roster.marko.persisted.mjs",
);
if (fs.existsSync(chunk)) {
  fs.writeFileSync(
chunk,
'throw new Error("persisted chunk unavailable");\n',
  );
  }
}
```

# Update `{"crew":["ada","grace","alan"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="board"
>
  <h2
    class="tally"
  >
    3 aboard
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ul
    class="crew"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: .tally::text@0 "2" => "3"
```
## Console
```
ERROR "navigate() document fallback: Error: persisted chunk unavailable"
```

# Update
```js
assert.equal(document.querySelector("h2.tally").textContent, "3 aboard");
assert.deepEqual(crewItems(document), ["ada", "grace"]);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<section
  class="board"
>
  <h2
    class="tally"
  >
    3 aboard
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ul
    class="crew"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
