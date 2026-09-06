// template.marko
const $template = "<main><a> </a><!><button> </button></main>";
const $walks = "D D l%b D m";
const $if_content__input_img__script = _script("__tests__/template.marko_1_input_img#10", ($scope) => _attrs_script($scope, "#img/0"));
const $if_content__input_img = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	_attrs($scope, "#img/0", {
		alt: "hero",
		...$scope._.input_img
	});
	$if_content__input_img__script($scope);
});
const $if_content__setup = $if_content__input_img;
const $count = /*@__PURE__*/ _let("count/11", ($scope) => _text($scope["#text/4"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#7", ($scope) => _attrs_script($scope, "#a/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#a/0", {
		href: "/static",
		...$scope.input_attrs
	});
	$input_attrs__script($scope);
});
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $if = /*@__PURE__*/ _if("#text/2", "<img>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
	$input_img($scope, input.img);
};
const $input_img = /*@__PURE__*/ _const("input_img", $if_content__input_img);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
