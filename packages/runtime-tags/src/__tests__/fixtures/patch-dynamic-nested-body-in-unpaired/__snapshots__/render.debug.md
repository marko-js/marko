# Render `{"label":"one","on":true,"items":["a","b"]}`
```html
<section>
  <em>
    0
  </em>
  <article>
    <b>
      one
    </b>
    one!0
  </article>
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
  <article>
    <b>
      two
    </b>
    two!0
  </article>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > article > b::text "one" => "two"
UPDATE: section > article::text@0 "one" => "two"
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
  <article>
    <b>
      two
    </b>
    two!1
  </article>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "0" => "1"
UPDATE: section > article::text@4 "0" => "1"
```

# Update `{"label":"three","on":false,"items":["b"]}`
```html
<section>
  <em>
    1
  </em>
  <article>
    <b>
      three
    </b>
    three!1
  </article>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > article > b::text "two" => "three"
UPDATE: section > article::text@0 "two" => "three"
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
  <article>
    <b>
      three
    </b>
    three!2
  </article>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "1" => "2"
UPDATE: section > article::text@6 "1" => "2"
```

# Update `{"label":"four","on":true,"items":["a"]}`
```html
<section>
  <em>
    2
  </em>
  <article>
    <b>
      four
    </b>
    four!2
  </article>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > article > b::text "three" => "four"
UPDATE: section > article::text@0 "three" => "four"
```
