# Render `{"$global":{"cspNonce":"default-nonce"}}`

```html
<script
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

# Mutations
```
INSERT script0, script1, script2
```