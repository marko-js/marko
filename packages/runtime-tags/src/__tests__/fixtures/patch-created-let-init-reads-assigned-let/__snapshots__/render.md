# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    x
  </button>
  <em>
    static b
  </em>
</section>
<section>
  <button>
    y
  </button>
  <em>
    relayed b
  </em>
</section>
```
## Change
```
INSERT: section, section
INSERT: section:nth-of-type(1) > button + em
INSERT: section:nth-of-type(2) > button + em
UPDATE: section:nth-of-type(1) > em::text@7 "" => "b"
UPDATE: section:nth-of-type(2) > em::text@8 "" => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <button>
    x
  </button>
  <em>
    static c
  </em>
</section>
<section>
  <button>
    y
  </button>
  <em>
    relayed c
  </em>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text@7 "b" => "c"
UPDATE: section:nth-of-type(2) > em::text@8 "b" => "c"
```

# Update
```js
d.querySelector("button").click();
```
```html
<section>
  <button>
    x
  </button>
</section>
<section>
  <button>
    y
  </button>
  <em>
    relayed c
  </em>
</section>
```
## Change
```
REMOVE: section:nth-of-type(1) > button + em
```

# Update `{"show":true,"label":"d"}`
```html
<section>
  <button>
    x
  </button>
</section>
<section>
  <button>
    y
  </button>
  <em>
    relayed d
  </em>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2) > em::text@8 "c" => "d"
```
