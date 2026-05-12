# Render `{"value":1}`

```html
<button>
  x: 
  <!---->
  1
  <!--M_*2 #text/2-->
</button>
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"] =
  1;
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      count: 1
    }]),
    "__tests__/child.marko_0_count 2"
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
  x: 
  <!---->
  2
  <!--M_*2 #text/2-->
</button>
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  (M._.b = {})[
    "ready:__tests__/child.marko"] =
  1;
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      count: 1
    }]),
    "__tests__/child.marko_0_count 2"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text1 "1" => "2"
```