# Render `{"show":false,"value":"SECRET_v1","flag":true}`
```html
<button
  class="inc"
>
  0
</button>
```

# Update `{"show":true,"value":"SHOWN_v2","flag":false}`
```html
<button
  class="inc"
>
  0
</button>
<input
  class="b"
  value="SHOWN_v2"
/>
<input
  class="c"
  type="checkbox"
/>
```
## Change
```
INSERT: .inc + :is(.b, .c)
UPDATE: .b[value] null => "SHOWN_v2"
```

# Update `{"show":false,"value":"SECRET_v3","flag":true}`
```html
<button
  class="inc"
>
  0
</button>
```
## Change
```
REMOVE: .inc + input
REMOVE: .inc + input
```
