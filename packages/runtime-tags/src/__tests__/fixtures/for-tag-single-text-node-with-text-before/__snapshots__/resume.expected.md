# Render
```html
<html>
  <head />
  <body>
    <div
      data-children="1"
    >
      Before 
      <!--M_[-->
      Child
      <!--M_]1 #text/1 2-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          children: [1]
        },
        {}]),
        "__tests__/template.marko_0_children 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text2
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    <div
      data-children="2"
    >
      Before 
      <!--M_[-->
      ChildChild
      <!--M_]1 #text/1 2-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          children: [1]
        },
        {}]),
        "__tests__/template.marko_0_children 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[data-children] "1" => "2"
INSERT html/body/div/#text3
```