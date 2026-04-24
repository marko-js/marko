# Render
```html
<button>
  Count: 
  <!---->
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  Child: 
  <!---->
  1
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/2 2-->
<div>
  Parent: 
  <!---->
  1
  <!--M_*1 #text/4-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
      "#scopeOffset/3": 3,
      x: 1
    }, _.a = {}], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_y/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 
  <!---->
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  Child: 
  <!---->
  2
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/2 2-->
<div>
  Parent: 
  <!---->
  2
  <!--M_*1 #text/4-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
      "#scopeOffset/3": 3,
      x: 1
    }, _.a = {}], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_y/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text1 "1" => "2"
UPDATE div0/#text1 "1" => "2"
UPDATE div1/#text1 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 
  <!---->
  3
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  Child: 
  <!---->
  3
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/2 2-->
<div>
  Parent: 
  <!---->
  3
  <!--M_*1 #text/4-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
      "#scopeOffset/3": 3,
      x: 1
    }, _.a = {}], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_y/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text1 "2" => "3"
UPDATE div0/#text1 "2" => "3"
UPDATE div1/#text1 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 
  <!---->
  4
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  Child: 
  <!---->
  4
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/2 2-->
<div>
  Parent: 
  <!---->
  4
  <!--M_*1 #text/4-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
      "#scopeOffset/3": 3,
      x: 1
    }, _.a = {}], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_y/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text1 "3" => "4"
UPDATE div0/#text1 "3" => "4"
UPDATE div1/#text1 "3" => "4"
```