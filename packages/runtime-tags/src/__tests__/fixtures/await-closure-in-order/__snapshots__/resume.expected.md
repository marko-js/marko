# Render
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    value: 1
  },
  {
    _: _.a
  }])]
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    value: 1
  },
  {
    _: _.a
  }])]
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    value: 1
  },
  {
    _: _.a
  }])]
</script>
```


# Render FLUSH
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    value: 1
  },
  {
    _: _.a
  }])]
</script>
<span>
  Hello
</span>
<span>
  1
  <!--M_*2 #text/0-->
</span>
<!--M_|1 #text/3 2-->
<script>
  M._.r.push(
    "__tests__/template.marko_0_value 1"
    );
  M._.w()
</script>
```

# Mutations
```
INSERT span0
INSERT span0/#text
INSERT span1
INSERT span1/#text
INSERT span1/#comment
INSERT #comment1
INSERT script1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    value: 1
  },
  {
    _: _.a
  }])]
</script>
<span>
  Hello
</span>
<span>
  2
</span>
<!--M_|1 #text/3 2-->
<script>
  M._.r.push(
    "__tests__/template.marko_0_value 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1" => "2"
INSERT span1
REMOVE span after span1
UPDATE span1/#text " " => "2"
```