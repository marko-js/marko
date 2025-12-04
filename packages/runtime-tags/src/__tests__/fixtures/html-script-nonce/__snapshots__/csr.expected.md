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
<!---->
```

# Mutations
```
INSERT script0, script1, script2, #text, #comment
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
<script
  nonce="default-nonce"
  type="magic"
>
  D
</script>
<!---->
```

# Mutations
```
INSERT script3
REMOVE #text after script3
UPDATE script3[nonce] null => "default-nonce"
```