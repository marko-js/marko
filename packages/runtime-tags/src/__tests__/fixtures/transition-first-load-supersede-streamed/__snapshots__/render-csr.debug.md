# Render
```html
<div
  id="outside"
>
  1
</div>
<h2>
  Id: 1
</h2>
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
INSERT: #outside + ::text("LOADING...")
REMOVE: ::text + h2
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
UPDATE: #outside::text "1" => "3"
INSERT: #outside + :is(h2, pre)
REMOVE: pre + ::text("LOADING...")
```
