# Render {}
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*0 #div/0-->
    <div />
    <!--M_*0 #div/1-->
    <button>
      Click
    </button>
    <!--M_*0 #button/2-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[0,"__tests__/template.marko_0",0];M._.w()
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
    <div
      class="baz"
    />
    <!--M_*0 #div/0-->
    <div
      class="baz"
    />
    <!--M_*0 #div/1-->
    <button>
      Click
    </button>
    <!--M_*0 #button/2-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0: attr(class) null => "baz"
#document/html0/body1/div2: attr(class) null => "baz"
```