# Render
```html
<main />
```

# Update `{"show":1,"html":"<b>a</b>"}`
```html
<main>
  <div>
    <b>
      a
    </b>
  </div>
  <div
    class="x"
  >
    <b>
      a
    </b>
  </div>
</main>
```
## Change
```
INSERT: main > :is(div, .x)
```

# Update `{"show":2,"html":"<i>b</i> c"}`
```html
<main>
  <div>
    <i>
      b
    </i>
     c
  </div>
  <div
    class="x"
  >
    <i>
      b
    </i>
     c
  </div>
  <div>
    <i>
      b
    </i>
     c
  </div>
  <div
    class="y"
  >
    <i>
      b
    </i>
     c
  </div>
  <i>
    b
  </i>
   c
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) > :is(i, ::text(" c"))
REMOVE: main > div:nth-of-type(1)::text + b
INSERT: .x > :is(i, ::text(" c"))
REMOVE: .x::text + b
INSERT: .x + :is(div, .y, i, ::text(" c"))
```

# Update `{"show":2,"html":"<u>d</u>"}`
```html
<main>
  <div>
    <u>
      d
    </u>
  </div>
  <div
    class="x"
  >
    <u>
      d
    </u>
  </div>
  <div>
    <u>
      d
    </u>
  </div>
  <div
    class="y"
  >
    <u>
      d
    </u>
  </div>
  <u>
    d
  </u>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) > u
REMOVE: main > div:nth-of-type(1) > u + i
REMOVE: main > div:nth-of-type(1) > u + ::text(" c")
INSERT: .x > u
REMOVE: .x > u + i
REMOVE: .x > u + ::text(" c")
INSERT: main > div:nth-of-type(3) > u
REMOVE: main > div:nth-of-type(3) > u + i
REMOVE: main > div:nth-of-type(3) > u + ::text(" c")
INSERT: .y > u
REMOVE: .y > u + i
REMOVE: .y > u + ::text(" c")
INSERT: .y + u
REMOVE: main > u + i
REMOVE: main > u + ::text(" c")
```

# Update
```html
<main />
```
## Change
```
REMOVE: main > div
REMOVE: main > div
REMOVE: main > div
REMOVE: main > div
REMOVE: main > u
```
