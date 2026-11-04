# Render `{"label":"a","show":false}`
```html
<em>
  a 1
</em>
```

# Update `{"label":"b","show":true}`
```html
<em>
  b 1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    b 2
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
INSERT: em + section
UPDATE: section > em::text@0 "" => "b"
```

# Update `{"label":"c","show":true}`
```html
<em>
  c 1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    c 2
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "b" => "c"
UPDATE: section > em::text@0 "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  c 1
</em>
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + em
```

# Update `{"label":"d","show":true}`
```html
<em>
  d 1
</em>
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
UPDATE: em::text@0 "c" => "d"
```
