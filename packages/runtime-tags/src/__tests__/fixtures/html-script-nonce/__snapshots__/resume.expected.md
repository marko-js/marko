# Render `{"$global":{"cspNonce":"default-nonce","serializedGlobals":{"cspNonce":true}}}`

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


# Render ASYNC
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
<script
  nonce="default-nonce"
  type="magic"
>
  D
</script>
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
INSERT script3
REMOVE #comment after script3
UPDATE script3[nonce] null => "default-nonce"
```