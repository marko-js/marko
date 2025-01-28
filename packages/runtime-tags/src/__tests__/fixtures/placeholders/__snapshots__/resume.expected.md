# Render `{"x":"replaced"}`

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
