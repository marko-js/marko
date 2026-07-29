# Render `{"title":"First","view":"ticker","entries":["est","cet"],"entriesB":["utc"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<h1>
  First
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
<button
  class="mark"
>
  mark 0
</button>
<ol
  class="ticker"
>
  <li>
    utc
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
  First
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
<button
  class="mark"
>
  mark 0
</button>
<ol
  class="ticker"
>
  <li>
    utc
  </li>
</ol>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"title":"Second","view":"ticker","entries":["est","cet","ist"],"entriesB":["utc","gmt"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<h1>
  Second
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
<button
  class="mark"
>
  mark 0
</button>
<ol
  class="ticker"
>
  <li>
    utc
  </li>
</ol>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```
## Console
```
ERROR "navigate() document fallback: Error: A persisted update selected a renderer (\"packages/runtime-tags/src/__tests__/fixtures/persisted-update-latch-stops-frame/template.marko_0_count/var\") with no registered update and no loader, so the navigation cannot complete client-side."
```

# Update
```js
assert.equal(fallbacks(document).length, 1);
assert.match(fallbacks(document)[0], /count\/var/);
assert.deepEqual(tickerItems(document, 0), ["est", "cet"]);
assert.deepEqual(tickerItems(document, 1), ["utc"]);
```
