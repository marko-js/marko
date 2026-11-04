# Render `{"n":1}`
```html
<div
  id="spread"
  title="a"
/>
<input
  name="spread"
  title="a"
/>
<div>
  <b>
    a
  </b>
</div>
<p>
  1
</p>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  id="spread"
  title="b"
/>
<input
  name="spread"
  title="b"
/>
<div>
  <i>
    b
  </i>
</div>
<p>
  1
</p>
<button>
  +
</button>
```
## Change
```
INSERT: div:nth-of-type(2) > i
REMOVE: div:nth-of-type(2) > i + b
UPDATE: #spread[title] "a" => "b"
UPDATE: input[title] "a" => "b"
```

# Update `{"n":2}`
```html
<div
  id="spread"
  title="b"
/>
<input
  name="spread"
  title="b"
/>
<div>
  <i>
    b
  </i>
</div>
<p>
  2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1" => "2"
```
