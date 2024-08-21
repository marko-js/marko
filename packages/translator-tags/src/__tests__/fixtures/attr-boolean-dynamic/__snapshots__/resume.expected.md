# Render {}
```html
<html>
  <head />
  <body>
    <input
      disabled=""
    />
    <!--M_*0 #input/0-->
    <button>
      enable
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",0];M._.w()
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
    <input />
    <!--M_*0 #input/0-->
    <button>
      disable
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/input0: attr(disabled) "" => null
#document/html0/body1/button2/#text0: "enable" => "disable"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <input
      disabled=""
    />
    <!--M_*0 #input/0-->
    <button>
      enable
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/input0: attr(disabled) null => ""
#document/html0/body1/button2/#text0: "disable" => "enable"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <input />
    <!--M_*0 #input/0-->
    <button>
      disable
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"packages/translator-tags/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/input0: attr(disabled) "" => null
#document/html0/body1/button2/#text0: "enable" => "disable"
```