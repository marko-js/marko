# Write
```html
  <div><div>1</div><div>2</div><div>3</div></div><div><div>1</div><div>2</div><div>3</div><div></div></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <div>
        1
      </div>
      <div>
        2
      </div>
      <div>
        3
      </div>
    </div>
    <div>
      <div>
        1
      </div>
      <div>
        2
      </div>
      <div>
        3
      </div>
      <div />
    </div>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/div0/div0
INSERT html/body/div0/div0/#text
INSERT html/body/div0/div1
INSERT html/body/div0/div1/#text
INSERT html/body/div0/div2
INSERT html/body/div0/div2/#text
INSERT html/body/div1
INSERT html/body/div1/div0
INSERT html/body/div1/div0/#text
INSERT html/body/div1/div1
INSERT html/body/div1/div1/#text
INSERT html/body/div1/div2
INSERT html/body/div1/div2/#text
INSERT html/body/div1/div3
```