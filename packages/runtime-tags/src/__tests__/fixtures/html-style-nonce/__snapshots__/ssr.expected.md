# Write
```html
  <style nonce=default-nonce>
    A {}
  </style><style nonce=override>
    B {}
  </style><style nonce=override-spread>
    C {}
  </style><!--M_*1 #style/0--><script nonce=default-nonce>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{spreadAttrs:{nonce:"override-spread"}}]),"__tests__/template.marko_0_spreadAttrs",1];M._.w()</script>
```

# Render End
```html
<html>
  <head>
    <style
      nonce="default-nonce"
    >
      
  A {}

    </style>
    <style
      nonce="override"
    >
      
  B {}

    </style>
    <style
      nonce="override-spread"
    >
      
  C {}

    </style>
    <!--M_*1 #style/0-->
    <script
      nonce="default-nonce"
    >
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          spreadAttrs:
          {
            nonce: "override-spread"
          }
        }]),
        "__tests__/template.marko_0_spreadAttrs",
        1
      ];
      M._.w()
    </script>
  </head>
  <body />
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/head/style0
INSERT html/head/style0/#text
INSERT html/head/style1
INSERT html/head/style1/#text
INSERT html/head/style2
INSERT html/head/style2/#text
INSERT html/head/#comment
INSERT html/head/script
INSERT html/head/script/#text
INSERT html/body
```