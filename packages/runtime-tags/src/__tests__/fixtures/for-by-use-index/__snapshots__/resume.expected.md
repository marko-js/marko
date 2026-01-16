# Render
```html
<html>
  <head />
  <body>
    <div>
      <button>
        hello
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
      <!--M_}1 #div/0 2-->
    </div>
    <!--M_|1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          messages: ["hello"]
        },
        {
          index: 0,
          _: _.a,
          "#LoopKey": "hello"
        }]),
        "__tests__/template.marko_1_messages_index 2"
      ];
      M._.w()
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
    <div>
      <!--M_*2 #button/0-->
      <!--M_}1 #div/0 2-->
    </div>
    <div>
      0
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          messages: ["hello"]
        },
        {
          index: 0,
          _: _.a,
          "#LoopKey": "hello"
        }]),
        "__tests__/template.marko_1_messages_index 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE button before html/body/div0/#comment0
INSERT html/body/div1
REMOVE #comment after html/body/div1
UPDATE html/body/div1/#text " " => "0"
```