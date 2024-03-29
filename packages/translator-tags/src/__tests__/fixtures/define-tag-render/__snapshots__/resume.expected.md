# Render {}
```html
<html>
  <head />
  <body>
    <!--M[1-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M*1 #text/0-->
       
      <!---->
      1
      <!--M*1 #text/1-->
    </div>
    <button>
      1
      <!--M*1 #text/3-->
    </button>
    <!--M*1 #button/2-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{"#text/0!":h={y:1},"#text/0(":{}},1:h}),[1,"packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_y",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment0 before #document/html0
inserted #document/html0/body1/#comment0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M*1 #text/0-->
       
      <!---->
      2
      <!--M*1 #text/1-->
    </div>
    <button>
      2
      <!--M*1 #text/3-->
    </button>
    <!--M*1 #button/2-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{"#text/0!":h={y:1},"#text/0(":{}},1:h}),[1,"packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_y",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div1/#text6: "1" => "2"
#document/html0/body1/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M*1 #text/0-->
       
      <!---->
      3
      <!--M*1 #text/1-->
    </div>
    <button>
      3
      <!--M*1 #text/3-->
    </button>
    <!--M*1 #button/2-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{"#text/0!":h={y:1},"#text/0(":{}},1:h}),[1,"packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_y",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div1/#text6: "2" => "3"
#document/html0/body1/button2/#text0: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M*1 #text/0-->
       
      <!---->
      4
      <!--M*1 #text/1-->
    </div>
    <button>
      4
      <!--M*1 #text/3-->
    </button>
    <!--M*1 #button/2-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{"#text/0!":h={y:1},"#text/0(":{}},1:h}),[1,"packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_y",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div1/#text6: "3" => "4"
#document/html0/body1/button2/#text0: "3" => "4"
```