// tags/my-menu/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__item__script = _script("__tests__/tags/my-menu/index.marko_1_item#2", ($scope) => _attrs_script($scope, "#button/0"));
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_attrs_content($scope, "#button/0", $scope.item);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", "<button></button>", " ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var my_menu_default = /*@__PURE__*/ _template("__tests__/tags/my-menu/index.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
const $item_content = /*@__PURE__*/ _content_closures(_content_resume("__tests__/template.marko_1*content", "Click <!>", "b%"), { foo($scope) {
	_text($scope["#text/0"], $scope.foo);
} });
const $clicked = /*@__PURE__*/ _let("clicked/2", ($scope) => {
	let $item;
	forOf(["a", "b"], (foo) => {
		$item = attrTags($item, {
			onClick: $onClick({
				_: $scope,
				"foo/4": foo
			}),
			content: $item_content($scope, { foo })
		});
	});
	$input_item($scope["#childScope/0"], $item);
	_text($scope["#text/1"], $scope.clicked);
});
function $setup($scope) {
	$clicked($scope, "");
}
const $onClick = ($locals) => function() {
	const $scope = $locals._;
	$clicked($scope, $scope.clicked + $locals["foo/4"]);
};
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
