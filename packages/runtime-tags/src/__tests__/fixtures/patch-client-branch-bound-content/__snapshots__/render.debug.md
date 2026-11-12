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
REMOVE: section > i:nth-of-type(1) + span
INSERT: section > i:nth-of-type(1) > b
UPDATE: section > i:nth-of-type(1) > b::text " " => "c"
INSERT: section > i:nth-of-type(1) + i
REMOVE: section > i:nth-of-type(2) + span
INSERT: section > i:nth-of-type(2) > b
UPDATE: section > i:nth-of-type(2) > b::text " " => "c"
```
