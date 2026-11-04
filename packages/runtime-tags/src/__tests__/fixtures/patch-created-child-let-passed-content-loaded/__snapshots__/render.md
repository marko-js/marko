# Render `{"show":false,"label":"a"}`
```html
<button>
  0
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  0
</button>
<button>
  drop
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
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + section
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  0
</button>
<button>
  drop
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
d.querySelectorAll("button")[2].click();
```
```html
<button>
  0
</button>
<button>
  drop
</button>
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

# Update `{"show":true,"label":"d"}`
