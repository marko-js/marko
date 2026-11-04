// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = ($_) => {};
const $item__script = _script("__tests__/template.marko_0_item#6", ($scope) => {
	_el_read($scope["#output/0"]).textContent = JSON.stringify($scope.item);
	console.log("run", JSON.stringify($scope.item));
});
const $item = /*@__PURE__*/ _const("item", $item__script);
const $input_obj__OR__input_title = /*@__PURE__*/ _or(5, ($scope) => $item($scope, $scope.input_obj ?? { t: $scope.input_title }));
const $input_obj = /*@__PURE__*/ _const("input_obj", $input_obj__OR__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_obj__OR__input_title);
const $input = ($scope, input) => {
	$input_obj($scope, input.obj);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
