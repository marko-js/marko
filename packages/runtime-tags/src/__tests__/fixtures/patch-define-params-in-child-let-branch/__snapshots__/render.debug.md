# Render `{"label":"a","show":false}`
```html
<em>
  1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    2
  </em>
</section>
```

# Update `{"label":"b","show":true}`
```html
<em>
  1
</em>
<b>
  b
</b>
<section>
  <button>
    clear
  </button>
  <em>
    2
  </em>
  <b>
    b
  </b>
</section>
```
## Change
```
INSERT: em + b
INSERT: section > em + b
UPDATE: section > b::text " " => "b"
```

# Update `{"label":"c","show":false}`
```html
<em>
  1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    2
  </em>
</section>
```
## Change
```
REMOVE: em + b
REMOVE: section > em + b
```

# Update `{"label":"d","show":true}`
```html
<em>
  1
</em>
<b>
  d
</b>
<section>
  <button>
    clear
  </button>
  <em>
    2
  </em>
  <b>
    d
  </b>
</section>
```
## Change
```
INSERT: em + b
INSERT: section > em + b
UPDATE: section > b::text " " => "d"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  1
</em>
<b>
  d
</b>
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + em
REMOVE: section > button + b
```

# Update `{"label":"e","show":false}`
```html
<em>
  1
</em>
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: em + b
```
