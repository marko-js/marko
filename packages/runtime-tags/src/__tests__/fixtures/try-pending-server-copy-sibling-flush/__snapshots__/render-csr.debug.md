# Render `{"label":"a","promise":{},"other":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:a
</p>
<p>
  o1
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text " " => "o1"
INSERT: .swap + p
UPDATE: p:nth-of-type(1)::text@2 "" => "a"
UPDATE: p:nth-of-type(1)::text@0 "" => "a"
```

# Update `{"label":"b","promise":{},"other":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  b:a
</p>
<p>
  o1
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@0 "a" => "b"
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  b:a
</p>
<p>
  o2
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "o1" => "o2"
```
