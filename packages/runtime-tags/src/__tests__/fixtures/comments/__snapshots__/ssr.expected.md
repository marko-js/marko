# Write
```html
  <div><!--abc--><!--[if lt IE 9]><script src="..."></script><![endif]--></div>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--abc-->
      <!--[if lt IE 9]&gt;&lt;script src="..."&gt;&lt;/script&gt;&lt;![endif]-->
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
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
```