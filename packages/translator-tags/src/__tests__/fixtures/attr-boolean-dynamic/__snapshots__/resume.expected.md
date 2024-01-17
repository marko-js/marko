# Render {}
```html
<html>
  <head />
  <body>
    <input
      disabled=""
    />
    <!--M*0 #input/0-->
    <button>
      enable
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{disabled:!0}}),[0,"packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",])
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
    <!--M*0 #input/0-->
    <button>
      disable
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{disabled:!0}}),[0,"packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",])
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
    <!--M*0 #input/0-->
    <button>
      enable
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{disabled:!0}}),[0,"packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",])
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
    <!--M*0 #input/0-->
    <button>
      disable
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{disabled:!0}}),[0,"packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/input0: attr(disabled) "" => null
#document/html0/body1/button2/#text0: "enable" => "disable"
```