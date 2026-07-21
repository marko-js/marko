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
const chunk = _nodePath.default.join(__dirname, "dist", mode, "dom", "roster.marko.persisted.mjs");
if (_nodeFs.default.existsSync(chunk)) {
  _nodeFs.default.writeFileSync(chunk, 'throw new Error("persisted chunk unavailable");\n');
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
_strict.default.equal(document.querySelector("h2.tally").textContent, "3 aboard");
_strict.default.deepEqual(crewItems(document), ["ada", "grace"]);
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
