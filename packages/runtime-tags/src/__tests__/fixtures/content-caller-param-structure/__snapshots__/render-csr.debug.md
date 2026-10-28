# Render `{"label":"a"}`
```html
<p>
  if a
</p>
<p>
  for a
</p>
<div>
  <p>
    tag a
  </p>
</div>
<div>
  <p>
    own a
  </p>
</div>
<p>
  if a
</p>
<p>
  for a
</p>
<div>
  <p>
    tag a
  </p>
</div>
<div>
  <p>
    own a
  </p>
</div>
<button>
  +
</button>
```

# Update `{"label":"b"}`
```html
<p>
  if b
</p>
<p>
  for b
</p>
<div>
  <p>
    tag b
  </p>
</div>
<div>
  <p>
    own b
  </p>
</div>
<p>
  if b
</p>
<p>
  for b
</p>
<div>
  <p>
    tag b
  </p>
</div>
<div>
  <p>
    own b
  </p>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div:nth-of-type(2) > p::text@4 "a" => "b"
UPDATE: div:nth-of-type(4) > p::text@4 "a" => "b"
UPDATE: p:nth-of-type(1)::text@3 "a" => "b"
UPDATE: p:nth-of-type(2)::text@4 "a" => "b"
UPDATE: div:nth-of-type(1) > p::text@4 "a" => "b"
UPDATE: p:nth-of-type(3)::text@3 "a" => "b"
UPDATE: p:nth-of-type(4)::text@4 "a" => "b"
UPDATE: div:nth-of-type(3) > p::text@4 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    tag b
  </p>
</section>
<section>
  <p>
    own b
  </p>
</section>
<section>
  <p>
    tag b
  </p>
</section>
<section>
  <p>
    own b
  </p>
</section>
<button>
  +
</button>
```
## Change
```
REMOVE: p
REMOVE: p
INSERT: section
REMOVE: section:nth-of-type(1) + div
INSERT: section:nth-of-type(1) + section
REMOVE: section:nth-of-type(2) + div
REMOVE: section:nth-of-type(2) + p
REMOVE: section:nth-of-type(2) + p
INSERT: section:nth-of-type(2) + section
REMOVE: section:nth-of-type(3) + div
INSERT: section:nth-of-type(3) + section
REMOVE: section:nth-of-type(4) + div
INSERT: section:nth-of-type(1) > p
UPDATE: section:nth-of-type(2) > p::text@4 "" => "b"
INSERT: section:nth-of-type(3) > p
UPDATE: section:nth-of-type(4) > p::text@4 "" => "b"
UPDATE: section:nth-of-type(1) > p::text@4 "" => "b"
UPDATE: section:nth-of-type(3) > p::text@4 "" => "b"
```

# Update `{"label":"c"}`
```html
<section>
  <p>
    tag c
  </p>
</section>
<section>
  <p>
    own c
  </p>
</section>
<section>
  <p>
    tag c
  </p>
</section>
<section>
  <p>
    own c
  </p>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section:nth-of-type(2) > p::text@4 "b" => "c"
UPDATE: section:nth-of-type(4) > p::text@4 "b" => "c"
UPDATE: section:nth-of-type(1) > p::text@4 "b" => "c"
UPDATE: section:nth-of-type(3) > p::text@4 "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  if c
</p>
<p>
  for c
</p>
<div>
  <p>
    tag c
  </p>
</div>
<div>
  <p>
    own c
  </p>
</div>
<p>
  if c
</p>
<p>
  for c
</p>
<div>
  <p>
    tag c
  </p>
</div>
<div>
  <p>
    own c
  </p>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + div
REMOVE: div:nth-of-type(1) + section
INSERT: div:nth-of-type(1) + div
REMOVE: div:nth-of-type(2) + section
INSERT: p:nth-of-type(4) + div
REMOVE: div:nth-of-type(3) + section
INSERT: div:nth-of-type(3) + div
REMOVE: div:nth-of-type(4) + section
INSERT: p
INSERT: p:nth-of-type(1) + p
INSERT: div:nth-of-type(1) > p
UPDATE: div:nth-of-type(2) > p::text@4 "" => "c"
INSERT: div:nth-of-type(2) + p
INSERT: p:nth-of-type(3) + p
INSERT: div:nth-of-type(3) > p
UPDATE: div:nth-of-type(4) > p::text@4 "" => "c"
UPDATE: p:nth-of-type(1)::text@3 "" => "c"
UPDATE: p:nth-of-type(2)::text@4 "" => "c"
UPDATE: div:nth-of-type(1) > p::text@4 "" => "c"
UPDATE: p:nth-of-type(3)::text@3 "" => "c"
UPDATE: p:nth-of-type(4)::text@4 "" => "c"
UPDATE: div:nth-of-type(3) > p::text@4 "" => "c"
```
