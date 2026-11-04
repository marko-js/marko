# Render `{"x":"p","y":"q","show":true}`
```html
<section />
<output>
  p!
</output>
<section />
<output>
  p!
</output>
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
<section />
<output>
  r!
</output>
<section />
<output>
  r!
</output>
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
REMOVE: output:nth-of-type(1)::text("p!")
INSERT: output:nth-of-type(1)::text("r!")
REMOVE: output:nth-of-type(2)::text("p!")
INSERT: output:nth-of-type(2)::text("r!")
```

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
<output>
  r!
</output>
<section>
  <em>
    sr!
  </em>
  <i>
    r!
  </i>
</section>
<output>
  r!
</output>
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
<output>
  r!
</output>
<section>
  <em>
    sr!
  </em>
  <i>
    r!
  </i>
</section>
<output>
  r!
</output>
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
<output>
  t!
</output>
<section>
  <em>
    ut!
  </em>
  <i>
    t!
  </i>
</section>
<output>
  t!
</output>
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
REMOVE: output:nth-of-type(1)::text("r!")
INSERT: output:nth-of-type(1)::text("t!")
REMOVE: output:nth-of-type(2)::text("r!")
INSERT: output:nth-of-type(2)::text("t!")
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section />
<output>
  t!
</output>
<section />
<output>
  t!
</output>
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
```html
<section />
<output>
  v!
</output>
<section />
<output>
  v!
</output>
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
REMOVE: output:nth-of-type(1)::text("t!")
INSERT: output:nth-of-type(1)::text("v!")
REMOVE: output:nth-of-type(2)::text("t!")
INSERT: output:nth-of-type(2)::text("v!")
```

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
<output>
  v!
</output>
<section>
  <em>
    wv!
  </em>
  <i>
    v!
  </i>
</section>
<output>
  v!
</output>
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
