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
  <br />
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
## Change
```
INSERT: div > br
REMOVE: div > br + input
```
