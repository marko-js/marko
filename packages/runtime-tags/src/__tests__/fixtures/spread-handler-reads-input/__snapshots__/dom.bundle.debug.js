// template.marko
const $template = "<p> </p><div></div><!><button> </button>";
const $walks = "D l b%b D l";
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/2", "<em> </em>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	_text($scope["#text/4"], $scope.count);
	$if($scope, $scope.count ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $attrs2__script = _script("__tests__/template.marko_0_attrs#9", ($scope) => _attrs_script($scope, "#div/1"));
const $attrs2 = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_content($scope, "#div/1", $scope.attrs);
	$attrs2__script($scope);
});
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/0"], $scope.input_label);
	$attrs2($scope, {
		title: $scope.input_label,
		onClick: $attrs($scope)
	});
	$if_content__input_label($scope);
});
const $input = ($scope, input) => $input_label($scope, input.label);
const $attrs = ($scope) => function() {
	console.log("clicked " + $scope.input_label);
};
_resumed["__tests__/template.marko_0/attrs"] = $attrs;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
