// template.marko
const $template = "<a>x</a><img>";
const $walks = " b b";
const $setup = ($_) => {};
const $input_url__OR__input_title__OR__input_cls__script = _script("__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6", ($scope) => _attrs_script($scope, "#a/0"));
const $input_url__OR__input_title__OR__input_cls = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_input_url#4_input_title#5_input_cls#6/init", 7, ($scope) => {
	$input_url__OR__input_title__OR__input_cls__script($scope);
	_attrs($scope, "#a/0", {
		href: $scope.input_url,
		title: $scope.input_title,
		class: $scope.input_cls
	});
}, 2);
const $input_url__OR__input_width = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_input_url#4_input_width#8/init", 9, ($scope) => _attr($scope["#img/1"], "src", `${$scope.input_url}?w=${$scope.input_width}`));
const $input_url = /*@__PURE__*/ _const("input_url", ($scope) => {
	$input_url__OR__input_title__OR__input_cls($scope);
	$input_url__OR__input_width($scope);
});
const $input_title = /*@__PURE__*/ _const("input_title", $input_url__OR__input_title__OR__input_cls);
const $input_cls = /*@__PURE__*/ _const("input_cls", $input_url__OR__input_title__OR__input_cls);
const $input_width = /*@__PURE__*/ _const("input_width", $input_url__OR__input_width);
const $input = ($scope, input) => {
	$input_url($scope, input.url);
	$input_title($scope, input.title);
	$input_cls($scope, input.cls);
	$input_width($scope, input.width);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
