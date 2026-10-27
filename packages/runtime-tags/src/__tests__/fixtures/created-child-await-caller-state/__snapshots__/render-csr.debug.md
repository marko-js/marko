# Render `{"show":true,"p":{"value":"b"}}`
```html
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  1
</p>
```
## Change
```
INSERT: .toggle + p
UPDATE: p::text " " => "1"
```

# Update
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
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text " " => "b"
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
