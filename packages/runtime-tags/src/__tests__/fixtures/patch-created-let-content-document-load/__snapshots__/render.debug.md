# Render `{"show":true,"label":"a"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static a
  </em>
</section>
```

# Update `{"show":false,"label":"a"}`
## Change
```
REMOVE: button
REMOVE: section
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static b
  </em>
</section>
```
## Change
```
INSERT: button, section
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static c
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@7 "b" => "c"
```

# Update
```js
d.querySelector("button")?.click();
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static d
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@7 "c" => "d"
```
