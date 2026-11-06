# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
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
```

# Update `{"show":true,"label":"c","tag":"i"}`
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
