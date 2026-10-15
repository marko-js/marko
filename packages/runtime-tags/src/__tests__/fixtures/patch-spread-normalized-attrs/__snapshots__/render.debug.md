# Render `{"attrs":{"class":{"SHOWN_on1":true,"SECRET_off1":false},"style":{"color":"red","--SECRET_var1":false},"title":"SHOWN_t1","tabindex":1,"data-x":null,"hidden":false},"show":false,"link":{"href":"/SECRET_link1","class":{"SECRET_lc1":false}},"field":{"value":"SHOWN_v","data-secret":false}}`
```html
<button
  class="inc"
>
  0
</button>
<div
  class="SHOWN_on1"
  style="color:red"
  tabindex="1"
  title="SHOWN_t1"
>
  x
</div>
<input
  value="SHOWN_v"
/>
```

# Update `{"attrs":{"class":{"SHOWN_on2":true,"SECRET_off2":false},"style":{"color":"red","--SECRET_var2":false},"title":"SHOWN_t2","tabindex":1,"data-x":null,"hidden":false},"show":true,"link":{"href":"/SHOWN_link2","class":{"SHOWN_lc2":true,"SECRET_lc2":false}},"field":{"value":"SHOWN_v","data-secret":false}}`
```html
<button
  class="inc"
>
  0
</button>
<div
  class="SHOWN_on2"
  style="color:red"
  tabindex="1"
  title="SHOWN_t2"
>
  x
</div>
<a
  class="SHOWN_lc2"
  href="/SHOWN_link2"
>
  z
</a>
<input
  value="SHOWN_v"
/>
```
## Change
```
UPDATE: .SHOWN_on2[class] "SHOWN_on1" => "SHOWN_on2"
UPDATE: .SHOWN_on2[title] "SHOWN_t1" => "SHOWN_t2"
INSERT: .SHOWN_on2 + .SHOWN_lc2
```

# Update `{"attrs":{"class":{"SHOWN_on3":true,"SECRET_off3":false},"style":{"color":"red","--SECRET_var3":false},"title":"SHOWN_t3","tabindex":1,"data-x":null,"hidden":false},"show":true,"link":{"href":"/SHOWN_link3","class":["SHOWN_lc3"]},"field":{"value":"SHOWN_v","data-secret":false}}`
```html
<button
  class="inc"
>
  0
</button>
<div
  class="SHOWN_on3"
  style="color:red"
  tabindex="1"
  title="SHOWN_t3"
>
  x
</div>
<a
  class="SHOWN_lc3"
  href="/SHOWN_link3"
>
  z
</a>
<input
  value="SHOWN_v"
/>
```
## Change
```
UPDATE: .SHOWN_on3[class] "SHOWN_on2" => "SHOWN_on3"
UPDATE: .SHOWN_on3[title] "SHOWN_t2" => "SHOWN_t3"
UPDATE: .SHOWN_lc3[href] "/SHOWN_link2" => "/SHOWN_link3"
UPDATE: .SHOWN_lc3[class] "SHOWN_lc2" => "SHOWN_lc3"
```
