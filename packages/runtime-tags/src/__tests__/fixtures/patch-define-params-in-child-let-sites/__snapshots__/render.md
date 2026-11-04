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
</section>
<section>
  <button>
    clear
  </button>
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
</section>
<section>
  <button>
    clear
  </button>
  <em>
    b 3
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
UPDATE: section:nth-of-type(1) > em::text@0 "a" => "b"
UPDATE: section:nth-of-type(2) > em::text@0 "a" => "b"
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
<section>
  <button>
    clear
  </button>
  <em>
    b 3
  </em>
</section>
```
## Change
```
REMOVE: section:nth-of-type(1) > button + em
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
<section>
  <button>
    clear
  </button>
  <em>
    c 3
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "b" => "c"
UPDATE: section:nth-of-type(2) > em::text@0 "b" => "c"
```
