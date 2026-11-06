# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <button>
    1
  </button>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
d.querySelectorAll("section b, section button, section span, section i, section span, section li").forEach(e => e.click());
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
REMOVE: section > button + button
```
## Console
```
LOG "fn" "b"
```

# Update `{"show":true,"label":"c","tag":"i"}`

# Update
```js
d.querySelectorAll("section b, section button, section span, section i, section span, section li").forEach(e => e.click());
```
