import * as _$ from "@marko/runtime-tags/debug/html";
const $content = (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $input_level_closures = new Set();
  _$.resumeSingleNodeConditional(() => {
    if (input.level) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<div${_$.attr("data-level", input.level)}>`);
      _$.tryContent($scope1_id, "#text/1", _$.registerContent("__tests__/tags/recurse.marko_2_renderer", () => {
        const $scope2_id = _$.nextScopeId();
        _$.fork($scope2_id, "#text/0", new Promise(setImmediate), () => {
          const $scope3_id = _$.nextScopeId();
          const $childScope = _$.peekNextScopeId();
          $content({
            level: input.level - 1
          });
          _$.writeSubscribe($input_level_closures, _$.writeScope($scope3_id, {
            "#childScope/0": _$.serializeIf($serialize, 0) && _$.writeExistingScope($childScope),
            _: _$.ensureScopeWithId($scope2_id),
            "ClosureSignalIndex:input_level": _$.serializeIf($serialize, 0) && 0
          }, "__tests__/tags/recurse.marko", "5:7"));
          _$.resumeClosestBranch($scope3_id);
        });
        _$.writeScope($scope2_id, {
          _: _$.ensureScopeWithId($scope1_id)
        }, "__tests__/tags/recurse.marko", "3:5");
      }, $scope1_id), {
        placeholder: _$.attrTag({
          content: _$.registerContent("__tests__/tags/recurse.marko_4_renderer", () => {
            const $scope4_id = _$.nextScopeId();
            _$.write("LOADING...");
          }, $scope1_id)
        })
      });
      _$.write(`</div>${_$.markResumeNode($scope1_id, "#div/0", _$.serializeGuard($serialize, 0))}`);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/tags/recurse.marko", "1:1");
      return 0;
    }
  }, $scope0_id, "#text/0", _$.serializeGuard($serialize, 0), _$.serializeGuard($serialize, 0));
  _$.writeScope($scope0_id, {
    input_level: input.level,
    "ClosureScopes:input_level": _$.serializeIf($serialize, 0) && $input_level_closures
  }, "__tests__/tags/recurse.marko", 0, {
    input_level: ["input.level"]
  });
};
export default _$.createTemplate("__tests__/tags/recurse.marko", $content);