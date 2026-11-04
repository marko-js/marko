# Render `{"y":1}`
```html
<button>
  +
</button>
<i>
  a0
</i>
<span>
  1
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<i>
  a1
</i>
<span>
  1
</span>
```
## Change
```
UPDATE: i::text "a0" => "a1"
```

# Update `{"y":2}`
```html
<button>
  +
</button>
<i>
  a1
</i>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<i>
  a2
</i>
<span>
  2
</span>
```
## Change
```
UPDATE: i::text "a1" => "a2"
```
