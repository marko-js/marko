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
REMOVE: dl > dd:nth-of-type(4) + dt
REMOVE: dl > dd:nth-of-type(4) + dd
INSERT: dl > :is(dt, dd)
REMOVE: dl > dd:nth-of-type(4) + dt
REMOVE: dl > dd:nth-of-type(4) + dd
INSERT: dl > :is(dt, dd)
REMOVE: dl > dd:nth-of-type(4) + dt
REMOVE: dl > dd:nth-of-type(4) + dd
INSERT: dl > :is(dt, dd)
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
REMOVE: dl > dd:nth-of-type(3) + dt
REMOVE: dl > dd:nth-of-type(3) + dd
INSERT: dl > dd:nth-of-type(1) + :is(dt, dd)
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
REMOVE: dl > dd:nth-of-type(2) + dt
REMOVE: dl > dd:nth-of-type(2) + dd
INSERT: dl > :is(dt, dd)
REMOVE: dl > dd:nth-of-type(5) + dt
REMOVE: dl > dd:nth-of-type(5) + dd
INSERT: dl > :is(dt, dd)
INSERT: dl > :is(dt, dd)
```
