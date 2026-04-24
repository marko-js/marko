# Render
```html
<div
  class="a"
  id="a"
>
  0
  <!--M_*2 #text/1-->
   object
</div>
<div
  class="a"
  id="b"
>
  1
  <!--M_*3 #text/1-->
   object
</div>
<div
  class="a"
  id="c"
>
  2
  <!--M_*4 #text/1-->
   undefined
</div>
<div
  class="b"
  id="d"
>
  0
  <!--M_*5 #text/1-->
   object
</div>
<div
  class="b"
  id="e"
>
  1
  <!--M_*6 #text/1-->
   object
</div>
<div
  class="b"
  id="f"
>
  2
  <!--M_*7 #text/1-->
   undefined
</div>
<button>
  Increment default
</button>
<!--M_*1 #button/6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, _.d = {
      foo:
      {
        bar: 0
      },
      _: _.a
    }, _.e = {
      foo:
      {},
      _: _.a
    }, _.f = {
      _: _.a
    }, _.g = {
      foo:
      {
        bar: 0
      },
      _: _.a,
      "ClosureSignalIndex:count": 1
    }, _.h = {
      foo:
      {},
      _: _.a,
      "ClosureSignalIndex:count": 1
    }, _.i = {
      _: _.a,
      "ClosureSignalIndex:count": 1
    }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.c.add(_.g), _.c.add(_
      .h), _.c.add(_.i), _.b),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button")?.click();
```
```html
<div
  class="a"
  id="a"
>
  0
  <!--M_*2 #text/1-->
   object
</div>
<div
  class="a"
  id="b"
>
  2
  <!--M_*3 #text/1-->
   object
</div>
<div
  class="a"
  id="c"
>
  3
  <!--M_*4 #text/1-->
   undefined
</div>
<div
  class="b"
  id="d"
>
  0
  <!--M_*5 #text/1-->
   object
</div>
<div
  class="b"
  id="e"
>
  2
  <!--M_*6 #text/1-->
   object
</div>
<div
  class="b"
  id="f"
>
  3
  <!--M_*7 #text/1-->
   undefined
</div>
<button>
  Increment default
</button>
<!--M_*1 #button/6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, _.d = {
      foo:
      {
        bar: 0
      },
      _: _.a
    }, _.e = {
      foo:
      {},
      _: _.a
    }, _.f = {
      _: _.a
    }, _.g = {
      foo:
      {
        bar: 0
      },
      _: _.a,
      "ClosureSignalIndex:count": 1
    }, _.h = {
      foo:
      {},
      _: _.a,
      "ClosureSignalIndex:count": 1
    }, _.i = {
      _: _.a,
      "ClosureSignalIndex:count": 1
    }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.c.add(_.g), _.c.add(_
      .h), _.c.add(_.i), _.b),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div1/#text0 "1" => "2"
UPDATE div2/#text0 "2" => "3"
UPDATE div4/#text0 "1" => "2"
UPDATE div5/#text0 "2" => "3"
```

# Render
```js
container.querySelector("button")?.click();
```
```html
<div
  class="a"
  id="a"
>
  0
  <!--M_*2 #text/1-->
   object
</div>
<div
  class="a"
  id="b"
>
  3
  <!--M_*3 #text/1-->
   object
</div>
<div
  class="a"
  id="c"
>
  4
  <!--M_*4 #text/1-->
   undefined
</div>
<div
  class="b"
  id="d"
>
  0
  <!--M_*5 #text/1-->
   object
</div>
<div
  class="b"
  id="e"
>
  3
  <!--M_*6 #text/1-->
   object
</div>
<div
  class="b"
  id="f"
>
  4
  <!--M_*7 #text/1-->
   undefined
</div>
<button>
  Increment default
</button>
<!--M_*1 #button/6-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0,
      "ClosureScopes:count": _.c = new Set
    }, _.d = {
      foo:
      {
        bar: 0
      },
      _: _.a
    }, _.e = {
      foo:
      {},
      _: _.a
    }, _.f = {
      _: _.a
    }, _.g = {
      foo:
      {
        bar: 0
      },
      _: _.a,
      "ClosureSignalIndex:count": 1
    }, _.h = {
      foo:
      {},
      _: _.a,
      "ClosureSignalIndex:count": 1
    }, _.i = {
      _: _.a,
      "ClosureSignalIndex:count": 1
    }], (_.c).add(_.d), _.c.add(_.e), _.c.add(_.f), _.c.add(_.g), _.c.add(_
      .h), _.c.add(_.i), _.b),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div1/#text0 "2" => "3"
UPDATE div2/#text0 "3" => "4"
UPDATE div4/#text0 "2" => "3"
UPDATE div5/#text0 "3" => "4"
```