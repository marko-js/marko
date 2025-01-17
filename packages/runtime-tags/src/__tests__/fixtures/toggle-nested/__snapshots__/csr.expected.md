# Render {"show":false,"value1":"Hello","value2":"World"}
```html
<div />
```

# Mutations
```
inserted div0
```


# Render {"show":true,"value1":"Hello","value2":"World"}
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
inserted div0/#comment0
inserted #text
inserted #text
inserted div0/#comment3
removed #text after div0/#comment3
inserted div0/span1
removed #text after div0/span1
inserted div0/span2
removed #text after div0/span2
div0/span1/#text0: " " => "Hello"
div0/span2/#text0: " " => "World"
```


# Render {"show":true,"value1":false,"value2":"World"}
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
inserted div0/#text1
removed span after div0/#text1
```


# Render {"show":true,"value1":"Goodbye","value2":"World"}
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
inserted div0/span1
removed #text after div0/span1
div0/span1/#text0: " " => "Goodbye"
```


# Render {"show":false,"value1":"Goodbye","value2":"World"}
```html
<div />
```

# Mutations
```
inserted div0/#text0
removed #comment after div0/#text0
removed span after div0/#text0
removed span after div0/#text0
removed #comment after div0/#text0
```