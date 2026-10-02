// template.marko
const $template = "<span> </span><!><!>";
const $walks = "D l%c";
const $setup = () => {};
function makeHandler() {
	return () => {};
}
const $for_content__item = ($scope, item) => {
	$for_content__item_name($scope, item?.name);
	item.make();
};
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $input_y = ($scope, input_y) => makeHandler();
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<span> </span>", "D ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_y($scope, input.y);
	$input_label($scope, input.label);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
