// template.marko
const $template = "<style></style>";
const $walks = " b";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#style/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	_text_content($scope["#style/0"], `
  .test {
    content: ${_to_text($scope.count)}
  }
`);
	$count__script($scope);
});
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
