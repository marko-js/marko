# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={value:1},{_:_.a}])]</script>
```

# Write
```html
  <span>Hello</span><span>1<!--M_*2 #text/0--></span><!--M_|1 #text/3 2--><script>M._.r.push("__tests__/template.marko_0_value 1");M._.w()</script>
```

# Render ASYNC
```html
<html>
  <head />
  <body>
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
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment
INSERT html/body/script
```

# Render End
```html
<html>
  <head />
  <body>
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
  </body>
</html>
```

# Mutations
```
INSERT html/body/span0
INSERT html/body/span0/#text
INSERT html/body/span1
INSERT html/body/span1/#text
INSERT html/body/span1/#comment
INSERT html/body/#comment1
INSERT html/body/script1
```