// template.marko
const $template = "<ul><!></ul>";
const $walks = "D%l";
const $setup = () => {};
async function* stream(items) {
	let tick = 0;
	for (const item of items) {
		yield resolveAfter(item, ++tick);
	}
}
const $forawait_content__item_id = ($scope, item_id) => _attr($scope["#li/0"], "id", item_id);
const $forawait_content__item_label = ($scope, item_label) => _text($scope["#text/1"], item_label);
const $forawait_content__$params = ($scope, $params2) => {
	$forawait_content__item_id($scope, $params2[0]?.id);
	$forawait_content__item_label($scope, $params2[0]?.label);
};
const $for_await = /*@__PURE__*/ _for_await("#text/0", "<li> </li>", " D ", 0, $forawait_content__$params);
const $input_items = ($scope, input_items) => $for_await($scope, [stream(input_items), "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
