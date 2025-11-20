# Write
```html
  <script nonce=default-nonce type=magic>
    A
  </script><script type=magic nonce=override>
    B
  </script><script nonce=override-spread type=magic>
    C
  </script><!--M_*1 #script/0--><script nonce=default-nonce>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{spreadAttrs:{nonce:"override-spread"}}]),"__tests__/template.marko_0_spreadAttrs 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head>
    <script
      nonce="default-nonce"
      type="magic"
    >
      A
    </script>
    <script
      nonce="override"
      type="magic"
    >
      B
    </script>
    <script
      nonce="override-spread"
      type="magic"
    >
      C
    </script>
    <!--M_*1 #script/0-->
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
        "__tests__/template.marko_0_spreadAttrs 1"
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
INSERT html/head/script0
INSERT html/head/script0/#text
INSERT html/head/script1
INSERT html/head/script1/#text
INSERT html/head/script2
INSERT html/head/script2/#text
INSERT html/head/#comment
INSERT html/head/script3
INSERT html/head/script3/#text
INSERT html/body
```