# Render
```html
<dl>
  <dt>
    1
  </dt>
  <dd>
    1
  </dd>
  <dt>
    2
  </dt>
  <dd>
    2
  </dd>
  <dt>
    3
  </dt>
  <dd>
    3
  </dd>
  <dt>
    4
  </dt>
  <dd>
    4
  </dd>
</dl>
<button
  class="reverse"
>
  reverse
</button>
<button
  class="swap"
>
  swap middle
</button>
<button
  class="mixed"
>
  add and move
</button>
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<dl>
  <dt>
    4
  </dt>
  <dd>
    4
  </dd>
  <dt>
    3
  </dt>
  <dd>
    3
  </dd>
  <dt>
    2
  </dt>
  <dd>
    2
  </dd>
  <dt>
    1
  </dt>
  <dd>
    1
  </dd>
</dl>
<button
  class="reverse"
>
  reverse
</button>
<button
  class="swap"
>
  swap middle
</button>
<button
  class="mixed"
>
  add and move
</button>
```
## Change
```
REMOVE: dl > dd
REMOVE: dl > dd
REMOVE: dl > dd
REMOVE: dl > dt
REMOVE: dl > dt
REMOVE: dl > dt
INSERT: dl > dt:nth-of-type(1), dl > dd:nth-of-type(1)
INSERT: dl > dt:nth-of-type(2), dl > dd:nth-of-type(2)
INSERT: dl > dt:nth-of-type(3), dl > dd:nth-of-type(3)
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<dl>
  <dt>
    4
  </dt>
  <dd>
    4
  </dd>
  <dt>
    2
  </dt>
  <dd>
    2
  </dd>
  <dt>
    3
  </dt>
  <dd>
    3
  </dd>
  <dt>
    1
  </dt>
  <dd>
    1
  </dd>
</dl>
<button
  class="reverse"
>
  reverse
</button>
<button
  class="swap"
>
  swap middle
</button>
<button
  class="mixed"
>
  add and move
</button>
```
## Change
```
REMOVE: dl > dd
REMOVE: dl > dt
INSERT: dl > dt:nth-of-type(2), dl > dd:nth-of-type(2)
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<dl>
  <dt>
    9
  </dt>
  <dd>
    9
  </dd>
  <dt>
    3
  </dt>
  <dd>
    3
  </dd>
  <dt>
    1
  </dt>
  <dd>
    1
  </dd>
  <dt>
    4
  </dt>
  <dd>
    4
  </dd>
  <dt>
    2
  </dt>
  <dd>
    2
  </dd>
</dl>
<button
  class="reverse"
>
  reverse
</button>
<button
  class="swap"
>
  swap middle
</button>
<button
  class="mixed"
>
  add and move
</button>
```
## Change
```
REMOVE: dl > dd
REMOVE: dl > dd
REMOVE: dl > dt
REMOVE: dl > dt
INSERT: dl > dt:nth-of-type(1), dl > dd:nth-of-type(1)
INSERT: dl > dt:nth-of-type(2), dl > dd:nth-of-type(2)
INSERT: dl > dt:nth-of-type(3), dl > dd:nth-of-type(3)
```
