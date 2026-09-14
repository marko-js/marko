# Render `{"label":"one","on":true,"items":["a","b"]}`
```html
<section>
  <em>
    0
  </em>
  <p
    data-n="0"
  >
    one
  </p>
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
  <p
    data-n="0"
  >
    two
  </p>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > p::text "one" => "two"
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
  <p
    data-n="1"
  >
    two
  </p>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "0" => "1"
UPDATE: section > p[data-n] "0" => "1"
```

# Update `{"label":"three","on":false,"items":["b"]}`
```html
<section>
  <em>
    1
  </em>
  <div
    data-n="1"
  >
    three
  </div>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section > em + div
REMOVE: section > div + p
INSERT: section > div::text("three")
UPDATE: section > div[data-n] null => "1"
UPDATE: section > div::text " " => "three"
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
  <div
    data-n="2"
  >
    three
  </div>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "1" => "2"
UPDATE: section > div[data-n] "1" => "2"
```

# Update `{"label":"four","on":true,"items":["a"]}`
```html
<section>
  <em>
    2
  </em>
  <p
    data-n="2"
  >
    four
  </p>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section > em + p
REMOVE: section > p + div
INSERT: section > p::text("four")
UPDATE: section > p[data-n] null => "2"
UPDATE: section > p::text " " => "four"
```
