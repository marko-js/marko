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
container.querySelector("button").click();
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
INSERT: div > span
REMOVE: div > span + span
UPDATE: div > span::text " " => "1"
```

# Update
```js
container.querySelector("button").click();
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
INSERT: div > .hidden
UPDATE: .hidden::text " " => "1"
```

# Update
```js
container.querySelector("button").click();
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
INSERT: div > span
REMOVE: div > span + span
UPDATE: div > span::text " " => "1"
```
