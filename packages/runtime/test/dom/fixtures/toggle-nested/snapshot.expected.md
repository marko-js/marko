# Render {"show":false,"value1":"Hello","value2":"World"}
```html
<div>
  <!---->
</div>
```

# Mutations
```
inserted div0
```


# Render {"show":true,"value1":"Hello","value2":"World"}
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

# Mutations
```
inserted #comment
inserted #comment
removed #comment after #comment
inserted div0/span0
removed #comment after div0/span0
div0/span0/#text0: " " => "Hello"
inserted div0/span1
removed #comment after div0/span1
div0/span1/#text0: " " => "World"
```


# Render {"show":true,"value1":false,"value2":"World"}
```html
<div>
  <!---->
  <span>
    World
  </span>
</div>
```

# Mutations
```
inserted div0/#comment0
removed span after div0/#comment0
```


# Render {"show":true,"value1":"Goodbye","value2":"World"}
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

# Mutations
```
inserted div0/span0
removed #comment after div0/span0
div0/span0/#text0: " " => "Goodbye"
```


# Render {"show":false,"value1":"Goodbye","value2":"World"}
```html
<div>
  <!---->
</div>
```

# Mutations
```
inserted div0/#comment0
removed span after div0/#comment0
removed span after div0/#comment0
```