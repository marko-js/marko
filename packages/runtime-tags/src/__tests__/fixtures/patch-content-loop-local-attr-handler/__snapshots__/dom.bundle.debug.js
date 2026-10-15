// tags/menu.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__it_id = ($scope, it_id) => _attr_class($scope["#button/0"], "b" + it_id);
const $for_content__it_onPick__script = _script("__tests__/tags/menu.marko_1_it_onPick#5", ($scope) => _on($scope["#button/0"], "click", $scope.it_onPick));
const $for_content__it_onPick = /*@__PURE__*/ _const("it_onPick", $for_content__it_onPick__script);
const $for_content__it_label = ($scope, it_label) => _text($scope["#text/1"], it_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__it_onPick($scope, $params2[0]?.onPick);
	$for_content__it_id($scope, $params2[0]?.id);
	$for_content__it_label($scope, $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var menu_default = /*@__PURE__*/ _template("__tests__/tags/menu.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
const $picked = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "picked/5", ($scope) => _text($scope["#text/1"], $scope.picked));
function $setup($scope) {
	$picked($scope, "none");
}
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $item;
	forOf($scope.input_items, (x) => {
		$item = attrTags($item, {
			id: x.id,
			label: x.name,
			onPick: $onPick({
				_: $scope,
				"x/6": x
			})
		});
	});
	$input_item($scope["#childScope/0"], $item);
});
const $input = ($scope, input) => $input_items($scope, input.items);
const $onPick = ($locals) => function() {
	const $scope = $locals._;
	$picked($scope, $locals["x/6"].name);
};
_resumed["__tests__/template.marko_0/onPick"] = $onPick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
