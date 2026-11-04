# Render `{"x":"a","y":"b"}`
```html
<section>
  <i>
    a
  </i>
</section>
<p>
  ab
</p>
<section>
  <i>
    a
  </i>
</section>
<button
  class="m"
>
  m
</button>
<button
  class="n"
>
  n
</button>
```

# Update `{"x":"c","y":"d"}`
```html
<section>
  <i>
    c
  </i>
</section>
<p>
  cd
</p>
<section>
  <i>
    c
  </i>
</section>
<button
  class="m"
>
  m
</button>
<button
  class="n"
>
  n
</button>
```
## Change
```
UPDATE: p::text "ab" => "cd"
UPDATE: section:nth-of-type(1) > i::text "a" => "c"
UPDATE: section:nth-of-type(2) > i::text "a" => "c"
```

# Update
```js
d.querySelector(s).click();
```
```html
<section />
<p>
  cd
</p>
<section />
<button
  class="m"
>
  m
</button>
<button
  class="n"
>
  n
</button>
```
## Change
```
REMOVE: section:nth-of-type(1) > i
REMOVE: section:nth-of-type(2) > i
```

# Update `{"x":"e","y":"f"}`
```html
<section />
<p>
  ef
</p>
<section />
<button
  class="m"
>
  m
</button>
<button
  class="n"
>
  n
</button>
```
## Change
```
UPDATE: p::text "cd" => "ef"
```

# Update
```js
d.querySelector(s).click();
```
```html
<section>
  <i>
    e
  </i>
</section>
<p>
  ef
</p>
<section>
  <i>
    e
  </i>
</section>
<button
  class="m"
>
  m
</button>
<button
  class="n"
>
  n
</button>
```
## Change
```
INSERT: section:nth-of-type(1) > i
INSERT: section:nth-of-type(2) > i
UPDATE: section:nth-of-type(1) > i::text " " => "e"
UPDATE: section:nth-of-type(2) > i::text " " => "e"
```

# Update
```js
d.querySelector(s).click();
```
```html
<section>
  <i>
    e
  </i>
</section>
<p>
  ef
</p>
<section>
  <i>
    e
  </i>
</section>
<p>
  ek
</p>
<button
  class="m"
>
  m
</button>
<button
  class="n"
>
  n
</button>
```
## Change
```
INSERT: section:nth-of-type(2) + p
UPDATE: p:nth-of-type(2)::text " " => "ek"
```

# Update `{"x":"g","y":"h"}`
```html
<section>
  <i>
    g
  </i>
</section>
<p>
  gh
</p>
<section>
  <i>
    g
  </i>
</section>
<p>
  gk
</p>
<button
  class="m"
>
  m
</button>
<button
  class="n"
>
  n
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ef" => "gh"
UPDATE: section:nth-of-type(1) > i::text "e" => "g"
UPDATE: section:nth-of-type(2) > i::text "e" => "g"
UPDATE: p:nth-of-type(2)::text "ek" => "gk"
```
