# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  plain
</button>
<p>
  [b]
</p>
<p>
  [b]
</p>
<p>
  [b]
</p>
```
## Change
```
INSERT: button, p, p, p
UPDATE: p:nth-of-type(3)::text " " => "[b]"
UPDATE: p:nth-of-type(1)::text " " => "[b]"
UPDATE: p:nth-of-type(2)::text " " => "[b]"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  plain
</button>
<p>
  [c]
</p>
<p>
  [c]
</p>
<p>
  [c]
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "[b]" => "[c]"
UPDATE: p:nth-of-type(2)::text "[b]" => "[c]"
UPDATE: p:nth-of-type(3)::text "[b]" => "[c]"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  plain
</button>
<p>
  c
</p>
<p>
  c
</p>
<p>
  c
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "[c]" => "c"
UPDATE: p:nth-of-type(2)::text "[c]" => "c"
UPDATE: p:nth-of-type(3)::text "[c]" => "c"
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  plain
</button>
<p>
  d
</p>
<p>
  d
</p>
<p>
  d
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "c" => "d"
UPDATE: p:nth-of-type(2)::text "c" => "d"
UPDATE: p:nth-of-type(3)::text "c" => "d"
```
