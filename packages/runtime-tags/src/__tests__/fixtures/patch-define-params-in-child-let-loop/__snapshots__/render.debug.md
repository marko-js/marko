# Render `{"label":"a","items":[1,2]}`
```html
<em>
  a 0
</em>
<section>
  <button>
    clear
  </button>
  <em>
    a 1
  </em>
</section>
<section>
  <button>
    clear
  </button>
  <em>
    a 2
  </em>
</section>
```

# Update `{"label":"b","items":[1,2,3]}`
```html
<em>
  b 0
</em>
<section>
  <button>
    clear
  </button>
  <em>
    b 1
  </em>
</section>
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
INSERT: section:nth-of-type(2) + section
UPDATE: section:nth-of-type(1) > em::text@0 "a" => "b"
UPDATE: section:nth-of-type(2) > em::text@0 "a" => "b"
INSERT: section:nth-of-type(3) > button + em
UPDATE: section:nth-of-type(3) > em::text@2 "" => "3"
UPDATE: section:nth-of-type(3) > em::text@0 "" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b 0
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
REMOVE: section:nth-of-type(1) > button + em
```

# Update `{"label":"c","items":[2,3]}`
```html
<em>
  c 0
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
REMOVE: section:nth-of-type(2) + section
UPDATE: section:nth-of-type(2) > em::text@2 "2" => "3"
UPDATE: section:nth-of-type(2) > em::text@0 "b" => "c"
```
