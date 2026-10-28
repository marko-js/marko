# Render `{"v":"a"}`
```html
<button>
  0
</button>
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  a1
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
INSERT: button + p
UPDATE: p::text " " => "a1"
```

# Update `{"v":"b"}`
