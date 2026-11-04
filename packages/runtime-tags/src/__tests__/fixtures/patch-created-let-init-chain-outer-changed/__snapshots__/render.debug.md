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
<button
  class="s"
>
  2
</button>
<p>
  2
</p>
```
## Change
```
INSERT: .x + .s
INSERT: .s + p
UPDATE: .s::text " " => "2"
UPDATE: p::text " " => "2"
```
