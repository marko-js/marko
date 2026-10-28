# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"label":"b","promise":{}}`

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
<b
  class="b"
>
  a:1:b
</b>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "a"
INSERT: p + :is(.cM_0, .b)
UPDATE: .b::text@4 "" => "b"
UPDATE: .b::text@0 "" => "a"
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p>
  swapped
</p>
<b
  class="b"
>
  swapped:1:b
</b>
```
## Change
```
UPDATE: p::text "a" => "swapped"
UPDATE: .b::text@0 "a" => "swapped"
```
