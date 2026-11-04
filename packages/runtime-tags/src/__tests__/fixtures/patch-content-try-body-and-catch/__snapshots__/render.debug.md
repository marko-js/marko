# Render `{"label":"a"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
<em>
  a
</em>
```

# Update `{"label":"b"}`
```html
<button>
  0
</button>
<p>
  ok
</p>
<em>
  b
</em>
```
## Change
```
UPDATE: em::text "a" => "b"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<em>
  b
</em>
```
## Change
```
UPDATE: button::text "0" => "1"
REMOVE: em + p
REMOVE: em + em
INSERT: button + em
UPDATE: em::text " " => "b"
```
