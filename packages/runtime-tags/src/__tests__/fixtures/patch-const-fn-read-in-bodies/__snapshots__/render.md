# Render `{"a":"A","x":true,"items":[1,2],"value":{}}`
```html
<span>
  A
</span>
<em>
  A1
</em>
<span>
  A
</span>
<em>
  A2
</em>
<b>
  vA
</b>
<i>
  A
</i>
<button
  class="inc"
>
  0
</button>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<span>
  A
</span>
<em>
  A1
</em>
<span>
  A
</span>
<em>
  A2
</em>
<b>
  vA
</b>
<i>
  A
</i>
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update `{"a":"B","x":true,"items":[3],"value":{}}`
```html
<span>
  B
</span>
<em>
  B3
</em>
<b>
  wB
</b>
<i>
  B
</i>
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: span::text "A" => "B"
UPDATE: em::text "A1" => "B3"
REMOVE: em + span
REMOVE: em + em
UPDATE: i::text "A" => "B"
UPDATE: b::text@0 "v" => "w"
UPDATE: b::text@1 "A" => "B"
```
