# Render `{"x":"a"}`
```html
<i>
  {"value":"a"}
</i>
<button>
  toggle
</button>
```

# Update `{"x":"b"}`
```html
<i>
  {"value":"b"}
</i>
<button>
  toggle
</button>
```
## Change
```
UPDATE: i::text "{\"value\":\"a\"}" => "{\"value\":\"b\"}"
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
REMOVE: i
```

# Update
```js
document.querySelector("button").click();
```
```html
<i>
  {"value":"b"}
</i>
<button>
  toggle
</button>
```
## Change
```
INSERT: i
UPDATE: i::text " " => "{\"value\":\"b\"}"
```

# Update `{"x":"c"}`
```html
<i>
  {"value":"c"}
</i>
<button>
  toggle
</button>
```
## Change
```
UPDATE: i::text "{\"value\":\"b\"}" => "{\"value\":\"c\"}"
```
