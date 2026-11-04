# Render `{"framed":true,"label":"a"}`
```html
<section>
  <em>
    item
  </em>
</section>
<pre>
  a
</pre>
```

# Update `{"framed":true,"label":"b"}`
```html
<section>
  <em>
    item
  </em>
</section>
<pre>
  b
</pre>
```
## Change
```
UPDATE: pre::text "a" => "b"
```

# Update `{"framed":false,"label":"c"}`
## Change
```
REMOVE: section
REMOVE: pre
```

# Update `{"framed":true,"label":"d"}`
```html
<section>
  <em>
    item
  </em>
</section>
<pre>
  d
</pre>
```
## Change
```
INSERT: section, pre
INSERT: section > em
UPDATE: section > em::text " " => "item"
UPDATE: pre::text " " => "d"
```
