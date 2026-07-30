# Render
```html
<div
  class="list"
>
  <p>
    text 0
  </p>
  <pre>
    code 1
  </pre>
  <p>
    text 2
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
  <pre>
    code 1
  </pre>
  <p>
    text 2
  </p>
  <p>
    text 0
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
    text 1
  </p>
  <pre>
    code 2
  </pre>
  <pre>
    code 0
  </pre>
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
REMOVE: .list > p + pre
INSERT: .list > p + pre
REMOVE: .list > pre:nth-of-type(1) + p
INSERT: .list > pre:nth-of-type(1) + pre
REMOVE: .list > pre:nth-of-type(2) + p
UPDATE: .list > p::text@5 "" => "1"
UPDATE: .list > pre:nth-of-type(1)::text@5 "" => "2"
UPDATE: .list > pre:nth-of-type(2)::text@5 "" => "0"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="list"
>
  <pre>
    code 2
  </pre>
  <pre>
    code 0
  </pre>
  <p>
    text 1
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
INSERT: .list > pre:nth-of-type(2) + p
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<div
  class="list"
>
  <pre>
    code 0
  </pre>
  <p>
    text 1
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
REMOVE: .list > pre
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
    text 0
  </p>
  <pre>
    code 1
  </pre>
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
REMOVE: .list > p + pre
INSERT: .list > p + pre
REMOVE: .list > pre + p
UPDATE: .list > p::text@5 "" => "0"
UPDATE: .list > pre::text@5 "" => "1"
```
