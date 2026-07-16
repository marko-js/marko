# Render `{"$global":{"persisted":true,"view":"home","title":"","label":""}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="home"
>
  welcome home
</p>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="home"
>
  welcome home
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"detail","title":"Widget One","label":"alpha"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<h2
  class="title"
>
  Widget One
</h2>
<div
  class="gadget"
>
  <span
    class="gadget__label"
  >
    alpha
  </span>
  <button
    class="gadget__tap"
  >
    taps 0
  </button>
</div>
```
## Change
```
INSERT: .title, .gadget
REMOVE: .count + p
```

# Update
```js
container.ownerDocument.defaultView.__MARKO_LAZY_CHUNK_GONE__ = true;
```

# Update
## Console
```
ERROR "navigate() document fallback: Error: A persisted update depends on a lazy module that failed to load, so the navigation cannot complete client-side: Error: lazy chunk unavailable"
```

# Update
```js
container.querySelector(".gadget__tap").click();
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<h2
  class="title"
>
  Widget One
</h2>
<div
  class="gadget"
>
  <span
    class="gadget__label"
  >
    alpha
  </span>
  <button
    class="gadget__tap"
  >
    taps 0
  </button>
</div>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
