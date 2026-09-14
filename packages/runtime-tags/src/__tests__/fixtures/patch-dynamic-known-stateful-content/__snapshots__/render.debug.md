# Render `{"label":"one"}`
```html
<button>
  +
</button>
<section>
  one
</section>
```

# Update `{"label":"two"}`
```html
<button>
  +
</button>
<section>
  two
</section>
```
## Change
```
UPDATE: section::text "one" => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
```
## Change
```
REMOVE: button + section
```

# Update `{"label":"three"}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<section>
  three
</section>
```
## Change
```
INSERT: button + section
INSERT: section::text("three")
UPDATE: section::text " " => "three"
```

# Update `{"label":"four"}`
```html
<button>
  +
</button>
<section>
  four
</section>
```
## Change
```
UPDATE: section::text "three" => "four"
```
