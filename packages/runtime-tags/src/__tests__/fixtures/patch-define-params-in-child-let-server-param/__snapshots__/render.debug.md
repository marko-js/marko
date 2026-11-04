# Render `{"label":"a","n":2}`
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
</section>
```

# Update `{"label":"b","n":4}`
```html
<em>
  b 1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    b 4
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
UPDATE: section > em::text@2 "2" => "4"
UPDATE: section > em::text@0 "a" => "b"
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
```

# Update `{"label":"c","n":5}`
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
