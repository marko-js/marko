import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $counts__closures = new Set();
  let counts = [0, 0, 0];
  _._for_of(counts, (count, i) => {
    const $scope1_id = _._scope_id();
    let editing = false;
    _._if(() => {
      if (editing) {
        const $scope2_id = _._scope_id();
        _._html(`<button>Confirm <!>${_._escape(count + 1)}${_._el_resume($scope2_id, "#text/1")}</button>${_._el_resume($scope2_id, "#button/0")}`);
        _._script($scope2_id, "__tests__/template.marko_2_counts_count");
        _._subscribe($counts__closures, _._scope($scope2_id, {
          _: _._scope_with_id($scope1_id),
          "ClosureSignalIndex:counts": 0
        }, "__tests__/template.marko", "4:4"));
        return 0;
      } else {
        const $scope3_id = _._scope_id();
        _._html(`<button>Increment <!>${_._escape(count)}${_._el_resume($scope3_id, "#text/1")}</button>${_._el_resume($scope3_id, "#button/0")}`);
        _._script($scope3_id, "__tests__/template.marko_3");
        _._scope($scope3_id, {
          _: _._scope_with_id($scope1_id)
        }, "__tests__/template.marko", "12:4");
        return 1;
      }
    }, $scope1_id, "#text/0", 1, /* editing */1, /* editing */1, 0, 1);
    _._scope($scope1_id, {
      count,
      "#LoopKey": i,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "2:2", {
      count: "2:6",
      "#LoopKey": "2:13"
    });
  }, 0, $scope0_id, "#text/0");
  _._scope($scope0_id, {
    counts,
    "ClosureScopes:counts": $counts__closures
  }, "__tests__/template.marko", 0, {
    counts: "1:6"
  });
  _._resume_branch($scope0_id);
});