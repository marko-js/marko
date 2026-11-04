# Render `{"show":false}`

# Update `{"show":true}`
```html
<button
  class="on"
>
  s
</button>
<button>
  m
</button>
```
## Change
```
INSERT: .on
INSERT: .on + button
UPDATE: .on[class] null => "on"
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<button
  class=""
>
  s
</button>
<button
  class="on"
>
  m
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)[class] "on" => ""
UPDATE: .on[class] null => "on"
```

# Update `{"show":true}`

# Update `{"show":false}`
## Change
```
REMOVE: button
REMOVE: button
```

# Update `{"show":true}`
```html
<button
  class="on"
>
  s
</button>
<button>
  m
</button>
```
## Change
```
INSERT: .on
INSERT: .on + button
UPDATE: .on[class] null => "on"
```
