# Render
```html
<html>
  <head>
    <script
      type="importmap"
    >
      
  {
    "imports": {
      "0": "https://markojs.com",
    }
  }

    </script>
    <!--M_*1 #script/0-->
  </head>
  <body>
    <div>
      0
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("script").click();
```
```html
<html>
  <head>
    <script
      type="importmap"
    >
      
  {
    "imports": {
      "1": "https://markojs.com",
    }
  }

    </script>
    <!--M_*1 #script/0-->
  </head>
  <body>
    <div>
      1
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/head/script
INSERT html/head/script/#text
UPDATE html/body/div/#text "0" => "1"
```

# Render
```js
container.querySelector("script").click();
```
```html
<html>
  <head>
    <script
      type="importmap"
    >
      
  {
    "imports": {
      "2": "https://markojs.com",
    }
  }

    </script>
    <!--M_*1 #script/0-->
  </head>
  <body>
    <div>
      2
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/head/script
INSERT html/head/script/#text
UPDATE html/body/div/#text "1" => "2"
```

# Render
```js
container.querySelector("script").click();
```
```html
<html>
  <head>
    <script
      type="importmap"
    >
      
  {
    "imports": {
      "3": "https://markojs.com",
    }
  }

    </script>
    <!--M_*1 #script/0-->
  </head>
  <body>
    <div>
      3
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{count:0}}),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/head/script
INSERT html/head/script/#text
UPDATE html/body/div/#text "2" => "3"
```