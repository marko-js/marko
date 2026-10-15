// tags/menu.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__it = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__it($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var menu_default = /*@__PURE__*/ _template("__tests__/tags/menu.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
const $item_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$picked($scope._, $scope.x_name);
}));
const $item_content__setup = $item_content__setup__script;
const $item_content__x_name__script = _script("__tests__/template.marko_1_x_name#4", ($scope) => _el_read($scope["#span/2"]).textContent = "script:" + $scope.x_name);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button> </button><span></span>", " D l ", $item_content__setup), {
	x_id($scope) {
		_attr_class($scope["#button/0"], "b" + $scope.x_id);
	},
	x_name($scope) {
		$item_content__x_name__script($scope);
		_text($scope["#text/1"], $scope.x_name);
	}
});
const $picked = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "picked/5", ($scope) => _text($scope["#text/1"], $scope.picked));
function $setup($scope) {
	$picked($scope, "none");
}
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $item;
	forOf($scope.input_items, (x) => {
		$item = attrTags($item, { content: $item_content($scope, {
			x_id: x?.id,
			x_name: x?.name
		}) });
	});
	$input_item($scope["#childScope/0"], $item);
});
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
