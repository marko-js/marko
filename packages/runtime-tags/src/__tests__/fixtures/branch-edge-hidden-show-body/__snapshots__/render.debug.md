# Render
```html
<div
  class="host"
>
  <b>
    1
  </b>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="show"
>
  Show
</button>
<button
  class="items"
>
  Items
</button>
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
  class="show"
>
  Show
</button>
<button
  class="items"
>
  Items
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

# Update
```js
(document.querySelector(selector)).click();
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
    1
  </b>
  <b>
    2
  </b>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="show"
>
  Show
</button>
<button
  class="items"
>
  Items
</button>
```
## Change
```
INSERT: .host > b
INSERT: .host > b:nth-of-type(1) + b
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
  class="show"
>
  Show
</button>
<button
  class="items"
>
  Items
</button>
```
## Change
```
REMOVE: .host > :is(b, b)
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
    1
  </b>
  <b>
    2
  </b>
</div>
<button
  class="outer"
>
  Outer
</button>
<button
  class="show"
>
  Show
</button>
<button
  class="items"
>
  Items
</button>
```
## Change
```
INSERT: .host > b
INSERT: .host > b:nth-of-type(1) + b
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
  class="show"
>
  Show
</button>
<button
  class="items"
>
  Items
</button>
```
## Change
```
REMOVE: .host > b
REMOVE: .host > b
```
