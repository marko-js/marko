# Render
```html
<button>
  0
  <!--M_*2 #text/1-->
   
  <!---->
  0
  <!--M_*2 #text/2-->
</button>
<!--M_*2 #button/0-->
<button>
  0
  <!--M_*3 #text/1-->
   
  <!---->
  0
  <!--M_*3 #text/2-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.d = {
      clickCount: 0,
      "#childScope/0": _.a = {},
      "#childScope/1": _.b = {}
    }, _.a, _.b], _.a.onClick = _._[
      "__tests__/template.marko_0/onClick"
      ](_.d), _.b.onClick = _._[
      "__tests__/template.marko_0/onClick2"
      ](_.d), _.c),
    "__tests__/tags/my-button.marko_0_onClick 2 3"
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
  1
  <!--M_*2 #text/1-->
   
  <!---->
  1
  <!--M_*2 #text/2-->
</button>
<!--M_*2 #button/0-->
<button>
  1
  <!--M_*3 #text/1-->
   
  <!---->
  1
  <!--M_*3 #text/2-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.d = {
      clickCount: 0,
      "#childScope/0": _.a = {},
      "#childScope/1": _.b = {}
    }, _.a, _.b], _.a.onClick = _._[
      "__tests__/template.marko_0/onClick"
      ](_.d), _.b.onClick = _._[
      "__tests__/template.marko_0/onClick2"
      ](_.d), _.c),
    "__tests__/tags/my-button.marko_0_onClick 2 3"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button0/#text0 "0" => "1"
UPDATE button0/#text2 "0" => "1"
UPDATE button1/#text0 "0" => "1"
UPDATE button1/#text2 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
  <!--M_*2 #text/1-->
   
  <!---->
  2
  <!--M_*2 #text/2-->
</button>
<!--M_*2 #button/0-->
<button>
  2
  <!--M_*3 #text/1-->
   
  <!---->
  2
  <!--M_*3 #text/2-->
</button>
<!--M_*3 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.d = {
      clickCount: 0,
      "#childScope/0": _.a = {},
      "#childScope/1": _.b = {}
    }, _.a, _.b], _.a.onClick = _._[
      "__tests__/template.marko_0/onClick"
      ](_.d), _.b.onClick = _._[
      "__tests__/template.marko_0/onClick2"
      ](_.d), _.c),
    "__tests__/tags/my-button.marko_0_onClick 2 3"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button0/#text0 "1" => "2"
UPDATE button0/#text2 "1" => "2"
UPDATE button1/#text0 "1" => "2"
UPDATE button1/#text2 "1" => "2"
```