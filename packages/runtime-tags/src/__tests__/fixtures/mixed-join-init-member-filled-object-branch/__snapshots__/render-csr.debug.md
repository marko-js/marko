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
    2:{"value":"a"}
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "1:{\"value\":\"a\"}" => "2:{\"value\":\"a\"}"
```
