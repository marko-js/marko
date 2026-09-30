# Render
```html
LOADING A1
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
INSERT: div > div
INSERT: div > div::text("LOADING B1")
REMOVE: ::text("LOADING A1")
INSERT: div
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
REMOVE: div > div::text("LOADING B1")
INSERT: div > div > div
```
