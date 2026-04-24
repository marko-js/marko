# Write
```html
  <div><!--abc--><!--[if lt IE 9]><script src="..."></script><![endif]--></div>
```

# Render End
```html
<div>
  <!--abc-->
  <!--[if lt IE 9]&gt;&lt;script src="..."&gt;&lt;/script&gt;&lt;![endif]-->
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/#comment0
INSERT div/#comment1
```