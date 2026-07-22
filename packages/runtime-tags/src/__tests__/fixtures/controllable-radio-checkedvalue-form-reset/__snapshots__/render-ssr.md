# Render
```html
<form>
  <input
    name="p"
    type="radio"
    value="a"
  />
  <input
    checked=""
    name="p"
    type="radio"
    value="b"
  />
  <input
    name="p"
    type="radio"
    value="c"
  />
  <button
    type="reset"
  >
    reset
  </button>
</form>
<span>
  v=b
</span>
```

# Update
```js
document.querySelectorAll("input")[0].click();
```
```html
<form>
  <input
    checked=""
    name="p"
    type="radio"
    value="a"
  />
  <input
    default-checked=""
    name="p"
    type="radio"
    value="b"
  />
  <input
    name="p"
    type="radio"
    value="c"
  />
  <button
    type="reset"
  >
    reset
  </button>
</form>
<span>
  v=a
</span>
```
## Change
```
UPDATE: span::text@2 "b" => "a"
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<form>
  <input
    name="p"
    type="radio"
    value="a"
  />
  <input
    checked=""
    name="p"
    type="radio"
    value="b"
  />
  <input
    name="p"
    type="radio"
    value="c"
  />
  <button
    type="reset"
  >
    reset
  </button>
</form>
<span>
  v=b
</span>
```
## Change
```
UPDATE: span::text@2 "a" => "b"
```
