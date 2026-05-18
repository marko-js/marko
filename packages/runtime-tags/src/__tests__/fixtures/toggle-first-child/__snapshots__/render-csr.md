# Render `{"value":"Hello"}`
```html
<div>
  <span>
    Hello
  </span>
  <span />
  <span />
</div>
```

# Update `{"value":false}`
```html
<div>
  <span />
  <span />
</div>
```
## Change
```
REMOVE: div > span
```

# Update `{"value":"World"}`
```html
<div>
  <span>
    World
  </span>
  <span />
  <span />
</div>
```
## Change
```
INSERT: div > span
UPDATE: div > span:nth-of-type(1)::text " " => "World"
```

# Update `{"value":"!"}`
```html
<div>
  <span>
    !
  </span>
  <span />
  <span />
</div>
```
## Change
```
UPDATE: div > span:nth-of-type(1)::text "World" => "!"
```
