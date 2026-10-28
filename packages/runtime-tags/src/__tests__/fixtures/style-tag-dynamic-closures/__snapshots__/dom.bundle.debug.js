// tags/reveal.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup$1);
const $input_show$1 = ($scope, input_show) => $if$1($scope, input_show ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var reveal_default = /*@__PURE__*/ _template("__tests__/tags/reveal.marko", $template$2, "b%c", 0, $input$2);

// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for$1 = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for$1($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $Box_content__walks = " c";
const $Box_content__template = "<style></style><div class=box></div>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!><!><!>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b%b%b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $item_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_6*content", "<style></style><div class=item></div>", " ", $item_content__setup), { color: ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_4", $scope.color) });
const $Box_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $Box_content__color = /*@__PURE__*/ _const("color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_0", $scope.color));
const $Box_content__$params = ($scope, $params2) => $Box_content__$temp($scope, $params2[0]);
const $Box_content__$temp = ($scope, $temp) => $Box_content__color($scope, $temp.color);
const $reveal_content__input_color = /*@__PURE__*/ _closure_get("input_color/13", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_3", $scope._.input_color), 0, "__tests__/template.marko_4_input_color#0:8/subscribe");
const $reveal_content__setup = ($scope) => {
	$reveal_content__input_color($scope);
	_style_shell($scope, "#style/0");
};
const $reveal_content = _content("__tests__/template.marko_4*content", "<style></style><div class=content></div>", " ", $reveal_content__setup);
const $if_content__input_color = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $Box_content__color($scope["#childScope/0"], $scope._.input_color));
const $if_content__setup = ($scope) => {
	$if_content__input_color._($scope);
	$Box_content__setup($scope["#childScope/0"]);
};
const $for_content2__input_selected = /*@__PURE__*/ _for_selector("#text/1", "input_selected", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_2", $scope._.input_selected === $scope["#LoopKey"] ? "red" : "blue"));
const $for_content2__setup = ($scope) => {
	$for_content2__input_selected._($scope);
	_style_shell($scope, "#style/0");
};
const $for_content__input_color = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_1", $scope._.input_color));
const $for_content__setup = ($scope) => {
	$for_content__input_color._($scope);
	_style_shell($scope, "#style/0");
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<style></style><div class=row></div>", " ", $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows]);
const $for2 = /*@__PURE__*/ _for_of("#text/1", "<style></style><div class=selected></div>", " ", $for_content2__setup);
const $input_items = ($scope, input_items) => $for2($scope, [input_items, "id"]);
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => {
	$input_show$1($scope["#childScope/3"], input_show);
	$if($scope, input_show ? 0 : 1);
};
function $setup($scope) {
	$input_content($scope["#childScope/3"], $reveal_content($scope));
}
const $input_colors = /*@__PURE__*/ _const("input_colors", ($scope) => {
	let $item;
	forOf($scope.input_colors, (color) => {
		$item = attrTags($item, { content: $item_content($scope, { color }) });
	});
	$input_item($scope["#childScope/4"], $item);
});
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_color($scope, input.color);
	$input_items($scope, input.items);
	$input_selected($scope, input.selected);
	$input_show($scope, input.show);
	$input_colors($scope, input.colors);
};
const $input_color__closure = /*@__PURE__*/ _closure($reveal_content__input_color);
const $input_color = /*@__PURE__*/ _const("input_color", ($scope) => {
	$for_content__input_color($scope);
	$if_content__input_color($scope);
	$input_color__closure($scope);
});
const $input_selected = /*@__PURE__*/ _const("input_selected", $for_content2__input_selected);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_0); }\n  ";

// v:template.marko.1.css
var v_template_marko_1_default = "\n    .row { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_1); }\n  ";

// v:template.marko.2.css
var v_template_marko_2_default = "\n    .selected { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_2); }\n  ";

// v:template.marko.3.css
var v_template_marko_3_default = "\n    .content { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_3); }\n  ";

// v:template.marko.4.css
var v_template_marko_4_default = "\n        .item { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_4); }\n      ";
