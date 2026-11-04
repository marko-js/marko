# Render `{"label":"a"}`
```html
<em>
  a 1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    a 2
  </em>
  <em>
    a 3
  </em>
</section>
```

# Update `{"label":"b"}`
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
  <em>
    b 3
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
UPDATE: section > em:nth-of-type(1)::text@0 "a" => "b"
UPDATE: section > em:nth-of-type(2)::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b 1
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
REMOVE: section > button + em
```

# Update `{"label":"c"}`
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
UPDATE: em::text@0 "b" => "c"
```
