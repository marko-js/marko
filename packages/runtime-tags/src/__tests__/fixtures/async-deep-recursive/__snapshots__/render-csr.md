# Render
```html
<div
  data-level="4"
/>
```

# Update
```html
<div
  data-level="4"
>
  LOADING...
</div>
```
## Change
```
INSERT: div::text("LOADING...")
```

# Update
```html
<div
  data-level="4"
>
  <div
    data-level="3"
  />
</div>
```
## Change
```
INSERT: div > div
REMOVE: div > div + ::text("LOADING...")
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
    />
  </div>
</div>
```
## Change
```
INSERT: div > div > div
REMOVE: div > div > div + ::text("LOADING...")
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
INSERT: div > div > div > div
REMOVE: div > div > div > div + ::text("LOADING...")
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
