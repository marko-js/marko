# Render
```html
<html>
  <head />
  <body>
    <div
      id="el"
    />
    <button>
      Click Me
    </button>
    <!--M_*2 #button/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1,
        {
          "BranchScopes:#button/0":
          {},
          "ConditionalRenderer:#button/0": "__tests__/template.marko_2_content",
          input: _.a = {
            "on-click": _._[
              "__tests__/template.marko_0/onclick"
              ],
            onClick: _._[
              "__tests__/template.marko_0/onClick"
              ],
            content: _.c = {}
          },
          input_onClick: _._[
            "__tests__/template.marko_0/onClick"
            ]
        }], _.a.content = _._[
          "__tests__/template.marko_2_content"
          ](_.c), _.b),
        "__tests__/template.marko_1_input 2 __tests__/template.marko_1_input_onClick 2"
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
    <div
      id="el"
    >
      [onClick(child)][onClick(parent)]
    </div>
    <button>
      Click Me
    </button>
    <!--M_*2 #button/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1,
        {
          "BranchScopes:#button/0":
          {},
          "ConditionalRenderer:#button/0": "__tests__/template.marko_2_content",
          input: _.a = {
            "on-click": _._[
              "__tests__/template.marko_0/onclick"
              ],
            onClick: _._[
              "__tests__/template.marko_0/onClick"
              ],
            content: _.c = {}
          },
          input_onClick: _._[
            "__tests__/template.marko_0/onClick"
            ]
        }], _.a.content = _._[
          "__tests__/template.marko_2_content"
          ](_.c), _.b),
        "__tests__/template.marko_1_input 2 __tests__/template.marko_1_input_onClick 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #text
REMOVE #text in html/body/div
INSERT html/body/div/#text
```