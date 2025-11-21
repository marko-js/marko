# Render
```html
<!---->
<!---->
<div
  data-level="4"
>
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, div, #comment2, #comment3
```

# Render ASYNC
```html
<!---->
<!---->
<div
  data-level="4"
>
  LOADING...
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/#text
REMOVE #document-fragment/#comment0 after div/#text
REMOVE #document-fragment/#text after div/#text
REMOVE #document-fragment/#comment1 after div/#text
```

# Render ASYNC
```html
<!---->
<!---->
<div
  data-level="4"
>
  <!---->
  <!---->
  <!---->
  <div
    data-level="3"
  >
    <!---->
    <!---->
  </div>
  <!---->
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/#comment0, div/#comment1, div/#comment2, #text, div/#comment3, div/#comment4, div/#comment5
REMOVE #text after div/#comment5
INSERT div/div
REMOVE #text after div/div
UPDATE div/div[data-level] null => "3"
INSERT div/div/#comment0, div/div/#text, div/div/#comment1
REMOVE #text after div/div/#comment1
```

# Render ASYNC
```html
<!---->
<!---->
<div
  data-level="4"
>
  <!---->
  <!---->
  <!---->
  <div
    data-level="3"
  >
    LOADING...
  </div>
  <!---->
  <!---->
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
  data-level="4"
>
  <!---->
  <!---->
  <!---->
  <div
    data-level="3"
  >
    <!---->
    <!---->
    <!---->
    <div
      data-level="2"
    >
      <!---->
      <!---->
    </div>
    <!---->
    <!---->
    <!---->
  </div>
  <!---->
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/#comment0, div/div/#comment1, div/div/#comment2, #text, div/div/#comment3, div/div/#comment4, div/div/#comment5
REMOVE #text after div/div/#comment5
INSERT div/div/div
REMOVE #text after div/div/div
UPDATE div/div/div[data-level] null => "2"
INSERT div/div/div/#comment0, div/div/div/#text, div/div/div/#comment1
REMOVE #text after div/div/div/#comment1
```

# Render ASYNC
```html
<!---->
<!---->
<div
  data-level="4"
>
  <!---->
  <!---->
  <!---->
  <div
    data-level="3"
  >
    <!---->
    <!---->
    <!---->
    <div
      data-level="2"
    >
      LOADING...
    </div>
    <!---->
    <!---->
    <!---->
  </div>
  <!---->
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/div/#text
REMOVE #document-fragment/#comment0 after div/div/div/#text
REMOVE #document-fragment/#text after div/div/div/#text
REMOVE #document-fragment/#comment1 after div/div/div/#text
```

# Render ASYNC
```html
<!---->
<!---->
<div
  data-level="4"
>
  <!---->
  <!---->
  <!---->
  <div
    data-level="3"
  >
    <!---->
    <!---->
    <!---->
    <div
      data-level="2"
    >
      <!---->
      <!---->
      <!---->
      <div
        data-level="1"
      >
        <!---->
        <!---->
      </div>
      <!---->
      <!---->
      <!---->
    </div>
    <!---->
    <!---->
    <!---->
  </div>
  <!---->
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/div/#comment0, div/div/div/#comment1, div/div/div/#comment2, #text, div/div/div/#comment3, div/div/div/#comment4, div/div/div/#comment5
REMOVE #text after div/div/div/#comment5
INSERT div/div/div/div
REMOVE #text after div/div/div/div
UPDATE div/div/div/div[data-level] null => "1"
INSERT div/div/div/div/#comment0, div/div/div/div/#text, div/div/div/div/#comment1
REMOVE #text after div/div/div/div/#comment1
```

# Render ASYNC
```html
<!---->
<!---->
<div
  data-level="4"
>
  <!---->
  <!---->
  <!---->
  <div
    data-level="3"
  >
    <!---->
    <!---->
    <!---->
    <div
      data-level="2"
    >
      <!---->
      <!---->
      <!---->
      <div
        data-level="1"
      >
        LOADING...
      </div>
      <!---->
      <!---->
      <!---->
    </div>
    <!---->
    <!---->
    <!---->
  </div>
  <!---->
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/div/div/#text
REMOVE #document-fragment/#comment0 after div/div/div/div/#text
REMOVE #document-fragment/#text after div/div/div/div/#text
REMOVE #document-fragment/#comment1 after div/div/div/div/#text
```

# Render ASYNC
```html
<!---->
<!---->
<div
  data-level="4"
>
  <!---->
  <!---->
  <!---->
  <div
    data-level="3"
  >
    <!---->
    <!---->
    <!---->
    <div
      data-level="2"
    >
      <!---->
      <!---->
      <!---->
      <div
        data-level="1"
      >
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
      </div>
      <!---->
      <!---->
      <!---->
    </div>
    <!---->
    <!---->
    <!---->
  </div>
  <!---->
  <!---->
  <!---->
</div>
<!---->
<!---->
```

# Mutations
```
INSERT div/div/div/div/#comment0, div/div/div/div/#comment1, div/div/div/div/#comment2, div/div/div/div/#text, div/div/div/div/#comment3, div/div/div/div/#comment4, div/div/div/div/#comment5
REMOVE #text after div/div/div/div/#comment5
```