# Write
  <!M#1 0><span><!M#2 0>Hello</span>


# Render "End"
```html
<!--M#1 0-->
<html>
  <head />
  <body>
    <span>
      <!--M#2 0-->
      Hello
    </span>
  </body>
</html>
```

# Mutations
```
inserted #document/#comment0
inserted #document/html1
inserted #document/html1/head0
inserted #document/html1/body1
inserted #document/html1/body1/span0
inserted #document/html1/body1/span0/#comment0
inserted #document/html1/body1/span0/#text1
```