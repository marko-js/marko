# Render {}
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M*0 #text/1-->
       was 
      <!---->
      ‍
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{clickCount:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount",])
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
      1
      <!--M*0 #text/1-->
       was 
      <!---->
      0
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{clickCount:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text4: "‍" => "0"
#document/html0/body1/button0/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      2
      <!--M*0 #text/1-->
       was 
      <!---->
      1
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{clickCount:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text4: "0" => "1"
#document/html0/body1/button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      3
      <!--M*0 #text/1-->
       was 
      <!---->
      2
      <!--M*0 #text/2-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{clickCount:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text4: "1" => "2"
#document/html0/body1/button0/#text0: "2" => "3"
```