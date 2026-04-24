# Render
```html
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
  M._.r = [_ =&gt; (_.h = [0, 3,
    {
      "BranchScopes:#option/0": _.e = {},
      "ConditionalRenderer:#option/0": "__tests__/template.marko_1_content",
      option: _.a = {
        value: 1,
        content: _.i = {},
        *[(_.b = [, _.c = {
          value: 2
        }, _.d = {
          value: 3
        }], Symbol.iterator)]()
        {
          yield* _.b
        }
      }
    }, _.e,
    {
      "BranchScopes:#option/0": _.f = {},
      "ConditionalRenderer:#option/0": "__tests__/template.marko_2_content",
      option: _.c
    }, _.f,
    {
      "BranchScopes:#option/0": _.g = {},
      "ConditionalRenderer:#option/0": "__tests__/template.marko_3_content",
      option: _.d
    }, _.g], _.b[0] = _.a, _.a.content = _._[
      "__tests__/template.marko_1_content"
      ](_.i), _.c.content = _._[
      "__tests__/template.marko_2_content"
      ](_.i), _.d.content = _._[
      "__tests__/template.marko_3_content"
      ](_.i), _.h),
    "__tests__/tags/child.marko_1_option 4 6 8"
  ];
  M._.w()
</script>
```
