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
REMOVE: div > div + ::text("LOADING...")
INSERT: div > div
UPDATE: div > div[data-level] null => "3"
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
REMOVE: div > div > div + ::text("LOADING...")
INSERT: div > div > div
UPDATE: div > div > div[data-level] null => "2"
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
REMOVE: div > div > div > div + ::text("LOADING...")
INSERT: div > div > div > div
UPDATE: div > div > div > div[data-level] null => "1"
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
