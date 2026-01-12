# Render
```html
<html>
  <head />
  <body>
    <select
      class="foo"
    >
      <option
        selected=""
        value="1"
      >
        One
      </option>
      <!--M_*4 #option/0-->
      <option
        value="2"
      >
        Two
      </option>
      <!--M_*6 #option/0-->
      <option
        value="3"
      >
        Three
      </option>
      <!--M_*8 #option/0-->
    </select>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, 3,
        {
          "BranchScopes:#option/0":
          {},
          "ConditionalRenderer:#option/0": "__tests__/template.marko_4_content",
          option: _.a = {
            value: 1,
            content: _.f = {},
            *[(_.b = [, _.c = {
              value: 2
            }, _.d = {
              value: 3
            }], Symbol.iterator)]()
            {
              yield* _.b
            }
          }
        }, 1,
        {
          "BranchScopes:#option/0":
          {},
          "ConditionalRenderer:#option/0": "__tests__/template.marko_5_content",
          option: _.c
        }, 1,
        {
          "BranchScopes:#option/0":
          {},
          "ConditionalRenderer:#option/0": "__tests__/template.marko_6_content",
          option: _.d
        }], _.b[0] = _.a, _.a.content = _._[
          "__tests__/template.marko_4_content"
          ](_.f), _.c.content = _._[
          "__tests__/template.marko_5_content"
          ](_.f), _.d.content = _._[
          "__tests__/template.marko_6_content"
          ](_.f), _.e),
        "__tests__/template.marko_3_option 4 6 8"
      ];
      M._.w()
    </script>
  </body>
</html>
```
