# Write
  <div>{"foo":1,"bar":2}<!M*0 #text/0></div><button>1<!M*0 #text/2></button><!M*0 #button/1><script>(M$h=[]).push(_=>(_.a={0:{x:1}}),[0,"packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x",])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      {"foo":1,"bar":2}
      <!--M*0 #text/0-->
    </div>
    <button>
      1
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{x:1}}),[0,"packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x",])
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
inserted #document/html0/body1/button1
inserted #document/html0/body1/button1/#text0
inserted #document/html0/body1/button1/#comment1
inserted #document/html0/body1/#comment2
inserted #document/html0/body1/script3
inserted #document/html0/body1/script3/#text0
```