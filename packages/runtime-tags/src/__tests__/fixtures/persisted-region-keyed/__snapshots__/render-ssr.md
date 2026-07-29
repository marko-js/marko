# Render `{"items":[{"id":"one","title":"One","badge":"new"},{"id":"two","title":"Two","badge":"hot"}],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<article
  class="item"
>
  <button
    class="open"
  >
    One
  </button>
  <span
    class="badge"
  >
    new
  </span>
</article>
<article
  class="item"
>
  <button
    class="open"
  >
    Two
  </button>
  <span
    class="badge"
  >
    hot
  </span>
</article>
<p
  class="opens"
>
  0 opened
</p>
```

# Update `{"items":[{"id":"one","title":"One","badge":"new"},{"id":"two","title":"Two","badge":"hot"}],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<article
  class="item"
>
  <button
    class="open"
  >
    One
  </button>
  <span
    class="badge"
  >
    new
  </span>
</article>
<article
  class="item"
>
  <button
    class="open"
  >
    Two
  </button>
  <span
    class="badge"
  >
    hot
  </span>
</article>
<p
  class="opens"
>
  0 opened
</p>
```
## Change
```
INSERT: article:nth-of-type(1) > button + span
REMOVE: article:nth-of-type(1) > span + span
INSERT: article:nth-of-type(2) > button + span
REMOVE: article:nth-of-type(2) > span + span
```

# Update update frame 1 of 2

# Update `{"items":[{"id":"two","title":"Two","badge":"hot"},{"id":"one","title":"One","badge":"new"}],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<article
  class="item"
>
  <button
    class="open"
  >
    Two
  </button>
  <span
    class="badge"
  >
    hot
  </span>
</article>
<article
  class="item"
>
  <button
    class="open"
  >
    One
  </button>
  <span
    class="badge"
  >
    new
  </span>
</article>
<p
  class="opens"
>
  0 opened
</p>
```
## Change
```
REMOVE: article:nth-of-type(2) + article
INSERT: article
```

# Update
```js
assert.deepEqual(titles(document), ["Two", "One"]);
assert.deepEqual(badges(document), ["hot", "new"]);
```

# Update update frame 1 of 2

# Update `{"items":[{"id":"two","title":"Two","badge":"hot"},{"id":"one","title":"One","badge":"sale"}],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<article
  class="item"
>
  <button
    class="open"
  >
    Two
  </button>
  <span
    class="badge"
  >
    hot
  </span>
</article>
<article
  class="item"
>
  <button
    class="open"
  >
    One
  </button>
  <span
    class="badge"
  >
    sale
  </span>
</article>
<p
  class="opens"
>
  0 opened
</p>
```
## Change
```
INSERT: article:nth-of-type(2) > button + span
REMOVE: article:nth-of-type(2) > span + span
```

# Update
```js
assert.deepEqual(badges(document), ["hot", "sale"]);
```
