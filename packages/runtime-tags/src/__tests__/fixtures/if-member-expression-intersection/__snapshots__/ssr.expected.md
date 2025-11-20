# Write
```html
  <div id=sM_1><!--M_}2 #div/0--></div><div id=sM_2><!--M_}3 #div/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{hide:!0,text:"",text_length:0,id:"sM_1"},{hide:!0,text:"",text_length:0,id:"sM_2"}]),"__tests__/tags/child.marko_0_id 2 3"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="sM_1"
    >
      <!--M_}2 #div/0-->
    </div>
    <div
      id="sM_2"
    >
      <!--M_}3 #div/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          hide: !0,
          text: "",
          text_length: 0,
          id: "sM_1"
        },
        {
          hide: !0,
          text: "",
          text_length: 0,
          id: "sM_2"
        }]),
        "__tests__/tags/child.marko_0_id 2 3"
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
INSERT html/body/div0
INSERT html/body/div0/#comment
INSERT html/body/div1
INSERT html/body/div1/#comment
INSERT html/body/script
INSERT html/body/script/#text
```