# Render
```html
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, #text, #comment2, #comment3
```

# Render ASYNC
```html
<!---->
LOADING A1
<!---->
```

# Mutations
```
INSERT #text
REMOVE #document-fragment/#comment0 after #text
REMOVE #document-fragment/#text after #text
REMOVE #document-fragment/#comment1 after #text
```

# Render ASYNC
```html
<!---->
<!---->
<div
  class="a"
  level="1"
>
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT #comment1, div, #comment2
REMOVE #text after #comment2
INSERT div/#comment0, div/#text, div/#comment1
REMOVE #text after div/#comment1
```

# Render ASYNC
```html
<!---->
<!---->
<div
  class="a"
  level="1"
>
  <!---->
  <div
    class="a"
    level="2"
  >
    <!---->
    <!---->
  </div>
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div
REMOVE #text after div/div
UPDATE div/div[class] null => "a"
INSERT div/div/#comment0, div/div/#text, div/div/#comment1
REMOVE #text after div/div/#comment1
```

# Render ASYNC
```html
<!---->
<!---->
<div
  class="a"
  level="1"
>
  <!---->
  <div
    class="a"
    level="2"
  >
    LOADING B1
  </div>
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/#text
REMOVE #document-fragment/#comment0 after div/div/#text
REMOVE #document-fragment/#text after div/div/#text
REMOVE #document-fragment/#comment1 after div/div/#text
```

# Render ASYNC
```html
<!---->
<!---->
<div
  class="a"
  level="1"
>
  <!---->
  <div
    class="a"
    level="2"
  >
    <!---->
    <div
      class="b"
      level="3"
    >
      <!---->
      <!---->
    </div>
    <!---->
  </div>
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/#comment0, div/div/div, div/div/#comment1
REMOVE #text after div/div/#comment1
INSERT div/div/div/#comment0, div/div/div/#text, div/div/div/#comment1
REMOVE #text after div/div/div/#comment1
```

# Render ASYNC
```html
<!---->
<!---->
<div
  class="a"
  level="1"
>
  <!---->
  <div
    class="a"
    level="2"
  >
    <!---->
    <div
      class="b"
      level="3"
    >
      <!---->
      <div
        class="b"
        level="4"
      />
      <!---->
    </div>
    <!---->
  </div>
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/div/div
REMOVE #text after div/div/div/div
UPDATE div/div/div/div[class] null => "b"
```