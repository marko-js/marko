# Render `{"show":true,"x":"a"}`
```html
<span>
  <i>
    0:{"value":"a"}
  </i>
</span>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  <i>
    1:{"value":"a"}
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "0:{\"value\":\"a\"}" => "1:{\"value\":\"a\"}"
```

# Update `{"show":true,"x":"b"}`
```html
<span>
  <i>
    1:{"value":"b"}
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "1:{\"value\":\"a\"}" => "1:{\"value\":\"b\"}"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  <i>
    2:{"value":"b"}
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "1:{\"value\":\"b\"}" => "2:{\"value\":\"b\"}"
```

# Update `{"show":true,"x":"c"}`
```html
<span>
  <i>
    2:{"value":"c"}
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "2:{\"value\":\"b\"}" => "2:{\"value\":\"c\"}"
```
