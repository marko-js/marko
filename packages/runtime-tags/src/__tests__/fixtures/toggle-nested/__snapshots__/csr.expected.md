# Render `{"show":false,"value1":"Hello","value2":"World"}`

```html
<div />
```

# Mutations
```
INSERT div
```

# Render `{"show":true,"value1":"Hello","value2":"World"}`

```html
<div>
  <!---->
  <span>
    Hello
  </span>
  <span>
    World
  </span>
  <!---->
</div>
```

# Mutations
```
INSERT div/#comment0, #text, #text, div/#comment1
INSERT div/span0
REMOVE #text after div/#comment0
INSERT div/span1
REMOVE #text after div/span0
UPDATE div/span0/#text " " => "Hello"
UPDATE div/span1/#text " " => "World"
```

# Render `{"show":true,"value1":false,"value2":"World"}`

```html
<div>
  <!---->
  <span>
    World
  </span>
  <!---->
</div>
```

# Mutations
```
INSERT div/#text
REMOVE span after div/#comment0
```

# Render `{"show":true,"value1":"Goodbye","value2":"World"}`

```html
<div>
  <!---->
  <span>
    Goodbye
  </span>
  <span>
    World
  </span>
  <!---->
</div>
```

# Mutations
```
INSERT div/span0
REMOVE #text after div/#comment0
UPDATE div/span0/#text " " => "Goodbye"
```

# Render `{"show":false,"value1":"Goodbye","value2":"World"}`

```html
<div />
```

# Mutations
```
REMOVE #comment, span, span, #comment in div
```