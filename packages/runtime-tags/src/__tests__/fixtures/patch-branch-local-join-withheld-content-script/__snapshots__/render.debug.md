# Render `{"x":"p","y":"q","show":true}`
```html
<div>
  s:p!
</div>
<section />
<div>
  s:p!
</div>
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
<div>
  s:r!
</div>
<section />
<div>
  s:r!
</div>
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
REMOVE: div:nth-of-type(1)::text("s:p!")
INSERT: div:nth-of-type(1)::text("s:r!")
REMOVE: div:nth-of-type(2)::text("s:p!")
INSERT: div:nth-of-type(2)::text("s:r!")
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div>
  s:r!
</div>
<section>
  <em>
    0r!
  </em>
</section>
<div>
  s:r!
</div>
<section>
  <em>
    sr!
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
UPDATE: section:nth-of-type(1) > em::text " " => "0r!"
UPDATE: section:nth-of-type(2) > em::text " " => "sr!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div>
  s:r!
</div>
<section>
  <em>
    1r!
  </em>
</section>
<div>
  s:r!
</div>
<section>
  <em>
    sr!
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
UPDATE: section:nth-of-type(1) > em::text "0r!" => "1r!"
```

# Update `{"x":"t","y":"u","show":true}`
```html
<div>
  s:t!
</div>
<section>
  <em>
    1t!
  </em>
</section>
<div>
  s:t!
</div>
<section>
  <em>
    ut!
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
UPDATE: section:nth-of-type(1) > em::text "1r!" => "1t!"
UPDATE: section:nth-of-type(2) > em::text "sr!" => "ut!"
REMOVE: div:nth-of-type(1)::text("s:r!")
INSERT: div:nth-of-type(1)::text("s:t!")
REMOVE: div:nth-of-type(2)::text("s:r!")
INSERT: div:nth-of-type(2)::text("s:t!")
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div>
  s:t!
</div>
<section />
<div>
  s:t!
</div>
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
<div>
  s:v!
</div>
<section />
<div>
  s:v!
</div>
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
REMOVE: div:nth-of-type(1)::text("s:t!")
INSERT: div:nth-of-type(1)::text("s:v!")
REMOVE: div:nth-of-type(2)::text("s:t!")
INSERT: div:nth-of-type(2)::text("s:v!")
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div>
  s:v!
</div>
<section>
  <em>
    1v!
  </em>
</section>
<div>
  s:v!
</div>
<section>
  <em>
    wv!
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
UPDATE: section:nth-of-type(1) > em::text " " => "1v!"
UPDATE: section:nth-of-type(2) > em::text " " => "wv!"
```
