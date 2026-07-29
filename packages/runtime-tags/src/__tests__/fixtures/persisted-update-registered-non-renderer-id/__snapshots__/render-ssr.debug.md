# Render `{"title":"Zones","view":"ticker","entries":["est","cet"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<h1>
  Zones
</h1>
<button
  class="mark"
>
  mark 0
</button>
<ol
  class="ticker"
>
  <li>
    est
  </li>
  <li>
    cet
  </li>
</ol>
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
<h1>
  Zones
</h1>
<button
  class="mark"
>
  mark 0
</button>
<ol
  class="ticker"
>
  <li>
    est
  </li>
  <li>
    cet
  </li>
</ol>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"title":"More Zones","view":"ticker","entries":["est","cet","ist"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<h1>
  More Zones
</h1>
<button
  class="mark"
>
  mark 0
</button>
<ol
  class="ticker"
>
  <li>
    est
  </li>
  <li>
    cet
  </li>
</ol>
```
## Change
```
UPDATE: h1::text "Zones" => "More Zones"
```
## Console
```
ERROR "navigate() document fallback: Error: A persisted update selected a renderer (\"packages/runtime-tags/src/__tests__/fixtures/persisted-update-registered-non-renderer-id/template.marko_0_count/var\") with no registered update and no loader, so the navigation cannot complete client-side."
```

# Update
```js
assert.deepEqual(tickerItems(document), ["est", "cet"]);
```

# Update
```js
const fallbacks = (document.defaultView).__persistedNavFallbacks;
assert.equal(fallbacks?.length, 1);
assert.match(fallbacks[0], /_0_count\/var/);
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
<h1>
  More Zones
</h1>
<button
  class="mark"
>
  mark 0
</button>
<ol
  class="ticker"
>
  <li>
    est
  </li>
  <li>
    cet
  </li>
</ol>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
