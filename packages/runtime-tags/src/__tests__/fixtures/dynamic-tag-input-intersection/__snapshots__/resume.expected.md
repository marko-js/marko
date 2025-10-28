# Render
```html
<html>
  <head />
  <body>
    <div
      class="foo"
    >
      <!--M_[-->
      default
      <!--M_]3 #div/0 4-->
    </div>
    <!--M_'2 #text/0 3-->
    <span
      class="foo"
    >
      <!--M_[-->
      default
      <!--M_]6 #span/0 7-->
    </span>
    <!--M_'5 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.g = [0, 1, _.a = {
          "ConditionalScope:#text/0": _.b = {
            "ConditionalScope:#div/0": _.c = {},
            "ConditionalRenderer:#div/0": "__tests__/tags/my-tag.marko_1_content"
          },
          "ConditionalRenderer:#text/0": "div",
          inputContent: _.h = {},
          htmlInput:
          {}
        }, _.b, _.c, _.d = {
          "ConditionalScope:#text/0": _.e = {
            "ConditionalScope:#span/0": _.f = {},
            "ConditionalRenderer:#span/0": "__tests__/tags/my-tag.marko_1_content"
          },
          "ConditionalRenderer:#text/0": "span",
          inputAs: "span",
          htmlInput:
          {}
        }, _.e, _.f], _.a.inputContent = _._[
          "__tests__/template.marko_1_content"
          ](_.h), _.d.inputContent = _._[
          "__tests__/template.marko_2_content"
          ](_.h), _.g),
        "__tests__/tags/my-tag.marko_0_inputContent",
        2, 5
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text1
INSERT html/body/span/#text1
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    <div
      class="foo"
    >
      Div
    </div>
    <!--M_'2 #text/0 3-->
    <span
      class="foo"
    >
      Span
    </span>
    <!--M_'5 #text/0 6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.g = [0, 1, _.a = {
          "ConditionalScope:#text/0": _.b = {
            "ConditionalScope:#div/0": _.c = {},
            "ConditionalRenderer:#div/0": "__tests__/tags/my-tag.marko_1_content"
          },
          "ConditionalRenderer:#text/0": "div",
          inputContent: _.h = {},
          htmlInput:
          {}
        }, _.b, _.c, _.d = {
          "ConditionalScope:#text/0": _.e = {
            "ConditionalScope:#span/0": _.f = {},
            "ConditionalRenderer:#span/0": "__tests__/tags/my-tag.marko_1_content"
          },
          "ConditionalRenderer:#text/0": "span",
          inputAs: "span",
          htmlInput:
          {}
        }, _.e, _.f], _.a.inputContent = _._[
          "__tests__/template.marko_1_content"
          ](_.h), _.d.inputContent = _._[
          "__tests__/template.marko_2_content"
          ](_.h), _.g),
        "__tests__/tags/my-tag.marko_0_inputContent",
        2, 5
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #comment, #text, #text, #comment in html/body/div
INSERT html/body/div/#text
REMOVE #comment, #text, #text, #comment in html/body/span
INSERT html/body/span/#text
```