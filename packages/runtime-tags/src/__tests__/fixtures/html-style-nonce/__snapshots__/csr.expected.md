# Render `{"$global":{"cspNonce":"default-nonce"}}`

```html
<style>
  
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
```

# Mutations
```
INSERT style0, style1, style2
```