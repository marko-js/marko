# Render
```html
<div
  class="obj"
>
  {"a":1,"b":2,"c":3}
  <!--M_*1 #text/0-->
</div>
<div
  class="partialObj"
>
  {"b":2,"c":3}
  <!--M_*1 #text/1-->
</div>
<div
  class="a"
>
  1
  <!--M_*1 #text/2-->
</div>
<div
  class="b"
>
  2
  <!--M_*1 #text/3-->
</div>
<div
  class="a"
>
  removed a
  <!--M_*1 #text/4-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/5-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div
  class="obj"
>
  {"a":4,"b":5,"d":6}
  <!--M_*1 #text/0-->
</div>
<div
  class="partialObj"
>
  {"b":5,"d":6}
  <!--M_*1 #text/1-->
</div>
<div
  class="a"
>
  4
  <!--M_*1 #text/2-->
</div>
<div
  class="b"
>
  5
  <!--M_*1 #text/3-->
</div>
<div
  class="a"
>
  removed a
  <!--M_*1 #text/4-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/5-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/#text "{\"a\":1,\"b\":2,\"c\":3}" => "{\"a\":4,\"b\":5,\"d\":6}"
UPDATE div1/#text "{\"b\":2,\"c\":3}" => "{\"b\":5,\"d\":6}"
UPDATE div2/#text "1" => "4"
UPDATE div3/#text "2" => "5"
```