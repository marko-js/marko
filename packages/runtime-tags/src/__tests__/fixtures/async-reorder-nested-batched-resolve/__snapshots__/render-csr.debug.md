# Render

# Update
```html
LOADING A1
```
## Change
```
INSERT: ::text("LOADING A1")
```

# Update
```html
<div
  class="a"
  level="1"
/>
```
## Change
```
INSERT: .a
REMOVE: .a + ::text("LOADING A1")
UPDATE: .a[class] null => "a"
```

# Update
```html
<div
  class="a"
  level="1"
>
  <div
    class="a"
    level="2"
  />
</div>
```
## Change
```
INSERT: div > div
UPDATE: div > div[class] null => "a"
```

# Update
```html
<div
  class="a"
  level="1"
>
  <div
    class="a"
    level="2"
  >
    LOADING B1
  </div>
</div>
```
## Change
```
INSERT: div > div::text("LOADING B1")
```

# Update
```html
<div
  class="a"
  level="1"
>
  <div
    class="a"
    level="2"
  >
    <div
      class="b"
      level="3"
    />
  </div>
</div>
```
## Change
```
INSERT: div > div > .b
REMOVE: .b + ::text("LOADING B1")
UPDATE: .b[class] null => "b"
```

# Update
```html
<div
  class="a"
  level="1"
>
  <div
    class="a"
    level="2"
  >
    <div
      class="b"
      level="3"
    >
      <div
        class="b"
        level="4"
      />
    </div>
  </div>
</div>
```
## Change
```
INSERT: div > div > div > div
UPDATE: div > div > div > div[class] null => "b"
```
