# Render `{"x":"a"}`
```html
<div>
  <i>
    {"value":"a"}
  </i>
</div>
<button>
  toggle
</button>
```

# Update `{"x":"b"}`
```html
<div>
  <i>
    {"value":"b"}
  </i>
</div>
<button>
  toggle
</button>
```
## Change
```
UPDATE: div > i::text "{\"value\":\"a\"}" => "{\"value\":\"b\"}"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: div
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <i>
    {"value":"b"}
  </i>
</div>
<button>
  toggle
</button>
```
## Change
```
INSERT: div
INSERT: div > i
UPDATE: div > i::text " " => "{\"value\":\"b\"}"
```

# Update `{"x":"c"}`
```html
<div>
  <i>
    {"value":"c"}
  </i>
</div>
<button>
  toggle
</button>
```
## Change
```
UPDATE: div > i::text "{\"value\":\"b\"}" => "{\"value\":\"c\"}"
```
