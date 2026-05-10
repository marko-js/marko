import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/sections.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_section = _._serialize_guard($scope0_reason, /* input.section */0),
    $si__input_section = _._serialize_if($scope0_reason, /* input.section */0);
  const $scope0_id = _._scope_id();
  _._for_of(input.section, ({
    content
  }) => {
    const $scope1_id = _._scope_id();
    _._if(() => {
      if (content) {
        const $scope2_id = _._scope_id();
        _._dynamic_tag($scope2_id, "#text/0", content, {}, 0, 0, ($sg__input_section));
        ($si__input_section) && _._scope($scope2_id, {
          _: _._scope_with_id($scope1_id)
        }, "__tests__/tags/sections.marko", "2:4");
        return 0;
      }
    }, $scope1_id, "#text/0", $sg__input_section, $sg__input_section, ($sg__input_section));
    ($si__input_section) && _._scope($scope1_id, {
      content
    }, "__tests__/tags/sections.marko", "1:2", {
      content: "1:8"
    });
  }, 0, $scope0_id, "#text/0", $sg__input_section, $sg__input_section, $sg__input_section);
  $si__input_section && _._scope($scope0_id, {}, "__tests__/tags/sections.marko", 0);
});