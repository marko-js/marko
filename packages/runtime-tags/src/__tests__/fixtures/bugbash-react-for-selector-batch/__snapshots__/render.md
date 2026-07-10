# Render
```html
<ul
  id="list"
>
  <li
    class="sel"
  >
    a
  </li>
  <li>
    b
  </li>
  <li>
    c
  </li>
  <li>
    d
  </li>
</ul>
<button
  id="sel2"
>
  sel2
</button>
<button
  id="batch"
>
  batch
</button>
<button
  id="swap"
>
  swap
</button>
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#list li"), el => el.textContent + (el.className === "sel" ? "*" : "")).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector("#sel2").click();
```
```html
<ul
  id="list"
>
  <li>
    a
  </li>
  <li
    class="sel"
  >
    b
  </li>
  <li>
    c
  </li>
  <li>
    d
  </li>
</ul>
<button
  id="sel2"
>
  sel2
</button>
<button
  id="batch"
>
  batch
</button>
<button
  id="swap"
>
  swap
</button>
```
## Change
```
UPDATE: #list > li:nth-of-type(1)[class] "sel" => null
UPDATE: .sel[class] null => "sel"
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#list li"), el => el.textContent + (el.className === "sel" ? "*" : "")).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector("#batch").click();
```
```html
<ul
  id="list"
>
  <li>
    d
  </li>
  <li
    class="sel"
  >
    c
  </li>
  <li>
    a
  </li>
</ul>
<button
  id="sel2"
>
  sel2
</button>
<button
  id="batch"
>
  batch
</button>
<button
  id="swap"
>
  swap
</button>
```
## Change
```
REMOVE: #list > li:nth-of-type(3) + .sel
REMOVE: #list > li:nth-of-type(3) + .sel
INSERT: #list > .sel
REMOVE: #list > li:nth-of-type(3) + li
INSERT: #list > li
UPDATE: .sel[class] null => "sel"
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#list li"), el => el.textContent + (el.className === "sel" ? "*" : "")).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
c.querySelector("#swap").click();
```
```html
<ul
  id="list"
>
  <li>
    a
  </li>
  <li>
    c
  </li>
  <li
    class="sel"
  >
    d
  </li>
</ul>
<button
  id="sel2"
>
  sel2
</button>
<button
  id="batch"
>
  batch
</button>
<button
  id="swap"
>
  swap
</button>
```
## Change
```
REMOVE: .sel + li
INSERT: #list > li
REMOVE: .sel + li
INSERT: #list > li
UPDATE: #list > li:nth-of-type(2)[class] "sel" => null
UPDATE: .sel[class] null => "sel"
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#list li"), el => el.textContent + (el.className === "sel" ? "*" : "")).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```
