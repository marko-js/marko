# Render `{"label":"one","on":true,"items":["a","b"]}`
```html
<section>
  <em>
    0
  </em>
  oneone
</section>
<button>
  +
</button>
```

# Update `{"label":"two","on":true,"items":["a","b","c"]}`
```html
<section>
  <em>
    0
  </em>
  twotwo
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section::text@0 "one" => "two"
UPDATE: section::text@3 "one" => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <em>
    1
  </em>
  twotwo
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "0" => "1"
```

# Update `{"label":"three","on":false,"items":["b"]}`
```html
<section>
  <em>
    1
  </em>
  threethree
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section::text@0 "two" => "three"
UPDATE: section::text@5 "two" => "three"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <em>
    2
  </em>
  threethree
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "1" => "2"
```

# Update `{"label":"four","on":true,"items":["a"]}`
```html
<section>
  <em>
    2
  </em>
  fourfour
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section::text@0 "three" => "four"
UPDATE: section::text@4 "three" => "four"
```
