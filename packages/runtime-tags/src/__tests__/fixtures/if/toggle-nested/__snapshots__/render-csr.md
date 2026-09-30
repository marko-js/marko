# Render `{"show":false,"value1":"Hello","value2":"World"}`
```html
<div />
```

# Update `{"show":true,"value1":"Hello","value2":"World"}`
```html
<div>
  <span>
    Hello
  </span>
  <span>
    World
  </span>
</div>
```
## Change
```
INSERT: div > span
INSERT: div > span:nth-of-type(1) + span
UPDATE: div > span:nth-of-type(1)::text " " => "Hello"
UPDATE: div > span:nth-of-type(2)::text " " => "World"
```

# Update `{"show":true,"value1":false,"value2":"World"}`
```html
<div>
  <span>
    World
  </span>
</div>
```
## Change
```
REMOVE: div > span
```

# Update `{"show":true,"value1":"Goodbye","value2":"World"}`
```html
<div>
  <span>
    Goodbye
  </span>
  <span>
    World
  </span>
</div>
```
## Change
```
INSERT: div > span
UPDATE: div > span:nth-of-type(1)::text " " => "Goodbye"
```

# Update `{"show":false,"value1":"Goodbye","value2":"World"}`
```html
<div />
```
## Change
```
REMOVE: div > :is(span, span)
```
