# Render `{"title":"First","performers":["ada","grace"],"view":"ticker","entries":["est","cet"],"entriesB":["utc"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<h1>
  First
</h1>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    2 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ol>
</section>
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
<section
  class="stage"
>
  <h2
    class="headline"
  >
    2 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ol>
</section>
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

# Update `{"title":"Second","performers":["ada","grace","alan"],"view":"ticker","entries":["est","cet"],"entriesB":["utc"],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<h1>
  Second
</h1>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    3 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ol>
</section>
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
UPDATE: .headline::text@0 "2" => "3"
INSERT: ol:nth-of-type(1) > :is(li, li)
REMOVE: ol:nth-of-type(1) > li:nth-of-type(2) + li
REMOVE: ol:nth-of-type(1) > li:nth-of-type(2) + li
INSERT: ol:nth-of-type(2) > li
REMOVE: ol:nth-of-type(2) > li + li
```

# Update
```js
assert.equal(deferred(document).length, 1);
assert.equal(fallbacks(document).length, 0);
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 1
</button>
<h1>
  Third
</h1>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    1 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ol
    class="lineup"
  >
    <li>
      ada
    </li>
    <li>
      grace
    </li>
  </ol>
</section>
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
UPDATE: h1::text "Second" => "Third"
UPDATE: .headline::text@0 "3" => "1"
```

# Update `{"title":"Third","performers":["grace"],"view":"ticker","entries":["est","cet","ist"],"entriesB":["utc","gmt"],"$global":{"persisted":true}}`

# Update
```js
assert.equal(fallbacks(document).length, 0);
```

# Update
```js
deferred(document)[0].release();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<h1>
  Third
</h1>
<section
  class="stage"
>
  <h2
    class="headline"
  >
    1 on stage
  </h2>
  <button
    class="pin"
  >
    pin 0
  </button>
  <ol
    class="lineup"
  >
    <li>
      grace
    </li>
  </ol>
</section>
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
INSERT: .lineup > li
REMOVE: .lineup > li + li
REMOVE: .lineup > li + li
```
## Console
```
ERROR "navigate() document fallback: Error: A persisted update selected a renderer (\"packages/runtime-tags/src/__tests__/fixtures/persisted-update-fail-latch-stops-drain/template.marko_0_count/var\") with no registered update and no loader, so the navigation cannot complete client-side."
```

# Update
```js
assert.deepEqual(lineupItems(document), ["grace"]);
assert.equal(fallbacks(document).length, 1);
assert.match(fallbacks(document)[0], /count\/var/);
```
