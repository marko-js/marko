# Render `{"label":"a","value":2}`
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
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text@2 "" => "2"
UPDATE: p:nth-of-type(2)::text@0 "" => "a"
INSERT: .open + p
UPDATE: p:nth-of-type(1)::text@2 "" => "1"
UPDATE: p:nth-of-type(1)::text@0 "" => "a"
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
  a:2
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@0 "a" => "b"
```

# Update
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
UPDATE: p:nth-of-type(2)::text@2 "2" => "3"
UPDATE: p:nth-of-type(2)::text@0 "a" => "b"
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
