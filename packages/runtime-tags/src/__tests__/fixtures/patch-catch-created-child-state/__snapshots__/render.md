# Render `{"msg":"a"}`
```html
<button>
  0
</button>
<p>
  a
</p>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  a
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"fail":true,"msg":"b"}`
```html
<button>
  1
</button>
<span>
  b 1
</span>
```
## Change
```
INSERT: button + span
REMOVE: span + p
UPDATE: span::text@0 "" => "b"
UPDATE: span::text@2 "" => "1"
```
