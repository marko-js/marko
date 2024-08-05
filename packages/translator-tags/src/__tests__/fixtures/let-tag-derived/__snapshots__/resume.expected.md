# Render {"a":2}
```html
<html>
  <head />
  <body>
    <button>
      Increment
    </button>
    <!--M_*0 #button/0-->
    2
    <!--M_*0 #text/1-->
     
    <!---->
    4
    <!--M_*0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{b:4}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko_0_b"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Increment
    </button>
    <!--M_*0 #button/0-->
    2
    <!--M_*0 #text/1-->
     
    <!---->
    5
    <!--M_*0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{b:4}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko_0_b"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text6: "4" => "5"
```