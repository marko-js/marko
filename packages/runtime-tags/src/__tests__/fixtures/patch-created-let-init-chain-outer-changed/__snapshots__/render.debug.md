# Render `{"show":false}`
```html
<button
  class="x"
>
  1
</button>
```

# Update
```js
d.querySelector("button.x").click();
```
```html
<button
  class="x"
>
  2
</button>
```
## Change
```
UPDATE: .x::text "1" => "2"
```

# Update `{"show":true}`
```html
<button
  class="x"
>
  2
</button>
<p>
  2
</p>
```
## Change
```
INSERT: .x + p
UPDATE: p::text " " => "2"
```
