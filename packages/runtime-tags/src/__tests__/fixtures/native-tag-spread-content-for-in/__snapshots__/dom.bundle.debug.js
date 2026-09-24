// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__tag__script = _script("__tests__/tags/child.marko_2_tag#3", ($scope) => _attrs_script($scope, "#div/0"));
const $if_content__tag = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs_content($scope, "#div/0", {
		"data-name": $scope._["#LoopKey"],
		...$scope._.tag
	});
	$if_content__tag__script($scope);
});
const $if_content__setup = $if_content__tag;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $for_content__setup = ($scope) => $for_content__if($scope, $scope["#LoopKey"] !== "content" ? 0 : 1);
const $for_content__$params = ($scope, $params2) => $for_content__tag($scope, $params2[1]);
const $for_content__tag = /*@__PURE__*/ _const("tag", $if_content__tag);
const $for = /*@__PURE__*/ _for_in("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input = ($scope, input) => $for($scope, [input]);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $b_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "B");
const $a_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#1/subscribe");
const $a_content__setup = $a_content__count;
const $a_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "A <!>", "b%", $a_content__setup);
const $count__closure = /*@__PURE__*/ _closure($a_content__count);
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$input($scope["#childScope/0"], {
		a: attrTag({
			onClick: $onClick($scope),
			content: $a_content($scope)
		}),
		b: attrTag({ content: $b_content($scope) })
	});
	$count__closure($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $onClick = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
