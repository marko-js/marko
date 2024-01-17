# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<div>
  <p>
    1: a
  </p>
  <p>
    2: b
  </p>
  <p>
    3: c
  </p>
  <p>
    1
  </p>
  <p>
    2
  </p>
  <p>
    3
  </p>
</div>
```

# Mutations
```
inserted div0
```


# Render {"children":{}}
```html
<div />
```

# Mutations
```
inserted div0/#text0
removed p before p
removed p before p
removed p before div0/#text0
inserted div0/#text1
removed p after div0/#text0
removed p after div0/#text0
removed p after div0/#text0
```


# Render {"children":{"1":"a","2":"b","3":"c"}}
```html
<div>
  <p>
    1: a
  </p>
  <p>
    2: b
  </p>
  <p>
    3: c
  </p>
  <p>
    1
  </p>
  <p>
    2
  </p>
  <p>
    3
  </p>
</div>
```

# Mutations
```
inserted div0/p0
inserted div0/p1
inserted div0/p2
removed #text before div0/p0
inserted div0/p3
inserted div0/p4
inserted div0/p5
removed #text after div0/p2
```