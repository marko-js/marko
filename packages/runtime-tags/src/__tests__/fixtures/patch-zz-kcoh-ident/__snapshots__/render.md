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
  <p>
    same same
  </p>
  <b>
    b
  </b>
  <b>
    b
  </b>
</section>
```
## Change
```
INSERT: section
UPDATE: section > b:nth-of-type(1)::text " " => "b"
UPDATE: section > b:nth-of-type(2)::text " " => "b"
```

# Update
```js
d.querySelectorAll("section b, section i, section span, section li").forEach(e => e.click());
```
## Console
```
LOG "b"
LOG "b"
LOG "b"
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
  <p>
    same same
  </p>
  <b>
    c
  </b>
  <b>
    c
  </b>
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i + span
INSERT: section > i > b
UPDATE: section > i > b::text " " => "c"
UPDATE: section > b:nth-of-type(1)::text "b" => "c"
UPDATE: section > b:nth-of-type(2)::text "b" => "c"
```

# Update
```js
d.querySelectorAll("section b, section i, section span, section li").forEach(e => e.click());
```
## Console
```
LOG "c"
LOG "c"
LOG "c"
```
