# Render
```html
<div
  class="host"
>
  <b>
    hi
  </b>
  <span
    class="tail"
  >
    tail
  </span>
  <span
    class="sib"
  >
    sib
  </span>
</div>
<button
  class="show"
>
  Show
</button>
<button
  class="outer"
>
  Outer
</button>
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
>
  <span
    class="tail"
  >
    tail
  </span>
  <span
    class="sib"
  >
    sib
  </span>
</div>
<button
  class="show"
>
  Show
</button>
<button
  class="outer"
>
  Outer
</button>
```
## Change
```
REMOVE: .host > b
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
>
  <span
    class="sib"
  >
    sib
  </span>
</div>
<button
  class="show"
>
  Show
</button>
<button
  class="outer"
>
  Outer
</button>
```
## Change
```
REMOVE: .host > span
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
>
  <span
    class="tail"
  >
    tail
  </span>
  <span
    class="sib"
  >
    sib
  </span>
</div>
<button
  class="show"
>
  Show
</button>
<button
  class="outer"
>
  Outer
</button>
```
## Change
```
INSERT: .host > :is(b, .tail)
REMOVE: .host > b
```
