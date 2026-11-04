# Render `{"show":false,"label":"a"}`
```html
<button
  class="open"
>
  open
</button>
```

# Update `{"show":true,"label":"b"}`

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
  s:0
</button>
<button
  class="child"
>
  b:0
</button>
```
## Change
```
INSERT: .open + button
INSERT: button:nth-of-type(2) + button
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
  s:1
</button>
<button
  class="child"
>
  b:1
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text@2 "0" => "1"
UPDATE: button:nth-of-type(3)::text@2 "0" => "1"
```

# Update
```js
document.querySelector("button.open").click();
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
  s:1
</button>
```
## Change
```
REMOVE: .child + .child
```

# Update
```js
document.querySelector("button.open").click();
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
  s:1
</button>
<button
  class="child"
>
  b:0
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
```

# Update `{"show":true,"label":"c"}`
```html
<button
  class="open"
>
  open
</button>
<button
  class="child"
>
  s:1
</button>
<button
  class="child"
>
  c:0
</button>
```
## Change
```
UPDATE: button:nth-of-type(3)::text@0 "b" => "c"
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
  s:2
</button>
<button
  class="child"
>
  c:1
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text@2 "1" => "2"
UPDATE: button:nth-of-type(3)::text@2 "0" => "1"
```
