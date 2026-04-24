# Write
```html
  "hi"<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={Foo:_.a={}}],_.a.content=_._["__tests__/template.marko_1_content"](_.c),_.b)]</script>
```

# Render End
```html
"hi"
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
    Foo: _.a = {}
  }], _.a.content = _._[
    "__tests__/template.marko_1_content"
    ](_.c), _.b)]
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text
INSERT script
INSERT script/#text
```