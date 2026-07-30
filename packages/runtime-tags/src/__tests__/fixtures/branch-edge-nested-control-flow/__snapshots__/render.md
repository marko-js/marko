# Render
```html
<div
  class="host"
>
  <b>
    even 0
  </b>
  <i>
    odd 1
  </i>
  <u>
    tail
  </u>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
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
  <i>
    odd 1
  </i>
  <b>
    even 0
  </b>
  <u>
    tail
  </u>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
</button>
```
## Change
```
REMOVE: .host > b + i
INSERT: .host > i
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
>
  <i>
    odd 1
  </i>
  <b>
    even 0
  </b>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
</button>
```
## Change
```
REMOVE: .host > b + u
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
>
  <b>
    even 0
  </b>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
</button>
```
## Change
```
REMOVE: .host > i
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
/>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
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
  <u>
    tail
  </u>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
</button>
```
## Change
```
INSERT: .host > u
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
/>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
</button>
```
## Change
```
REMOVE: .host > u
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="host"
>
  <u>
    tail
  </u>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="drop"
>
  Drop
</button>
<button
  class="clear"
>
  Clear
</button>
<button
  class="show"
>
  Show
</button>
```
## Change
```
INSERT: .host > u
```
