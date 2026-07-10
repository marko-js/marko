# Render
```html
<div
  class="sink"
>
  mount x;mount y;mount z;
</div>
<div
  id="list"
>
  <em>
    x
  </em>
  <em>
    y
  </em>
  <em>
    z
  </em>
</div>
<button
  id="reorder"
>
  reorder
</button>
<button
  id="remove"
>
  remove x
</button>
<button
  id="clear"
>
  clear
</button>
```

# Update
```js
const actual = container.querySelector(".sink").textContent;
if (actual !== expected) {
  throw new Error(`log mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  class="sink"
>
  mount x;mount y;mount z;
</div>
<div
  id="list"
>
  <em>
    z
  </em>
  <em>
    x
  </em>
  <em>
    y
  </em>
</div>
<button
  id="reorder"
>
  reorder
</button>
<button
  id="remove"
>
  remove x
</button>
<button
  id="clear"
>
  clear
</button>
```
## Change
```
REMOVE: #list > em:nth-of-type(3) + em
INSERT: #list > em
```

# Update
```js
const actual = container.querySelector(".sink").textContent;
if (actual !== expected) {
  throw new Error(`log mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  class="sink"
>
  mount x;mount y;mount z;abort x;
</div>
<div
  id="list"
>
  <em>
    z
  </em>
  <em>
    y
  </em>
</div>
<button
  id="reorder"
>
  reorder
</button>
<button
  id="remove"
>
  remove x
</button>
<button
  id="clear"
>
  clear
</button>
```
## Change
```
REMOVE: #list > em:nth-of-type(1) + em
REMOVE: .sink::text("mount x;mount y;mount z;")
INSERT: .sink::text("mount x;mount y;mount z;abort x;")
```

# Update
```js
const actual = container.querySelector(".sink").textContent;
if (actual !== expected) {
  throw new Error(`log mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector(`#${id}`).click();
```
```html
<div
  class="sink"
>
  mount x;mount y;mount z;abort x;abort z;abort y;
</div>
<div
  id="list"
/>
<button
  id="reorder"
>
  reorder
</button>
<button
  id="remove"
>
  remove x
</button>
<button
  id="clear"
>
  clear
</button>
```
## Change
```
REMOVE: #list > :is(em, em)
REMOVE: .sink::text("mount x;mount y;mount z;abort x;")
INSERT: .sink::text("mount x;mount y;mount z;abort x;abort z;")
REMOVE: .sink::text("mount x;mount y;mount z;abort x;abort z;")
INSERT: .sink::text("mount x;mount y;mount z;abort x;abort z;abort y;")
```

# Update
```js
const actual = container.querySelector(".sink").textContent;
if (actual !== expected) {
  throw new Error(`log mismatch: expected [${expected}] got [${actual}]`);
  }
```
