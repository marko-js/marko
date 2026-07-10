# Render
```html
<div
  id="wrap"
>
  <i>
    a1
  </i>
  <i>
    a2
  </i>
  <b>
    b8
  </b>
  <b>
    b9
  </b>
</div>
<button
  id="empty-a"
>
  empty a
</button>
<button
  id="refill-a"
>
  refill a
</button>
<button
  id="empty-both"
>
  empty both
</button>
<button
  id="refill-both"
>
  refill both
</button>
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#wrap i, #wrap b"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="wrap"
>
  <b>
    b8
  </b>
  <b>
    b9
  </b>
</div>
<button
  id="empty-a"
>
  empty a
</button>
<button
  id="refill-a"
>
  refill a
</button>
<button
  id="empty-both"
>
  empty both
</button>
<button
  id="refill-both"
>
  refill both
</button>
```
## Change
```
REMOVE: #wrap > i
REMOVE: #wrap > i
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#wrap i, #wrap b"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="wrap"
>
  <i>
    a3
  </i>
  <i>
    a1
  </i>
  <b>
    b8
  </b>
  <b>
    b9
  </b>
</div>
<button
  id="empty-a"
>
  empty a
</button>
<button
  id="refill-a"
>
  refill a
</button>
<button
  id="empty-both"
>
  empty both
</button>
<button
  id="refill-both"
>
  refill both
</button>
```
## Change
```
INSERT: #wrap > i
INSERT: #wrap > i:nth-of-type(1) + i
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#wrap i, #wrap b"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="wrap"
/>
<button
  id="empty-a"
>
  empty a
</button>
<button
  id="refill-a"
>
  refill a
</button>
<button
  id="empty-both"
>
  empty both
</button>
<button
  id="refill-both"
>
  refill both
</button>
```
## Change
```
REMOVE: #wrap > i
REMOVE: #wrap > i
REMOVE: #wrap > b
REMOVE: #wrap > b
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#wrap i, #wrap b"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  id="wrap"
>
  <i>
    a7
  </i>
  <b>
    b5
  </b>
  <b>
    b6
  </b>
</div>
<button
  id="empty-a"
>
  empty a
</button>
<button
  id="refill-a"
>
  refill a
</button>
<button
  id="empty-both"
>
  empty both
</button>
<button
  id="refill-both"
>
  refill both
</button>
```
## Change
```
INSERT: #wrap > i
INSERT: #wrap > i + b
INSERT: #wrap > b:nth-of-type(1) + b
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#wrap i, #wrap b"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```
