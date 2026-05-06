# Render
```html
<div>
  <!--M_[-->
  Got: a 
  <!---->
  0
  <!--M_*2 #text/1-->
  <!--M_]1 #text/0 2-->
  <script>
    WALKER_RUNTIME("M")("_");
    M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      "ClosureScopes:count": new Set
    }]), _ =&gt; (_.c = [_.e = {
      _: _.b = _.a[1]
    }], (_.d = _.b["ClosureScopes:count"]).add(_.e), _.c)];
    M._.w()
  </script>
</div>
```


# Write
```html
  <script>M._.r.push(_=>(_.f=[_.g={_:_.b,"ClosureSignalIndex:count":2}],_.d.add(_.g),_.f));M._.w()</script>
```

# Render FLUSH
```html
<div>
  <!--M_[-->
  Got: a 
  <!---->
  0
  <!--M_*2 #text/1-->
  <!--M_]1 #text/0 2-->
  <script>
    WALKER_RUNTIME("M")("_");
    M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      "ClosureScopes:count": new Set
    }]), _ =&gt; (_.c = [_.e = {
      _: _.b = _.a[1]
    }], (_.d = _.b["ClosureScopes:count"]).add(_.e), _.c)];
    M._.w()
  </script>
  <script>
    M._.r.push(_ =&gt; (_.f = [_.g = {
      _: _.b,
      "ClosureSignalIndex:count": 2
    }], _.d.add(_.g), _.f));
    M._.w()
  </script>
</div>
```

# Mutations
```
INSERT div/script1
```

# Write
```html
  <!--M_[-->Got: b <!>0<!--M_*4 #text/1--><!--M_]1 #text/1 4--><!--M_[-->Got: c <!>0<!--M_*3 #text/1--><!--M_]1 #text/2 3--><button>Inc</button><!--M_*1 #button/3--></div><script>M._.r.push(_=>(_.h=[_.i={_:_.b,"ClosureSignalIndex:count":1}],_.d.add(_.i),_.h),"__tests__/template.marko_0_count 1");M._.w()</script>
```

# Render FLUSH
```html
<div>
  <!--M_[-->
  Got: a 
  <!---->
  0
  <!--M_*2 #text/1-->
  <!--M_]1 #text/0 2-->
  <script>
    WALKER_RUNTIME("M")("_");
    M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      "ClosureScopes:count": new Set
    }]), _ =&gt; (_.c = [_.e = {
      _: _.b = _.a[1]
    }], (_.d = _.b["ClosureScopes:count"]).add(_.e), _.c)];
    M._.w()
  </script>
  <script>
    M._.r.push(_ =&gt; (_.f = [_.g = {
      _: _.b,
      "ClosureSignalIndex:count": 2
    }], _.d.add(_.g), _.f));
    M._.w()
  </script>
  <!--M_[-->
  Got: b 
  <!---->
  0
  <!--M_*4 #text/1-->
  <!--M_]1 #text/1 4-->
  <!--M_[-->
  Got: c 
  <!---->
  0
  <!--M_*3 #text/1-->
  <!--M_]1 #text/2 3-->
  <button>
    Inc
  </button>
  <!--M_*1 #button/3-->
</div>
<script>
  M._.r.push(_ =&gt; (_.h = [_.i = {
      _: _.b,
      "ClosureSignalIndex:count": 1
    }], _.d.add(_.i), _.h),
    "__tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
INSERT div/#comment4
INSERT div/#text2
INSERT div/#comment5
INSERT div/#text3
INSERT div/#comment6
INSERT div/#comment7
INSERT div/#comment8
INSERT div/#text4
INSERT div/#comment9
INSERT div/#text5
INSERT div/#comment10
INSERT div/#comment11
INSERT div/button
INSERT div/button/#text
INSERT div/#comment12
INSERT script
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_[-->
  Got: a 
  <!---->
  1
  <!--M_*2 #text/1-->
  <!--M_]1 #text/0 2-->
  <script>
    WALKER_RUNTIME("M")("_");
    M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      "ClosureScopes:count": new Set
    }]), _ =&gt; (_.c = [_.e = {
      _: _.b = _.a[1]
    }], (_.d = _.b["ClosureScopes:count"]).add(_.e), _.c)];
    M._.w()
  </script>
  <script>
    M._.r.push(_ =&gt; (_.f = [_.g = {
      _: _.b,
      "ClosureSignalIndex:count": 2
    }], _.d.add(_.g), _.f));
    M._.w()
  </script>
  <!--M_[-->
  Got: b 
  <!---->
  1
  <!--M_*4 #text/1-->
  <!--M_]1 #text/1 4-->
  <!--M_[-->
  Got: c 
  <!---->
  1
  <!--M_*3 #text/1-->
  <!--M_]1 #text/2 3-->
  <button>
    Inc
  </button>
  <!--M_*1 #button/3-->
</div>
<script>
  M._.r.push(_ =&gt; (_.h = [_.i = {
      _: _.b,
      "ClosureSignalIndex:count": 1
    }], _.d.add(_.i), _.h),
    "__tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text1 "0" => "1"
UPDATE div/#text5 "0" => "1"
UPDATE div/#text3 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_[-->
  Got: a 
  <!---->
  2
  <!--M_*2 #text/1-->
  <!--M_]1 #text/0 2-->
  <script>
    WALKER_RUNTIME("M")("_");
    M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      "ClosureScopes:count": new Set
    }]), _ =&gt; (_.c = [_.e = {
      _: _.b = _.a[1]
    }], (_.d = _.b["ClosureScopes:count"]).add(_.e), _.c)];
    M._.w()
  </script>
  <script>
    M._.r.push(_ =&gt; (_.f = [_.g = {
      _: _.b,
      "ClosureSignalIndex:count": 2
    }], _.d.add(_.g), _.f));
    M._.w()
  </script>
  <!--M_[-->
  Got: b 
  <!---->
  2
  <!--M_*4 #text/1-->
  <!--M_]1 #text/1 4-->
  <!--M_[-->
  Got: c 
  <!---->
  2
  <!--M_*3 #text/1-->
  <!--M_]1 #text/2 3-->
  <button>
    Inc
  </button>
  <!--M_*1 #button/3-->
</div>
<script>
  M._.r.push(_ =&gt; (_.h = [_.i = {
      _: _.b,
      "ClosureSignalIndex:count": 1
    }], _.d.add(_.i), _.h),
    "__tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text1 "1" => "2"
UPDATE div/#text5 "1" => "2"
UPDATE div/#text3 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_[-->
  Got: a 
  <!---->
  3
  <!--M_*2 #text/1-->
  <!--M_]1 #text/0 2-->
  <script>
    WALKER_RUNTIME("M")("_");
    M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      "ClosureScopes:count": new Set
    }]), _ =&gt; (_.c = [_.e = {
      _: _.b = _.a[1]
    }], (_.d = _.b["ClosureScopes:count"]).add(_.e), _.c)];
    M._.w()
  </script>
  <script>
    M._.r.push(_ =&gt; (_.f = [_.g = {
      _: _.b,
      "ClosureSignalIndex:count": 2
    }], _.d.add(_.g), _.f));
    M._.w()
  </script>
  <!--M_[-->
  Got: b 
  <!---->
  3
  <!--M_*4 #text/1-->
  <!--M_]1 #text/1 4-->
  <!--M_[-->
  Got: c 
  <!---->
  3
  <!--M_*3 #text/1-->
  <!--M_]1 #text/2 3-->
  <button>
    Inc
  </button>
  <!--M_*1 #button/3-->
</div>
<script>
  M._.r.push(_ =&gt; (_.h = [_.i = {
      _: _.b,
      "ClosureSignalIndex:count": 1
    }], _.d.add(_.i), _.h),
    "__tests__/template.marko_0_count 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text1 "2" => "3"
UPDATE div/#text5 "2" => "3"
UPDATE div/#text3 "2" => "3"
```