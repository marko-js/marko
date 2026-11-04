# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  drop
</button>
<section>
  <button>
    clear
  </button>
  b
</section>
```
## Change
```
INSERT: button
INSERT: button + section
```

# Update
```js
document.querySelectorAll("button")[index].click();
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  drop
</button>
<section>
  <button>
    clear
  </button>
  y
</section>
```
## Change
```
UPDATE: section::text "b" => "y"
```

# Update `{"show":true,"label":"c"}`
