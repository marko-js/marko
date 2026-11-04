# Render `{"x":"p","y":"q","show":true}`
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

# Update `{"x":"r","y":"s","show":true}`

# Update
```js
document.querySelector(selector).click();
```
```html
<section>
  <em>
    0r!
  </em>
  <i>
    r!
  </i>
</section>
<section>
  <em>
    sr!
  </em>
  <i>
    r!
  </i>
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
INSERT: section:nth-of-type(1) > :is(em, i)
INSERT: section:nth-of-type(2) > :is(em, i)
UPDATE: section:nth-of-type(1) > i::text " " => "r!"
UPDATE: section:nth-of-type(1) > em::text " " => "0r!"
UPDATE: section:nth-of-type(2) > i::text " " => "r!"
UPDATE: section:nth-of-type(2) > em::text " " => "sr!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section>
  <em>
    1r!
  </em>
  <i>
    r!
  </i>
</section>
<section>
  <em>
    sr!
  </em>
  <i>
    r!
  </i>
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
UPDATE: section:nth-of-type(1) > em::text "0r!" => "1r!"
```

# Update `{"x":"t","y":"u","show":true}`
```html
<section>
  <em>
    1t!
  </em>
  <i>
    t!
  </i>
</section>
<section>
  <em>
    ut!
  </em>
  <i>
    t!
  </i>
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
UPDATE: section:nth-of-type(1) > i::text "r!" => "t!"
UPDATE: section:nth-of-type(1) > em::text "1r!" => "1t!"
UPDATE: section:nth-of-type(2) > i::text "r!" => "t!"
UPDATE: section:nth-of-type(2) > em::text "sr!" => "ut!"
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
REMOVE: section:nth-of-type(1) > :is(em, i)
REMOVE: section:nth-of-type(2) > :is(em, i)
```

# Update `{"x":"v","y":"w","show":true}`

# Update
```js
document.querySelector(selector).click();
```
```html
<section>
  <em>
    1v!
  </em>
  <i>
    v!
  </i>
</section>
<section>
  <em>
    wv!
  </em>
  <i>
    v!
  </i>
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
INSERT: section:nth-of-type(1) > :is(em, i)
INSERT: section:nth-of-type(2) > :is(em, i)
UPDATE: section:nth-of-type(1) > i::text " " => "v!"
UPDATE: section:nth-of-type(1) > em::text " " => "1v!"
UPDATE: section:nth-of-type(2) > i::text " " => "v!"
UPDATE: section:nth-of-type(2) > em::text " " => "wv!"
```
