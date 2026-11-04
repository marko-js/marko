# Render `{"x":"p","y":"q","show":true}`
```html
<p>
  0p!
</p>
<section />
<p>
  qp!
</p>
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
```html
<p>
  0r!
</p>
<section />
<p>
  sr!
</p>
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
UPDATE: p:nth-of-type(2)::text "qp!" => "sr!"
UPDATE: p:nth-of-type(1)::text "0p!" => "0r!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  0r!
</p>
<section>
  <em>
    r!
  </em>
</section>
<p>
  sr!
</p>
<section>
  <em>
    r!
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
UPDATE: section:nth-of-type(1) > em::text " " => "r!"
UPDATE: section:nth-of-type(2) > em::text " " => "r!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  1r!
</p>
<section>
  <em>
    r!
  </em>
</section>
<p>
  sr!
</p>
<section>
  <em>
    r!
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
UPDATE: p:nth-of-type(1)::text "0r!" => "1r!"
```

# Update `{"x":"t","y":"u","show":true}`
```html
<p>
  1t!
</p>
<section>
  <em>
    t!
  </em>
</section>
<p>
  ut!
</p>
<section>
  <em>
    t!
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
UPDATE: p:nth-of-type(2)::text "sr!" => "ut!"
UPDATE: p:nth-of-type(1)::text "1r!" => "1t!"
UPDATE: section:nth-of-type(1) > em::text "r!" => "t!"
UPDATE: section:nth-of-type(2) > em::text "r!" => "t!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  1t!
</p>
<section />
<p>
  ut!
</p>
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

# Update `{"x":"v","y":"w","show":true}`
```html
<p>
  1v!
</p>
<section />
<p>
  wv!
</p>
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
UPDATE: p:nth-of-type(2)::text "ut!" => "wv!"
UPDATE: p:nth-of-type(1)::text "1t!" => "1v!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  1v!
</p>
<section>
  <em>
    v!
  </em>
</section>
<p>
  wv!
</p>
<section>
  <em>
    v!
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
UPDATE: section:nth-of-type(1) > em::text " " => "v!"
UPDATE: section:nth-of-type(2) > em::text " " => "v!"
```
