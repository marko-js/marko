# Render
```html
<button>
  Before
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a.$fooChange = _._[
      "__tests__/template.marko_0/fooBar"
      ](_.a), _.b),
    "__tests__/template.marko_0_$fooChange 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  After
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a.$fooChange = _._[
      "__tests__/template.marko_0/fooBar"
      ](_.a), _.b),
    "__tests__/template.marko_0_$fooChange 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in button
INSERT button/#text
```