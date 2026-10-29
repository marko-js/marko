# Render `{"show":false,"label":"a"}`
```html
<button>
  make
</button>
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
```
## Change
```
INSERT: button:nth-of-type(1) + :is(button, section)
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
```
## Change
```
UPDATE: section > em::text "b" => "c"
```
