# Render
```html
<div
  id="grid"
>
  <div>
    <span>
      a1.0
    </span>
    <span>
      a2.0
    </span>
    <span>
      a3.0
    </span>
  </div>
  <div>
    <span>
      b4.0
    </span>
    <span>
      b5.0
    </span>
  </div>
</div>
<button
  id="both"
>
  both
</button>
<button
  id="count"
>
  count
</button>
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#grid span"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
// reorder outer rows, reorder/insert/remove inner cells, bump count — one batch
container.querySelector("#both").click();
```
```html
<div
  id="grid"
>
  <div>
    <span>
      b5.1
    </span>
    <span>
      b6.1
    </span>
    <span>
      b4.1
    </span>
  </div>
  <div>
    <span>
      a3.1
    </span>
    <span>
      a1.1
    </span>
  </div>
</div>
<button
  id="both"
>
  both
</button>
<button
  id="count"
>
  count
</button>
```
## Change
```
INSERT: #grid > div:nth-of-type(1) > span
REMOVE: #grid > div:nth-of-type(1) > span:nth-of-type(3) + span
INSERT: #grid > div:nth-of-type(1) > span
REMOVE: #grid > div:nth-of-type(2) > span:nth-of-type(2) + span
REMOVE: #grid > div:nth-of-type(2) > span:nth-of-type(2) + span
INSERT: #grid > div:nth-of-type(2) > span
REMOVE: #grid > div:nth-of-type(2) + div
INSERT: #grid > div
UPDATE: #grid > div:nth-of-type(2) > span:nth-of-type(2)::text@3 "0" => "1"
UPDATE: #grid > div:nth-of-type(2) > span:nth-of-type(1)::text@3 "0" => "1"
UPDATE: #grid > div:nth-of-type(1) > span:nth-of-type(3)::text@3 "0" => "1"
UPDATE: #grid > div:nth-of-type(1) > span:nth-of-type(1)::text@3 "0" => "1"
UPDATE: #grid > div:nth-of-type(1) > span:nth-of-type(2)::text@3 "" => "1"
UPDATE: #grid > div:nth-of-type(1) > span:nth-of-type(2)::text@0 "" => "b"
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#grid span"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```

# Update
```js
container.querySelector("#count").click();
```
```html
<div
  id="grid"
>
  <div>
    <span>
      b5.2
    </span>
    <span>
      b6.2
    </span>
    <span>
      b4.2
    </span>
  </div>
  <div>
    <span>
      a3.2
    </span>
    <span>
      a1.2
    </span>
  </div>
</div>
<button
  id="both"
>
  both
</button>
<button
  id="count"
>
  count
</button>
```
## Change
```
UPDATE: #grid > div:nth-of-type(2) > span:nth-of-type(2)::text@3 "1" => "2"
UPDATE: #grid > div:nth-of-type(2) > span:nth-of-type(1)::text@3 "1" => "2"
UPDATE: #grid > div:nth-of-type(1) > span:nth-of-type(3)::text@3 "1" => "2"
UPDATE: #grid > div:nth-of-type(1) > span:nth-of-type(1)::text@3 "1" => "2"
UPDATE: #grid > div:nth-of-type(1) > span:nth-of-type(2)::text@3 "1" => "2"
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#grid span"), el => el.textContent).join(",");
if (actual !== expected) {
  throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
  }
```
