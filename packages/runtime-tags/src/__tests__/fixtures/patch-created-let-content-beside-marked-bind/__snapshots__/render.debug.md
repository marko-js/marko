# Render `{"show":false,"label":"a","title":"a"}`
## Console
```
LOG "run" "a"
```

# Update `{"show":true,"label":"b","title":"b"}`
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
## Console
```
LOG "run" "b"
```

# Update `{"show":true,"label":"c","title":"b"}`
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

# Update `{"show":true,"label":"d","title":"c"}`
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
## Console
```
LOG "run" "c"
```
