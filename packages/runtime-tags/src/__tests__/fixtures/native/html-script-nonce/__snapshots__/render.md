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
```

# Update
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
<script
  nonce="default-nonce"
  type="magic"
>
  
    D
  
</script>
```
## Change
```
INSERT: script:nth-of-type(3) + script
UPDATE: script:nth-of-type(4)[nonce] null => "default-nonce"
```
