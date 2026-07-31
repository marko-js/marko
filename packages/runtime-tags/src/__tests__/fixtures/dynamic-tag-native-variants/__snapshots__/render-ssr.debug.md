# Render
```html
<div>
  <input />
  <select>
    <option
      selected=""
      value="a"
    >
      a
    </option>
  </select>
  <button>
    Swap
  </button>
</div>
```

# Update
```js
(document.querySelector("button")).click();
```
```html
<div>
  <input />
  <select>
    <option
      value="a"
    >
      a
    </option>
  </select>
  <button>
    Swap
  </button>
</div>
```
## Change
```
INSERT: div > a
REMOVE: div > input
INSERT: div > input
REMOVE: div > input + a
```
