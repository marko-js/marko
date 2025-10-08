# Write
```html
  <div>1` <span>child`"'</span><span>${value}</span></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      1` 
      <span>
        child`"'
      </span>
      <span>
        ${value}
      </span>
    </div>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/span0
INSERT html/body/div/span0/#text
INSERT html/body/div/span1
INSERT html/body/div/span1/#text
```