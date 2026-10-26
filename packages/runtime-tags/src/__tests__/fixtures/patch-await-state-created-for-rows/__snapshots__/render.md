# Render `{"items":["a"]}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:0
</p>
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
  a:1
</p>
```
## Change
```
UPDATE: p::text@2 "0" => "1"
```

# Update `{"items":["a","b"]}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:1
</p>
<p>
  b:1
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text@2 "" => "1"
UPDATE: p:nth-of-type(2)::text@0 "" => "b"
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
  a:2
</p>
<p>
  b:2
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "1" => "2"
UPDATE: p:nth-of-type(2)::text@2 "1" => "2"
```
