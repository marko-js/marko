# Render
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"__tests__/template.marko_0_disabled",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"__tests__/template.marko_0_disabled",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/input[disabled] "" => null
UPDATE html/body/button/#text "enable" => "disable"
```

# Render
```js
container.querySelector("button").click();
```
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"__tests__/template.marko_0_disabled",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/input[disabled] null => ""
UPDATE html/body/button/#text "disable" => "enable"
```

# Render
```js
container.querySelector("button").click();
```
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{disabled:!0}}),0,"__tests__/template.marko_0_disabled",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/input[disabled] "" => null
UPDATE html/body/button/#text "enable" => "disable"
```