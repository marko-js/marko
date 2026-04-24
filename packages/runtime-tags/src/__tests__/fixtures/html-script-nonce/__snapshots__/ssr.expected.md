# Write
```html
  <script nonce=default-nonce type=magic>
    A
  </script><script type=magic nonce=override>
    B
  </script><script nonce=override-spread type=magic>
    C
  </script><!--M_*1 #script/1--><!--M_|1 #text/2--><script nonce=default-nonce>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[{cspNonce:"default-nonce"},{spreadAttrs:{nonce:"override-spread"}}]),"__tests__/template.marko_0 1 __tests__/template.marko_0_spreadAttrs 1"];M._.w()</script>
```

# Render End
```html
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
<!--M_*1 #script/1-->
<!--M_|1 #text/2-->
<script
  nonce="default-nonce"
>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [
    {
      cspNonce: "default-nonce"
    },
    {
      spreadAttrs:
      {
        nonce: "override-spread"
      }
    }]),
    "__tests__/template.marko_0 1 __tests__/template.marko_0_spreadAttrs 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT script0
INSERT script0/#text
INSERT script1
INSERT script1/#text
INSERT script2
INSERT script2/#text
INSERT #comment0
INSERT #comment1
INSERT script3
INSERT script3/#text
```