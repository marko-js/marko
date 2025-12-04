# Render `{"$global":{"cspNonce":"default-nonce","serializedGlobals":{"cspNonce":true}}}`

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
  </head>
  <body />
</html>
```


# Render ASYNC
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
    <!--M_*1 #style/1-->
    <style
      nonce="default-nonce"
    >
      
    D {}
  
    </style>
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
  </head>
  <body />
</html>
```

# Mutations
```
INSERT html/head/style3
REMOVE #comment after html/head/style3
UPDATE html/head/style3[nonce] null => "default-nonce"
```