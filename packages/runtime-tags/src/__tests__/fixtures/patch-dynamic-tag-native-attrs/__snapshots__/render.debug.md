# Render `{"tag":"section","cls":{"SHOWN_on1":true,"SECRET_off1":false},"sty":{"color":"red","--SECRET_var1":false},"title":"SHOWN_t1","x":null,"hidden":false,"field":"input","checked":true}`
```html
<button
  class="inc"
>
  0
</button>
<section
  class="SHOWN_on1"
  style="color:red"
  title="SHOWN_t1"
/>
<input
  checked=""
  type="checkbox"
/>
```

# Update `{"tag":"article","cls":{"SHOWN_on2":true,"SECRET_off2":false},"sty":{"color":"blue","--SECRET_var2":false},"title":"SHOWN_t2","x":"SHOWN_x2","hidden":false,"field":"input","checked":false}`
```html
<button
  class="inc"
>
  0
</button>
<article
  class="SHOWN_on2"
  data-x="SHOWN_x2"
  style="color:blue"
  title="SHOWN_t2"
/>
<input
  default-checked=""
  type="checkbox"
/>
```
## Change
```
INSERT: .inc + .SHOWN_on2
REMOVE: .SHOWN_on2 + section
UPDATE: .SHOWN_on2[class] null => "SHOWN_on2"
UPDATE: .SHOWN_on2[style] null => "color:blue"
UPDATE: .SHOWN_on2[title] null => "SHOWN_t2"
UPDATE: .SHOWN_on2[data-x] null => "SHOWN_x2"
```

# Update
```js
document.querySelector("article, aside").click();
```
## Console
```
LOG "clicked"
```

# Update `{"tag":"aside","cls":["SHOWN_on3"],"sty":"color:green","x":null,"hidden":true,"field":"input","checked":true}`
```html
<button
  class="inc"
>
  0
</button>
<aside
  class="SHOWN_on3"
  hidden=""
  style="color:green"
/>
<input
  checked=""
  type="checkbox"
/>
```
## Change
```
INSERT: .inc + .SHOWN_on3
REMOVE: .SHOWN_on3 + article
UPDATE: .SHOWN_on3[class] null => "SHOWN_on3"
UPDATE: .SHOWN_on3[style] null => "color:green"
UPDATE: .SHOWN_on3[hidden] null => ""
```
