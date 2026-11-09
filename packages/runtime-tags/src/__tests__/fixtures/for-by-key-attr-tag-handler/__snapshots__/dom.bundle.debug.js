// tags/menu.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__setup__script = _script("__tests__/tags/menu.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.option_onSelect();
}));
const $for_content__setup$1 = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => {
	$for_content__option_onSelect($scope, $params2[0]?.onSelect);
	_text($scope["#text/1"], $params2[0]?.label);
};
const $for_content__option_onSelect = /*@__PURE__*/ _const("option_onSelect");
const $for$1 = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup$1, $for_content__$params);
const $input_option = ($scope, input_option) => $for$1($scope, [input_option]);
const $input = ($scope, input) => $input_option($scope, input.option);
var menu_default = /*@__PURE__*/ _template("__tests__/tags/menu.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = "<!><!><div id=log></div>";
const $walks = "b%c";
const $for_content__setup = ($scope) => {
	let $option;
	forOf([1, 2], (n) => $option = attrTags($option, {
		label: $scope["#LoopKey"] + n,
		onSelect: $onSelect({
			_: $scope,
			"n/9": n
		})
	}));
	$input_option($scope["#childScope/0"], $option);
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $for_content__setup);
const $items = /*@__PURE__*/ _let("items/1", ($scope) => $for($scope, [$scope.items, "id"]));
function $setup($scope) {
	$items($scope, [{ id: "a" }, { id: "b" }]);
}
const $onSelect = ($locals) => function() {
	const $scope = $locals._;
	document.getElementById("log").textContent = $scope["#LoopKey"] + $locals["n/9"];
};
_resumed["__tests__/template.marko_1/onSelect"] = $onSelect;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
