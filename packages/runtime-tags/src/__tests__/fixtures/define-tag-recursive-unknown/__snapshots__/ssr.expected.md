# Write
```html
  "hi"<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={Foo:_.a={}}],_.a.content=_._["__tests__/template.marko_1_content"](_.c),_.b)]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    "hi"
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
        Foo: _.a = {}
      }], _.a.content = _._[
        "__tests__/template.marko_1_content"
        ](_.c), _.b)]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/script
INSERT html/body/script/#text
```