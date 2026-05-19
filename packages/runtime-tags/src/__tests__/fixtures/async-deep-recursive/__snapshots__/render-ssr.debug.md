# Render
```html
<div
  data-level="4"
>
  LOADING...
</div>
```

# Update
```html
<div
  data-level="4"
>
  <div
    data-level="3"
  >
    LOADING...
  </div>
</div>
```
## Change
```
INSERT: div > div::text("LOADING...")
REMOVE: div::text("LOADING...")
INSERT: div > div
```

# Update
```html
<div
  data-level="4"
>
  <div
    data-level="3"
  >
    <div
      data-level="2"
    >
      LOADING...
    </div>
  </div>
</div>
```
## Change
```
INSERT: div > div > div::text("LOADING...")
REMOVE: div > div::text("LOADING...")
INSERT: div > div > div
```

# Update
```html
<div
  data-level="4"
>
  <div
    data-level="3"
  >
    <div
      data-level="2"
    >
      <div
        data-level="1"
      >
        LOADING...
      </div>
    </div>
  </div>
</div>
```
## Change
```
INSERT: div > div > div > div::text("LOADING...")
REMOVE: div > div > div::text("LOADING...")
INSERT: div > div > div > div
```

# Update
```html
<div
  data-level="4"
>
  <div
    data-level="3"
  >
    <div
      data-level="2"
    >
      <div
        data-level="1"
      />
    </div>
  </div>
</div>
```
## Change
```
REMOVE: div > div > div > div::text("LOADING...")
```
