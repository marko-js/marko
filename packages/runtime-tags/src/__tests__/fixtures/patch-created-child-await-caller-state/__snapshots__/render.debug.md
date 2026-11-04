# Render `{"show":false,"p":{}}`
```html
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"show":true,"p":{"value":"b"}}`
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  1
</p>
<p>
  b
</p>
```
## Change
```
INSERT: .toggle + p
UPDATE: p:nth-of-type(1)::text " " => "1"
INSERT: p:nth-of-type(1) + p
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  0
</p>
<p>
  b
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "1" => "0"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  1
</p>
<p>
  b
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0" => "1"
```
