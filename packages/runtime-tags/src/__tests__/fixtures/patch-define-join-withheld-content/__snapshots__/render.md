# Render `{"x":"p","y":"q"}`
```html
<section />
<section />
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section>
  <em>
    0p
  </em>
</section>
<section>
  <em>
    qp
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
INSERT: section:nth-of-type(1) > em
INSERT: section:nth-of-type(2) > em
UPDATE: section:nth-of-type(1) > em::text " " => "0p"
UPDATE: section:nth-of-type(2) > em::text " " => "qp"
```

# Update `{"x":"r","y":"s"}`
```html
<section>
  <em>
    0r
  </em>
</section>
<section>
  <em>
    sr
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text "0p" => "0r"
UPDATE: section:nth-of-type(2) > em::text "qp" => "sr"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section>
  <em>
    1r
  </em>
</section>
<section>
  <em>
    sr
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text "0r" => "1r"
```

# Update `{"x":"t","y":"u"}`
```html
<section>
  <em>
    1t
  </em>
</section>
<section>
  <em>
    ut
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text "1r" => "1t"
UPDATE: section:nth-of-type(2) > em::text "sr" => "ut"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section />
<section />
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
REMOVE: section:nth-of-type(1) > em
REMOVE: section:nth-of-type(2) > em
```

# Update `{"x":"v","y":"w"}`

# Update
```js
document.querySelector(selector).click();
```
```html
<section>
  <em>
    1v
  </em>
</section>
<section>
  <em>
    wv
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
INSERT: section:nth-of-type(1) > em
INSERT: section:nth-of-type(2) > em
UPDATE: section:nth-of-type(1) > em::text " " => "1v"
UPDATE: section:nth-of-type(2) > em::text " " => "wv"
```

# Update `{"x":"a","y":"b"}`
```html
<section>
  <em>
    1a
  </em>
</section>
<section>
  <em>
    ba
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text "1v" => "1a"
UPDATE: section:nth-of-type(2) > em::text "wv" => "ba"
```
