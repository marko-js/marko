# Write
  <div>Child 1 has <!>3<!M#1 #text/0></div><button></button><!M#0 #button/0><script>(M$h=[]).push((b,s)=>({0:{}}),[0,"packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName",])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      Child 1 has 
      <!---->
      3
      <!--M#1 #text/0-->
    </div>
    <button />
    <!--M#0 #button/0-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{}}),[0,"packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
inserted #document/html0/body1/div0/#comment1
inserted #document/html0/body1/div0/#text2
inserted #document/html0/body1/div0/#comment3
inserted #document/html0/body1/button1
inserted #document/html0/body1/#comment2
inserted #document/html0/body1/script3
inserted #document/html0/body1/script3/#text0
```