# Render `{"x":"a"}`
```html
<p>
  0:{"value":"a"}
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
<p>
  1:{"value":"a"}
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0:{\"value\":\"a\"}" => "1:{\"value\":\"a\"}"
```

# Update `{"x":"b"}`
```html
<p>
  1:{"value":"b"}
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1:{\"value\":\"a\"}" => "1:{\"value\":\"b\"}"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  2:{"value":"b"}
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1:{\"value\":\"b\"}" => "2:{\"value\":\"b\"}"
```

# Update `{"x":"c"}`
```html
<p>
  2:{"value":"c"}
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "2:{\"value\":\"b\"}" => "2:{\"value\":\"c\"}"
```
