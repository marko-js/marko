# Render `{"show":false,"label":"a","tag":"span","p":{}}`

# Update `{"show":true,"label":"b","tag":"span","p":{"value":"y"}}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      yb
    </b>
  </span>
</section>
```
## Change
```
INSERT: section
INSERT: section > button + span
INSERT: section > span > b
UPDATE: section > span > b::text@1 "" => "b"
UPDATE: section > span > b::text@0 "" => "y"
```

# Update
```js
d.querySelector("section b").click();
```
## Console
```
LOG "y"
```

# Update `{"show":true,"label":"c","tag":"i","p":{"value":"z"}}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      zc
    </b>
  </i>
</section>
```
## Change
```
REMOVE: section > span
INSERT: section > button + i
```

# Update
```js
d.querySelector("section b").click();
```
## Console
```
LOG "z"
```
