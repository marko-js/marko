# Render `{"show":true,"big":false,"label":"a"}`
```html
<button>
  clear
</button>
<section>
  <em>
    a
  </em>
</section>
```

# Update `{"show":true,"big":true,"label":"b"}`
```html
<button>
  clear
</button>
<section>
  <strong>
    <i>
      B
    </i>
  </strong>
</section>
```
## Change
```
INSERT: section > strong
REMOVE: section > strong + em
UPDATE: section > strong > i::text " " => "B"
```

# Update `{"show":true,"big":true,"label":"c"}`
```html
<button>
  clear
</button>
<section>
  <strong>
    <i>
      C
    </i>
  </strong>
</section>
```
## Change
```
UPDATE: section > strong > i::text "B" => "C"
```
