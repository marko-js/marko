# Render `{"label":"one","on":true,"items":[]}`
```html
<section>
  <em>
    -
  </em>
  <article>
    <b>
      0
    </b>
    one
  </article>
</section>
<button>
  +
</button>
```

# Update `{"label":"two","on":true,"items":[]}`
```html
<section>
  <em>
    -
  </em>
  <article>
    <b>
      0
    </b>
    two
  </article>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "-" => "-"
UPDATE: section > article::text "one" => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <em>
    -
  </em>
  <article>
    <b>
      1
    </b>
    two
  </article>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > article > b::text "0" => "1"
```

# Update `{"label":"three","on":false,"items":[]}`
```html
<article>
  <b>
    1
  </b>
  three
</article>
<button>
  +
</button>
```
## Change
```
INSERT: article
REMOVE: article + section
INSERT: article > b + ::text("three")
UPDATE: article::text " " => "three"
UPDATE: article > b::text " " => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<article>
  <b>
    2
  </b>
  three
</article>
<button>
  +
</button>
```
## Change
```
UPDATE: article > b::text "1" => "2"
```

# Update `{"label":"four","on":true,"items":[]}`
```html
<section>
  <em>
    -
  </em>
  <article>
    <b>
      2
    </b>
    four
  </article>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section
REMOVE: section + article
UPDATE: section > em::text " " => "-"
INSERT: section > em + article
INSERT: section > article > b + ::text("four")
UPDATE: section > article::text " " => "four"
UPDATE: section > article > b::text " " => "2"
```
