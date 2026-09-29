// tags/tabs.marko
const $template$1 = "<!><!><div><!></div>";
const $walks$1 = "b%bD%l";
const $for_content__setup__script = _script("__tests__/tags/tabs.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$i($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	_attr($scope["#button/0"], "data-tab", $scope["#LoopKey"]);
	$for_content__setup__script($scope);
};
const $for_content__tab_title = ($scope, tab_title) => _text($scope["#text/1"], tab_title);
const $for_content__$params = ($scope, $params2) => $for_content__tab_title($scope, $params2[0]?.title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $i__OR__tabs = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.tabs[$scope.i].content));
const $i = /*@__PURE__*/ _let("i/5", $i__OR__tabs);
function $setup$1($scope) {
	$i($scope, 0);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $tabs = /*@__PURE__*/ _const("tabs", ($scope) => {
	$for($scope, [$scope.tabs]);
	$i__OR__tabs($scope);
});
const $input_tab = ($scope, input_tab) => $tabs($scope, [...input_tab ?? []]);
const $input = ($scope, input) => $input_tab($scope, input.tab);
var tabs_default = /*@__PURE__*/ _template("__tests__/tags/tabs.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $tab_content__count = /*@__PURE__*/ _let("count/4", ($scope) => _text($scope["#text/2"], $scope.count));
const $tab_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$tab_content__count($scope, +$scope.count + 1);
}));
const $tab_content__setup = ($scope) => {
	$tab_content__count($scope, 0);
	$tab_content__setup__script($scope);
};
const $tab_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button class=inc><!>: <!></button>", " D%c%", $tab_content__setup), { t($scope) {
	_text($scope["#text/1"], $scope.t);
} });
_resumed["__tests__/template.marko_1*content"] = $tab_content;
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	let $tab;
	forOf(["a", "b"], (t, $key) => {
		$tab = attrTags($tab, {
			title: t,
			content: $tab_content($scope, {
				t,
				"#LoopKey": $key
			})
		});
	});
	$input_tab($scope["#childScope/0"], $tab);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
