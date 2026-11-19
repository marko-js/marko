// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item = $for_content__dynamicTag;
const $for_content__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content__$params = ($scope, item) => $for_content__item($scope, item);
const $for = /*@__PURE__*/ _for_of("#text/0", "<span><!>:<!></span>", "D%c%", $for_content__setup, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item, "id"]);
const $input = ($scope, input) => $input_item($scope, input.item);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>add</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<b> </b>", "D "), { id: ($scope) => _text($scope["#text/0"], $scope.id) });
const $ids = /*@__PURE__*/ _let("ids/2", ($scope) => {
	let $item;
	forOf($scope.ids, (id) => $item = attrTags($item, {
		id,
		content: $item_content($scope, { id })
	}));
	$input_item($scope["#childScope/0"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$ids($scope, [...$scope.ids, "b"]);
}));
function $setup($scope) {
	$ids($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
