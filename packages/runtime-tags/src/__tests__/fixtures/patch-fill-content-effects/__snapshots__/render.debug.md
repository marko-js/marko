# Render `{"label":"a","title":"x"}`
```html
<section>
  <p>
    a: 0
  </p>
</section>
<section>
  <p>
    a: 0
  </p>
</section>
<section>
  <p>
    x: 0
  </p>
</section>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    a: 1
  </p>
</section>
<section>
  <p>
    a: 1
  </p>
</section>
<section>
  <p>
    x: 1
  </p>
</section>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: section:nth-of-type(1) > p::text "a: 0" => "a: 1"
UPDATE: section:nth-of-type(2) > p::text "a: 0" => "a: 1"
UPDATE: section:nth-of-type(3) > p::text "x: 0" => "x: 1"
```

# Update `{"label":"b","title":"y"}`
```html
<section>
  <p>
    b: 1
  </p>
</section>
<section>
  <p>
    b: 1
  </p>
</section>
<section>
  <p>
    y: 1
  </p>
</section>
<button>
  1
</button>
```
## Change
```
UPDATE: section:nth-of-type(1) > p::text "a: 1" => "b: 1"
UPDATE: section:nth-of-type(2) > p::text "a: 1" => "b: 1"
UPDATE: section:nth-of-type(3) > p::text "x: 1" => "y: 1"
UPDATE: body[data-first] "a" => "b"
UPDATE: body[data-second] "a" => "b"
UPDATE: body[data-title] "x" => "y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    b: 2
  </p>
</section>
<section>
  <p>
    b: 2
  </p>
</section>
<section>
  <p>
    y: 2
  </p>
</section>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: section:nth-of-type(1) > p::text "b: 1" => "b: 2"
UPDATE: section:nth-of-type(2) > p::text "b: 1" => "b: 2"
UPDATE: section:nth-of-type(3) > p::text "y: 1" => "y: 2"
```

# Update `{"label":"c","title":"y"}`
```html
<section>
  <p>
    c: 2
  </p>
</section>
<section>
  <p>
    c: 2
  </p>
</section>
<section>
  <p>
    y: 2
  </p>
</section>
<button>
  2
</button>
```
## Change
```
UPDATE: section:nth-of-type(1) > p::text "b: 2" => "c: 2"
UPDATE: section:nth-of-type(2) > p::text "b: 2" => "c: 2"
UPDATE: body[data-first] "b" => "c"
UPDATE: body[data-second] "b" => "c"
```
