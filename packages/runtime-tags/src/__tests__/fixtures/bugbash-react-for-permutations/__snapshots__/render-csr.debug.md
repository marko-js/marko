# Render `{"items":[1,2,3,4,5,6]}`
```html
<div
  id="keyed"
>
  <span>
    1
  </span>
  <span>
    2
  </span>
  <span>
    3
  </span>
  <span>
    4
  </span>
  <span>
    5
  </span>
  <span>
    6
  </span>
</div>
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[6,5,4,3,2,1]}`
```html
<div
  id="keyed"
>
  <span>
    6
  </span>
  <span>
    5
  </span>
  <span>
    4
  </span>
  <span>
    3
  </span>
  <span>
    2
  </span>
  <span>
    1
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span:nth-of-type(6) + span
INSERT: #keyed > span
REMOVE: #keyed > span:nth-of-type(6) + span
INSERT: #keyed > span
REMOVE: #keyed > span:nth-of-type(6) + span
INSERT: #keyed > span
REMOVE: #keyed > span:nth-of-type(6) + span
INSERT: #keyed > span
REMOVE: #keyed > span:nth-of-type(6) + span
INSERT: #keyed > span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[5,4,3,2,1,6]}`
```html
<div
  id="keyed"
>
  <span>
    5
  </span>
  <span>
    4
  </span>
  <span>
    3
  </span>
  <span>
    2
  </span>
  <span>
    1
  </span>
  <span>
    6
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span
INSERT: #keyed > span:nth-of-type(5) + span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[5,1,2,3,4,6]}`
```html
<div
  id="keyed"
>
  <span>
    5
  </span>
  <span>
    1
  </span>
  <span>
    2
  </span>
  <span>
    3
  </span>
  <span>
    4
  </span>
  <span>
    6
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span:nth-of-type(5) + span
INSERT: #keyed > span:nth-of-type(1) + span
REMOVE: #keyed > span:nth-of-type(5) + span
INSERT: #keyed > span:nth-of-type(1) + span
REMOVE: #keyed > span:nth-of-type(5) + span
INSERT: #keyed > span:nth-of-type(1) + span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[5,1,3,4,6]}`
```html
<div
  id="keyed"
>
  <span>
    5
  </span>
  <span>
    1
  </span>
  <span>
    3
  </span>
  <span>
    4
  </span>
  <span>
    6
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span:nth-of-type(2) + span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[5,9,3,1,4,6]}`
```html
<div
  id="keyed"
>
  <span>
    5
  </span>
  <span>
    9
  </span>
  <span>
    3
  </span>
  <span>
    1
  </span>
  <span>
    4
  </span>
  <span>
    6
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span:nth-of-type(4) + span
INSERT: #keyed > span:nth-of-type(1) + span
INSERT: #keyed > span:nth-of-type(1) + span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[6,3,9,5]}`
```html
<div
  id="keyed"
>
  <span>
    6
  </span>
  <span>
    3
  </span>
  <span>
    9
  </span>
  <span>
    5
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span:nth-of-type(2) + span
REMOVE: #keyed > span:nth-of-type(2) + span
REMOVE: #keyed > span:nth-of-type(4) + span
INSERT: #keyed > span
REMOVE: #keyed > span:nth-of-type(4) + span
INSERT: #keyed > span
REMOVE: #keyed > span:nth-of-type(4) + span
INSERT: #keyed > span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[]}`
```html
<div
  id="keyed"
/>
```
## Change
```
REMOVE: #keyed > :is(span, span, span, span)
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[3,1,2]}`
```html
<div
  id="keyed"
>
  <span>
    3
  </span>
  <span>
    1
  </span>
  <span>
    2
  </span>
</div>
```
## Change
```
INSERT: #keyed > span
INSERT: #keyed > span:nth-of-type(1) + span
INSERT: #keyed > span:nth-of-type(2) + span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[3,1,2]}`

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[2]}`
```html
<div
  id="keyed"
>
  <span>
    2
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span
REMOVE: #keyed > span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[7,2,8]}`
```html
<div
  id="keyed"
>
  <span>
    7
  </span>
  <span>
    2
  </span>
  <span>
    8
  </span>
</div>
```
## Change
```
INSERT: #keyed > span:nth-of-type(2) + span
INSERT: #keyed > span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update `{"items":[8,7]}`
```html
<div
  id="keyed"
>
  <span>
    8
  </span>
  <span>
    7
  </span>
</div>
```
## Change
```
REMOVE: #keyed > span:nth-of-type(2) + span
REMOVE: #keyed > span:nth-of-type(2) + span
INSERT: #keyed > span
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```
