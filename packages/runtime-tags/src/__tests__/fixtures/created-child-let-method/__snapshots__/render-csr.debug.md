# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  plain
</button>
<section>
  [b]
</section>
```
## Change
```
INSERT: button, section
UPDATE: section::text " " => "[b]"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  plain
</button>
<section>
  [c]
</section>
```
## Change
```
UPDATE: section::text "[b]" => "[c]"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  plain
</button>
<section>
  c
</section>
```
## Change
```
UPDATE: section::text "[c]" => "c"
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  plain
</button>
<section>
  d
</section>
```
## Change
```
UPDATE: section::text "c" => "d"
```
