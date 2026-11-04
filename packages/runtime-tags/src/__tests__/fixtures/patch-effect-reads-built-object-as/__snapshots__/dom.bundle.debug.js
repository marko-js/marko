// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = ($_) => {};
const $item__script = _script("__tests__/template.marko_0_item#4", ($scope) => {
	_el_read($scope["#output/0"]).textContent = JSON.stringify($scope.item);
	console.log("run", JSON.stringify($scope.item));
});
const $item = /*@__PURE__*/ _const("item", $item__script);
const $input_title = ($scope, input_title) => $item($scope, { t: input_title });
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
