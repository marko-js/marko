# Render `{"show":false,"inner":true,"label":"a","tag":"span"}`

# Update `{"show":true,"inner":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      b
    </b>
  </span>
</section>
```
## Change
```
INSERT: section
INSERT: section > button + span
INSERT: section > span > b
UPDATE: section > span > b::text " " => "b"
```

# Update `{"show":true,"inner":true,"label":"c","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      c
    </b>
  </i>
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i + span
INSERT: section > i > b
UPDATE: section > i > b::text " " => "c"
```
