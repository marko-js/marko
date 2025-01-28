# Write
```html
  <!>replaced<!--M_*1 #text/0--><span>replaced<!--M_*1 #text/1--><div></div></span><div><div>a</div>replaced<!--M_*1 #text/2-->Hello Text &lt;a/><!>replaced<!--M_*1 #text/3-->Hello HTML <span>hi</span><script>
      'Hello <b> \x3C/script>'
    </script><!--M_*1 #script/5--><style>
      .test { content: 'Hello <b> \3C/style>' }
    </style><!--M_*1 #style/6--></div><script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<!---->
<html>
  <head />
  <body>
    replaced
    <!--M_*1 #text/0-->
    <span>
      replaced
      <!--M_*1 #text/1-->
      <div />
    </span>
    <div>
      <div>
        a
      </div>
      replaced
      <!--M_*1 #text/2-->
      Hello Text &lt;a/&gt;
      <!---->
      replaced
      <!--M_*1 #text/3-->
      Hello HTML 
      <span>
        hi
      </span>
      <script>
        
    'Hello &lt;b&gt; \x3C/script&gt;'
  
      </script>
      <!--M_*1 #script/5-->
      <style>
        
    .test { content: 'Hello &lt;b&gt; \3C/style&gt;' }
  
      </style>
      <!--M_*1 #style/6-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_")
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/span/div
INSERT html/body/div
INSERT html/body/div/div
INSERT html/body/div/div/#text
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#text3
INSERT html/body/div/span
INSERT html/body/div/span/#text
INSERT html/body/div/script
INSERT html/body/div/script/#text
INSERT html/body/div/#comment3
INSERT html/body/div/style
INSERT html/body/div/style/#text
INSERT html/body/div/#comment4
INSERT html/body/script
INSERT html/body/script/#text
```