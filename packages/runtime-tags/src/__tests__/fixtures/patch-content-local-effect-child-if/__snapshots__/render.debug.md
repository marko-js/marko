# Render `{"show":true,"prefix":"a"}`
```html
<div>
  <div>
    a!
  </div>
</div>
```

# Update `{"show":true,"prefix":"b"}`
```html
<div>
  <div>
    b!
  </div>
</div>
```
## Change
```
REMOVE: div > div::text("a!")
INSERT: div > div::text("b!")
```

# Update `{"show":false,"prefix":"c"}`
## Change
```
REMOVE: div
```

# Update `{"show":true,"prefix":"d"}`
```html
<div>
  <div>
    d!
  </div>
</div>
```
## Change
```
INSERT: div
INSERT: div > div::text("d!")
```

# Update `{"show":true,"prefix":"e"}`
```html
<div>
  <div>
    e!
  </div>
</div>
```
## Change
```
REMOVE: div > div::text("d!")
INSERT: div > div::text("e!")
```
