# Render `{"$global":{"x":1,"serializedGlobals":["x"]}}`
```html
<div>
  <span
    class="hidden"
  >
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```
## Change
```
REMOVE: div > span
INSERT: div > span
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span
    class="hidden"
  >
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```
## Change
```
REMOVE: div > span
INSERT: .hidden
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```
## Change
```
REMOVE: div > span
INSERT: div > span
```
