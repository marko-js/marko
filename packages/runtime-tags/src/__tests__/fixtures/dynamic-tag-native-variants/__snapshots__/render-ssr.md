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

# Update `click("button")`
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
REMOVE: a + input
INSERT: div > input
REMOVE: div > input + a
```
