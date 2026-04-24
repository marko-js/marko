# Render
```html
<div>
  0
  <!--M_*2 #text/0-->
</div>
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/0": _.a = {
        dummy:
        {}
      }
    }, _.a]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
  <!--M_*2 #text/0-->
</div>
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/0": _.a = {
        dummy:
        {}
      }
    }, _.a]),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "0" => "1"
```