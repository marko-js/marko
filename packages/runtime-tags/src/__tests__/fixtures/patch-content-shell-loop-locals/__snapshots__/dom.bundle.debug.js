// tags/view.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__tab_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.tab_content));
const $if_content__setup = $if_content__tab_content;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $for_content__input_selected = /*@__PURE__*/ _fill_join("__tests__/tags/view.marko_fill0", "input_selected", /*@__PURE__*/ _for_selector("#text/0", "input_selected", "#LoopKey", ($scope) => $for_content__if($scope, $scope["#LoopKey"] === $scope._.input_selected ? 0 : 1)));
const $for_content__setup = $for_content__input_selected;
const $for_content__$params = ($scope, $params2) => $for_content__tab_content($scope, $params2[0]?.content);
const $for_content__tab_content = /*@__PURE__*/ _const("tab_content", $if_content__tab_content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_tabs = ($scope, input_tabs) => $for($scope, [input_tabs]);
const $input$1 = ($scope, input) => {
	$input_tabs($scope, input.tabs);
	$input_selected$1($scope, input.selected);
};
const $input_selected$1 = /*@__PURE__*/ _fill_const("__tests__/tags/view.marko_fill0", "input_selected", $for_content__input_selected);
var view_default = /*@__PURE__*/ _template("__tests__/tags/view.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$2, "b%c");
const $tabs = _var_resume("__tests__/template.marko_0_tabs#7/var", ($scope, tabs) => $input_tabs($scope["#childScope/2"], tabs));
function $setup($scope) {
	_var($scope, "#childScope/0", $tabs);
	$setup$2($scope["#childScope/0"]);
}
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input_selected = ($scope, input_selected) => $input_selected$1($scope["#childScope/2"], input_selected);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_selected($scope, input.selected);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/holder.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_tab = /*@__PURE__*/ _const("input_tab", ($scope) => _return($scope, $scope.input_tab));
const $input$1 = ($scope, input) => $input_tab($scope, input.tab);
var holder_default = /*@__PURE__*/ _template("__tests__/tags/holder.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// tags/src.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
const $tab_content__setup__script = _script("__tests__/tags/src.marko_1", ($scope) => _on($scope["#button/0"], "click", function(ev) {
	ev.target.dataset.seen = $scope.t;
}));
const $tab_content__setup = $tab_content__setup__script;
const $tab_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/src.marko_1*content", "<button> </button>", " D ", $tab_content__setup), { t($scope) {
	_text($scope["#text/1"], $scope.t);
} });
const $h = _var_resume("__tests__/tags/src.marko_0_h#5/var", /*@__PURE__*/ _const("h", ($scope) => _return($scope, $scope.h)));
function $setup($scope) {
	_var($scope, "#childScope/0", $h);
}
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $tab;
	forOf($scope.input_items, (t) => {
		$tab = attrTags($tab, { content: $tab_content($scope, { t }) });
	});
	$input_tab($scope["#childScope/0"], $tab);
});
const $input = ($scope, input) => $input_items($scope, input.items);
var src_default = /*@__PURE__*/ _template("__tests__/tags/src.marko", $template, $walks, /*@__PURE__*/ _return_setup($setup), $input);
