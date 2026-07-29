# Render `{"$global":{"persisted":true,"view":"panel"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="shell"
>
  <div
    class="box"
  >
    panel
  </div>
  <span
    class="note"
  >
    fresh
  </span>
</section>
```

# Update
```js
assert.equal(document.body.dataset.panelRuns, "1");
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
  class="shell"
>
  <div
    class="box"
  >
    panel
  </div>
  <span
    class="note"
  >
    fresh
  </span>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"about"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="shell"
>
  <p
    class="about"
  >
    about
  </p>
</section>
```
## Change
```
INSERT: .shell > .about
REMOVE: .shell > div
REMOVE: .shell > span
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 1
</button>
```
## Change
```
REMOVE: .count + section
```

# Update `{"$global":{"persisted":true,"view":"panel","veto":true,"serializedGlobals":{"veto":true}}}`
## Console
```
ERROR "navigate() document fallback: Error: a4"
```

# Update
```js
assert.equal(document.querySelector("div.box"), null);
assert.equal(document.body.dataset.panelRuns, "1");
assert.equal(
  document.querySelector("button.count").textContent,
  "clicked 1",
);
```
