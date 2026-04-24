# Write
```html
  <style nonce=default-nonce>
    A {}
  </style><style nonce=override>
    B {}
  </style><style nonce=override-spread>
    C {}
  </style><!--M_*1 #style/1--><!--M_|1 #text/2--><script nonce=default-nonce>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[{cspNonce:"default-nonce"},{spreadAttrs:{nonce:"override-spread"}}]),"__tests__/template.marko_0 1 __tests__/template.marko_0_spreadAttrs 1"];M._.w()</script>
```

# Render End
```html
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
<!--M_*1 #style/1-->
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
INSERT style0
INSERT style0/#text
INSERT style1
INSERT style1/#text
INSERT style2
INSERT style2/#text
INSERT #comment0
INSERT #comment1
INSERT script
INSERT script/#text
```