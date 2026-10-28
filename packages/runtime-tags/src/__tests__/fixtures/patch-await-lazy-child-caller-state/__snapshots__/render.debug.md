# Render `{"show":false,"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
```

# Update
```js
document.querySelector("button.open").click();
```

# Update `{"show":true,"label":"b"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  b:1
</p>
```
## Change
```
INSERT: .open + p
UPDATE: p::text@2 "" => "1"
```

# Update
```js
document.querySelector("button.open").click();
```
```html
<button
  class="open"
>
  inc
</button>
<p>
  b:2
</p>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```

# Update `{"show":true,"label":"c"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  c:2
</p>
```
## Change
```
UPDATE: p::text@0 "b" => "c"
```

# Update `{"show":false,"label":"d"}`
```html
<button
  class="open"
>
  inc
</button>
```
## Change
```
REMOVE: .open + p
```

# Update
```js
document.querySelector("button.open").click();
```

# Update `{"show":true,"label":"e"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  e:3
</p>
```
## Change
```
INSERT: .open + p
UPDATE: p::text@2 "" => "3"
```
