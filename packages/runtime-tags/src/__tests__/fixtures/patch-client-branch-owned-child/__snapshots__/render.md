# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    b0
  </i>
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

# Update
```js
d.querySelectorAll("section b, section i, section u, section button, section span, section li").forEach(e => e.click());
```
```html
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + i
REMOVE: section > button + span
```
## Console
```
LOG "b"
```

# Update `{"show":true,"label":"c","tag":"i"}`

# Update
```js
d.querySelectorAll("section b, section i, section u, section button, section span, section li").forEach(e => e.click());
```
