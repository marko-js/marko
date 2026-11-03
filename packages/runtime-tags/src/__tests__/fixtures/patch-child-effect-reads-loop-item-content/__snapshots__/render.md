# Render `{"items":["a","b"]}`
```html
<div>
  a
</div>
<pre>
  a
</pre>
```

# Update `{"items":["c","d"]}`
```html
<div>
  c
</div>
<pre>
  c
</pre>
```
## Change
```
UPDATE: div::text "a" => "c"
REMOVE: pre::text("a")
INSERT: pre::text("c")
```

# Update `{"items":["e","f"]}`
```html
<div>
  e
</div>
<pre>
  e
</pre>
```
## Change
```
UPDATE: div::text "c" => "e"
REMOVE: pre::text("c")
INSERT: pre::text("e")
```
