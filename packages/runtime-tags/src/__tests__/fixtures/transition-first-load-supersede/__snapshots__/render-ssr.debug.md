# Render
```html
<div
  id="outside"
>
  1
</div>
LOADING...
```

# Update
```html
<div
  id="outside"
>
  1
</div>
LOADING...
```
## Change
```
INSERT: t > pre::text("{\"id\":1}")
```

# Update
```html
<div
  id="outside"
>
  3
</div>
<h2>
  Id: 3
</h2>
<pre>
  {"id":3}
</pre>
```
## Change
```
REMOVE: ::text("LOADING...")
INSERT: #outside + :is(h2, pre)
UPDATE: #outside::text "1" => "3"
UPDATE: h2::text@4 "1" => "3"
UPDATE: pre::text "{\"id\":1}" => "{\"id\":3}"
```
