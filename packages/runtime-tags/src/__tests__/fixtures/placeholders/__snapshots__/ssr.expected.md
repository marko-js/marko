# Write
  <!>replaced<!--M_*0 #text/0--><span>replaced<!--M_*0 #text/1--><div></div></span><div><div>a</div>replaced<!--M_*0 #text/2-->Hello Text &lt;a/><!>replaced<!--M_*0 #text/3-->Hello HTML <span>hi</span><script>
      'Hello <b> \x3C/script>'
    </script><!--M_*0 #script/5--><style>
      .test { content: 'Hello <b> \3C/style>' }
    </style><!--M_*0 #style/6--></div><script>WALKER_RUNTIME("M")("_")</script>


# Render "End"
```html
<!---->
<html>
  <head />
  <body>
    replaced
    <!--M_*0 #text/0-->
    <span>
      replaced
      <!--M_*0 #text/1-->
      <div />
    </span>
    <div>
      <div>
        a
      </div>
      replaced
      <!--M_*0 #text/2-->
      Hello Text &lt;a/&gt;
      <!---->
      replaced
      <!--M_*0 #text/3-->
      Hello HTML 
      <span>
        hi
      </span>
      <script>
        
    'Hello &lt;b&gt; \x3C/script&gt;'
  
      </script>
      <!--M_*0 #script/5-->
      <style>
        
    .test { content: 'Hello &lt;b&gt; \3C/style&gt;' }
  
      </style>
      <!--M_*0 #style/6-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_")
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/#comment0
inserted #document/html1
inserted #document/html1/head0
inserted #document/html1/body1
inserted #document/html1/body1/#text0
inserted #document/html1/body1/#comment1
inserted #document/html1/body1/span2
inserted #document/html1/body1/span2/#text0
inserted #document/html1/body1/span2/#comment1
inserted #document/html1/body1/span2/div2
inserted #document/html1/body1/div3
inserted #document/html1/body1/div3/div0
inserted #document/html1/body1/div3/div0/#text0
inserted #document/html1/body1/div3/#text1
inserted #document/html1/body1/div3/#comment2
inserted #document/html1/body1/div3/#text3
inserted #document/html1/body1/div3/#comment4
inserted #document/html1/body1/div3/#text5
inserted #document/html1/body1/div3/#comment6
inserted #document/html1/body1/div3/#text7
inserted #document/html1/body1/div3/span8
inserted #document/html1/body1/div3/span8/#text0
inserted #document/html1/body1/div3/script9
inserted #document/html1/body1/div3/script9/#text0
inserted #document/html1/body1/div3/#comment10
inserted #document/html1/body1/div3/style11
inserted #document/html1/body1/div3/style11/#text0
inserted #document/html1/body1/div3/#comment12
inserted #document/html1/body1/script4
inserted #document/html1/body1/script4/#text0
```