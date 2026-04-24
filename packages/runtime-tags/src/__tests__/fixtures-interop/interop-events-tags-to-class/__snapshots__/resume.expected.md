# Render
```html
<button
  id="class-api"
>
  0
</button>
<div
  id="tags-api"
>
  0
  <!--M_*1 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
  {},
  {
    m5c: "_0",
    m5i:
    {}
  }]), _ =&gt; (_.c = [-2, _.b = _.a[1]])];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "e": [
          ["count", [
            "__tests__/template.marko_0/onCount",
            1
          ]]
        ],
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
INSERT #text0
INSERT #text1
REMOVE #comment before #text0
REMOVE #comment after #text1
```

# Render
```js
container.querySelector("#class-api").click();
```
```html
<button
  id="class-api"
>
  1
</button>
<div
  id="tags-api"
>
  1
  <!--M_*1 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
  {},
  {
    m5c: "_0",
    m5i:
    {}
  }]), _ =&gt; (_.c = [-2, _.b = _.a[1]])];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "e": [
          ["count", [
            "__tests__/template.marko_0/onCount",
            1
          ]]
        ],
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "0" => "1"
UPDATE button/#text "0" => "1"
```

# Render
```js
container.querySelector("#class-api").click();
```
```html
<button
  id="class-api"
>
  2
</button>
<div
  id="tags-api"
>
  2
  <!--M_*1 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
  {},
  {
    m5c: "_0",
    m5i:
    {}
  }]), _ =&gt; (_.c = [-2, _.b = _.a[1]])];
  M._.w();
  $MC = (window.$MC || []).concat(
  {
    "p": "_",
    "w": [
      ["_0", 0, 2,
      {
        "e": [
          ["count", [
            "__tests__/template.marko_0/onCount",
            1
          ]]
        ],
        "f": 1
      }]
    ],
    "t": [
      "__tests__/components/class-counter.marko"
    ]
  });
  M._.r.push("$compat_setScope 2");
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "1" => "2"
UPDATE button/#text "1" => "2"
```