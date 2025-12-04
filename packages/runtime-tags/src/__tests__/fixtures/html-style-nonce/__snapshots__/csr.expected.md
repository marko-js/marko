# Render `{"$global":{"cspNonce":"default-nonce","serializedGlobals":{"cspNonce":true}}}`

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
<!---->
```

# Mutations
```
INSERT style0, style1, style2, #text, #comment
```

# Render ASYNC
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
<style
  nonce="default-nonce"
>
  
    D {}
  
</style>
<!---->
```

# Mutations
```
INSERT style3
REMOVE #text after style3
UPDATE style3[nonce] null => "default-nonce"
```