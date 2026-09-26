// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $catch_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "caught <!>", "b%"), { label($scope) {
	_text($scope["#text/0"], $scope.label);
} });
_resumed["__tests__/template.marko_2*content"] = $catch_content;
const $try = /*@__PURE__*/ _try("#text/2", "static body");
const $clicks = /*@__PURE__*/ _let("clicks/3", ($scope) => {
	_text($scope["#text/1"], $scope.clicks);
	let $catch;
	forOf([`update ${$scope.clicks}`], (label) => {
		$catch = attrTags($catch, { content: $catch_content($scope, { label }) });
	});
	$try($scope, { catch: $catch });
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
