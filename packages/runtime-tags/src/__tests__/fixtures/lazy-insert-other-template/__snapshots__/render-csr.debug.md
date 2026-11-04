# Render `{"show":false}`
```html
<button
  class="open"
>
  open
</button>
```

# Update `{"show":true}`

# Update
```js
document.querySelector("button.open").click();
```

# Update
```html
<button
  class="open"
>
  open
</button>
<button
  class="child"
>
  c:0
</button>
<button
  class="child"
>
  s:0
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
INSERT: .open + button
```

# Update
```js
for (const el of document.querySelectorAll("button.child"))
el.click();
```
```html
<button
  class="open"
>
  open
</button>
<button
  class="child"
>
  c:1
</button>
<button
  class="child"
>
  s:1
</button>
```
## Change
```
UPDATE: button:nth-of-type(3)::text@2 "0" => "1"
UPDATE: button:nth-of-type(2)::text@2 "0" => "1"
```
