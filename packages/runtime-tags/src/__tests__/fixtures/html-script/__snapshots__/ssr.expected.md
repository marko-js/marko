# Write
```html
  <script type=importmap>
    {
      "imports": {
        "0": "https://markojs.com",
      }
    }
  </script><!--M_*1 #script/0--><div>0<!--M_*1 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count"];M._.w()</script>
```

# Render End
```html
<html>
  <head>
    <script
      type="importmap"
    >
      
  {
    "imports": {
      "0": "https://markojs.com",
    }
  }

    </script>
    <!--M_*1 #script/0-->
  </head>
  <body>
    <div>
      0
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/head/script
INSERT html/head/script/#text
INSERT html/head/#comment
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```