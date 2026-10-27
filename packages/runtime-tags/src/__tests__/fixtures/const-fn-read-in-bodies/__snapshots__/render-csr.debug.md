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
INSERT: em:nth-of-type(2) + b
UPDATE: b::text@0 "" => "v"
UPDATE: .inc::text "0" => "1"
UPDATE: b::text@1 "" => "A"
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
  vA
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
REMOVE: em + span
REMOVE: em + em
UPDATE: span::text "A" => "B"
UPDATE: i::text "A" => "B"
UPDATE: em::text "A1" => "B3"
```
