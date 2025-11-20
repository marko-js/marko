# Render
```html
<html>
  <head />
  <body>
    <button>
      $0.00
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      $0.00
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          input:
          {
            format: _._[
              "__tests__/template.marko_0/formatNumber"
              ]
          },
          count: 0
        },
        {
          input:
          {
            format: _._[
              "__tests__/template.marko_0/formatNumber2"
              ]
          },
          count: 0
        }]),
        "__tests__/tags/counter.marko_0_count 2 3"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelectorAll("button").forEach(button => button.click());
```
```html
<html>
  <head />
  <body>
    <button>
      $1.00
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      $1.00
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          input:
          {
            format: _._[
              "__tests__/template.marko_0/formatNumber"
              ]
          },
          count: 0
        },
        {
          input:
          {
            format: _._[
              "__tests__/template.marko_0/formatNumber2"
              ]
          },
          count: 0
        }]),
        "__tests__/tags/counter.marko_0_count 2 3"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "$0.00" => "$1.00"
UPDATE html/body/button1/#text "$0.00" => "$1.00"
```