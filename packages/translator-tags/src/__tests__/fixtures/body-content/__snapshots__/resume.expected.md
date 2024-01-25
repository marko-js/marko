# Render {}
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M*2 #text/0-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:h={clickCount:0},1:{onClick:b("clickHandler",h)},2:{_:h},$global:{}}),[2,"subscribe_clickCount$renderBody",1,"FancyButton$onclick_effect",])
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
      <!--M*2 #text/0-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:h={clickCount:0},1:{onClick:b("clickHandler",h)},2:{_:h},$global:{}}),[2,"subscribe_clickCount$renderBody",1,"FancyButton$onclick_effect",])
    </script>
  </body>
</html>
```

# Mutations
```
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
      <!--M*2 #text/0-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:h={clickCount:0},1:{onClick:b("clickHandler",h)},2:{_:h},$global:{}}),[2,"subscribe_clickCount$renderBody",1,"FancyButton$onclick_effect",])
    </script>
  </body>
</html>
```

# Mutations
```
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
      <!--M*2 #text/0-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:h={clickCount:0},1:{onClick:b("clickHandler",h)},2:{_:h},$global:{}}),[2,"subscribe_clickCount$renderBody",1,"FancyButton$onclick_effect",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
```