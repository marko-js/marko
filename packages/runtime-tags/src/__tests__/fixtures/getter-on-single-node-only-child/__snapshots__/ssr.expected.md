# Write
```html
  <button></button><!--M_*1 #button/0--><ul><li>0<!--M_*2 #text/0--></li><li>1<!--M_*3 #text/0--></li><!--M_}1 #ul/1 3 2--></ul><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{items:[0,1]}]),"__tests__/template.marko_0 1 __tests__/template.marko_0_items 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <ul>
      <li>
        0
        <!--M_*2 #text/0-->
      </li>
      <li>
        1
        <!--M_*3 #text/0-->
      </li>
      <!--M_}1 #ul/1 3 2-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          items: [0, 1]
        }]),
        "__tests__/template.marko_0 1 __tests__/template.marko_0_items 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button
INSERT html/body/#comment
INSERT html/body/ul
INSERT html/body/ul/li0
INSERT html/body/ul/li0/#text
INSERT html/body/ul/li0/#comment
INSERT html/body/ul/li1
INSERT html/body/ul/li1/#text
INSERT html/body/ul/li1/#comment
INSERT html/body/ul/#comment
INSERT html/body/script
INSERT html/body/script/#text
```