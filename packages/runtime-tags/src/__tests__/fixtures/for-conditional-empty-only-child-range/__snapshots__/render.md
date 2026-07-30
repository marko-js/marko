# Render
```html
<div
  class="list"
>
  <p>
    item 0
  </p>
  <p>
    item 2
  </p>
</div>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="drop"
>
  Drop
</button>
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="list"
>
  <p>
    item 1
  </p>
</div>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="drop"
>
  Drop
</button>
```
## Change
```
REMOVE: .list > p
INSERT: .list > p
REMOVE: .list > p + p
UPDATE: .list > p::text@5 "" => "1"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="list"
>
  <p>
    item 0
  </p>
  <p>
    item 2
  </p>
</div>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="drop"
>
  Drop
</button>
```
## Change
```
INSERT: .list > p
REMOVE: .list > p:nth-of-type(1) + p
INSERT: .list > p:nth-of-type(1) + p
UPDATE: .list > p:nth-of-type(1)::text@5 "" => "0"
UPDATE: .list > p:nth-of-type(2)::text@5 "" => "2"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="list"
>
  <p>
    item 2
  </p>
  <p>
    item 0
  </p>
</div>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="drop"
>
  Drop
</button>
```
## Change
```
REMOVE: .list > p
INSERT: .list > p:nth-of-type(1) + p
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="list"
>
  <p>
    item 1
  </p>
</div>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="drop"
>
  Drop
</button>
```
## Change
```
INSERT: .list > p
REMOVE: .list > p + p
REMOVE: .list > p + p
UPDATE: .list > p::text@5 "" => "1"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="list"
>
  <p>
    item 1
  </p>
</div>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="drop"
>
  Drop
</button>
```
## Change
```
REMOVE: .list > p
INSERT: .list > p
```

# Update
```js
(document.querySelector(selector)).click();
```
