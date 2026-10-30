# Render
```html
<button
  id="bump"
>
  Bump
</button>
<div
  id="listener"
>
  never
</div>
<div
  id="runs"
>
  never
</div>
<div
  id="own"
>
  never
</div>
```

# Update
```js
document.querySelector("#bump").click();
```
```html
<button
  id="bump"
>
  Bump
</button>
<div
  id="listener"
>
  never
</div>
<div
  id="runs"
>
  never
</div>
<div
  id="own"
>
  own 1
</div>
```
## Change
```
REMOVE: #own::text("never")
INSERT: #own::text("own 1")
```

# Update
```js
document.querySelector("#bump").click();
```
```html
<button
  id="bump"
>
  Bump
</button>
<div
  id="listener"
>
  never
</div>
<div
  id="runs"
>
  never
</div>
<div
  id="own"
>
  own 2
</div>
```
## Change
```
REMOVE: #own::text("own 1")
INSERT: #own::text("own 2")
```

# Update
```js
document.querySelector("#bump").click();
```
```html
<button
  id="bump"
>
  Bump
</button>
<div
  id="listener"
>
  never
</div>
<div
  id="runs"
>
  never
</div>
<div
  id="own"
>
  own 3
</div>
```
## Change
```
REMOVE: #own::text("own 2")
INSERT: #own::text("own 3")
```

# Update
```js
const window = document.defaultView;
document.dispatchEvent(new window.Event("keydown"));
```
```html
<button
  id="bump"
>
  Bump
</button>
<div
  id="listener"
>
  listener saw 3
</div>
<div
  id="runs"
>
  never
</div>
<div
  id="own"
>
  own 3
</div>
```
## Change
```
REMOVE: #listener::text("never")
INSERT: #listener::text("listener saw 3")
```

# Update
```js
const { n } = document.defaultView;
const text = (id) => document.getElementById(id).textContent;
assert.ok(
  n === undefined,
  `onUpdate ran ${n} times for a change only a listener created by onMount reads, expected it never to run`,
);
assert.strictEqual(
  text("own"),
  "own 3",
  `the lifecycle reading other in onUpdate itself showed ${JSON.stringify(text("own"))}, expected "own 3"`,
);
assert.strictEqual(
  text("listener"),
  "listener saw 3",
  `the listener created by onMount reported ${JSON.stringify(text("listener"))}, expected the live value 3`,
);
```
