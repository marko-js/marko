# Render `{"show":true,"x":"a"}`
```html
<div>
  <em>
    {"value":"a"}
  </em>
</div>
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
<div>
  <em>
    {"value":"a"}
  </em>
</div>
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
<div>
  <em>
    {"value":"b"}
  </em>
</div>
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
UPDATE: div > em::text "{\"value\":\"a\"}" => "{\"value\":\"b\"}"
UPDATE: span > i::text "1:{\"value\":\"a\"}" => "1:{\"value\":\"b\"}"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    {"value":"b"}
  </em>
</div>
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
<div>
  <em>
    {"value":"c"}
  </em>
</div>
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
UPDATE: div > em::text "{\"value\":\"b\"}" => "{\"value\":\"c\"}"
UPDATE: span > i::text "2:{\"value\":\"b\"}" => "2:{\"value\":\"c\"}"
```
