# Render `{"show":false,"label":"a"}`
```html
<button>
  make
</button>
<button>
  clear
</button>
<section>
  <em>
    a
  </em>
</section>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  make
</button>
<button>
  clear
</button>
<section>
  <em>
    b
  </em>
</section>
<button>
  clear
</button>
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text "a" => "b"
INSERT: section:nth-of-type(1) + :is(button, section)
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  make
</button>
<button>
  clear
</button>
<section>
  <em>
    c
  </em>
</section>
<button>
  clear
</button>
<section>
  <em>
    c
  </em>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text "b" => "c"
UPDATE: section:nth-of-type(2) > em::text "b" => "c"
```
