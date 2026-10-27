# Render `{"label":"one","on":true}`
```html
<section>
  <em>
    0
  </em>
  one
</section>
<button>
  +
</button>
```

# Update `{"label":"two","on":true}`
```html
<section>
  <em>
    0
  </em>
  two
</section>
<button>
  +
</button>
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
<section>
  <em>
    1
  </em>
  two
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "0" => "1"
```

# Update `{"label":"three","on":true}`
```html
<section>
  <em>
    1
  </em>
  three
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section::text "two" => "three"
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
  three
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "1" => "2"
```

# Update `{"label":"four","on":true}`
```html
<section>
  <em>
    2
  </em>
  four
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section::text "three" => "four"
```
