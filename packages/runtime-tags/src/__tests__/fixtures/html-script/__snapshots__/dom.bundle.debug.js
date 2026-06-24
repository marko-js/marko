// template.marko
const $template = "<script type=importmap><\/script><div> </div>";
const $walks = " bD l";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#script/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	_text_content($scope["#script/0"], `
  {
    "imports": {
      "${_to_text($scope.count)}": "https://markojs.com",
    }
  }
`);
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	_attr_nonce($scope, "#script/0");
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
