# Render
```html
<label
  for="cM_0"
>
  caught
</label>
<input
  id="cM_0"
/>
<button>
  +
</button>
<p>
  0
</p>
<button>
  toggle
</button>
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert.equal(input.labels [0].textContent, "caught");
```

# Update
```js
document.querySelector("button").click();
```
```html
<label
  for="cM_0"
>
  caught
</label>
<input
  id="cM_0"
/>
<button>
  +
</button>
<p>
  1
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "0" => "1"
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert.equal(input.labels [0].textContent, "caught");
```
