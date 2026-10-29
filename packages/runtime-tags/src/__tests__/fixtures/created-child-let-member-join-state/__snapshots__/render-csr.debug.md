# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button
  class="set"
>
  set
</button>
<p>
  b1
</p>
```
## Change
```
INSERT: .set, p
UPDATE: p::text " " => "b1"
```

# Update
```js
document.querySelector("button.set").click();
```
```html
<button
  class="set"
>
  set
</button>
<p>
  z1
</p>
```
## Change
```
UPDATE: p::text "b1" => "z1"
```

# Update `{"show":true,"label":"c"}`
