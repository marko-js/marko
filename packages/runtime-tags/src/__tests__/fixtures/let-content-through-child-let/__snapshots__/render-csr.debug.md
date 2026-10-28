# Render `{"label":"a"}`
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

# Update `{"label":"b"}`
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
UPDATE: section > em::text@7 "a" => "b"
```

# Update
```js
d.querySelector("button")?.click();
```

# Update `{"label":"c"}`
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
