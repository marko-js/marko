# Render `{"label":"a","value":2}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:0
</p>
<p>
  a:2
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
<p>
  a:2
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "0" => "1"
```

# Update `{"label":"b","value":3}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  b:1
</p>
<p>
  b:3
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text@0 "a" => "b"
UPDATE: p:nth-of-type(2)::text@2 "2" => "3"
UPDATE: p:nth-of-type(1)::text@0 "a" => "b"
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
<p>
  b:3
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "1" => "2"
```
