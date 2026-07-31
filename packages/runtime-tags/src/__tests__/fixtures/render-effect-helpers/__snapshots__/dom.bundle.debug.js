// v:template.marko.css
var v_template_marko_default = "\n  .kitchen { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0); }\n";

// template.marko
const $template = "<button>step</button><div>n=<!></div><div class=base></div><div></div><div></div><div></div><div></div><script type=importmap><\/script><div> </div><div></div><div data-fixed=x></div><img><img alt=y><div></div><input type=checkbox><input type=checkbox><input type=radio><input type=radio><input><input><input><input type=search><select><option value=one>one</option><option value=two>two</option></select><select><option value=one>one</option><option value=two>two</option></select><details><summary>s</summary> body</details><details><summary>s2</summary> b2</details><dialog>d</dialog><dialog>d2</dialog><style></style>";
const $walks = " b Db%l b b b b b bD l b b b b b b b b b b b b b b b b b b b ";
const $Chunk_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope, "#text/0", $scope._.n));
const $Chunk_content__setup = $Chunk_content__n;
const $Chunk_content = _content_resume("__tests__/template.marko_1*content", "chunk <!>", "b%", $Chunk_content__setup);
const $on__OR__Chunk = /*@__PURE__*/ _or(37, ($scope) => _attr_content($scope, "#div/14", $scope.on && $scope.Chunk));
const $on = /*@__PURE__*/ _const("on", ($scope) => {
	_attr_class($scope, "#div/1", $scope.on && "active");
	_attr_class_item($scope, "#div/3", "odd", !$scope.on);
	_attr_class_items($scope, "#div/4", {
		a: $scope.on,
		b: !$scope.on
	});
	_attr_style_item($scope, "#div/6", "color", $scope.on ? "red" : "blue");
	_attr_input_checked_default($scope, "#input/16", $scope.on);
	_attr_input_checkedValue_default($scope, "#input/18", $scope.on ? "a" : "b", "b");
	_attr($scope, "#input/21", "type", $scope.on ? "text" : "hidden");
	_attr_select_value_default($scope, "#select/24", $scope.on ? "one" : "two");
	_attr_details_or_dialog_open_default($scope, "#details/26", $scope.on);
	_attr_details_or_dialog_open_default($scope, "#dialog/28", $scope.on);
	_style_rule_item($scope, "#style/29", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0", $scope.on ? "green" : "purple");
	$on__OR__Chunk($scope);
});
const $spread__script = _script("__tests__/template.marko_0_spread#38", ($scope) => {
	_attrs_script($scope, "#div/10");
	_attrs_script($scope, "#div/11");
	_attrs_script($scope, "#img/12");
	_attrs_script($scope, "#img/13");
});
const $spread = /*@__PURE__*/ _const("spread", ($scope) => {
	_attrs_content($scope, "#div/10", $scope.spread);
	_attrs_partial_content($scope, "#div/11", $scope.spread, { "data-fixed": 1 });
	_attrs($scope, "#img/12", {
		src: "x.png",
		...$scope.spread
	});
	_attrs_partial($scope, "#img/13", $scope.spread, { alt: 1 });
	$spread__script($scope);
});
const $hidden = /*@__PURE__*/ _let("hidden/39", ($scope) => _attr_input_value($scope, "#input/22", $scope.hidden, $valueChange2($scope)));
const $n__OR__on = ($scope) => {
	_attr_style_items($scope, "#div/7", {
		color: $scope.on ? "red" : "blue",
		opacity: $scope.n
	});
	_attr_input_checked($scope, "#input/15", $scope.on, $checkedChange($scope));
};
const $n__closure = /*@__PURE__*/ _closure($Chunk_content__n);
const $n = /*@__PURE__*/ _let("n/30", ($scope) => {
	_attr($scope, "#div/1", "data-n", $scope.n);
	_text($scope, "#text/2", $scope.n);
	_attr_style($scope, "#div/5", `width:${$scope.n}px`);
	_text_content($scope, "#script/8", `
  { "imports": { "${_to_text($scope.n)}": "https://markojs.com" } }
`);
	_html($scope, "#text/9", `<b>html ${$scope.n}</b>`);
	_attr_input_value_default($scope, "#input/20", `v${$scope.n}`);
	_attr_input_value_dynamic_default($scope, "#input/21", `d${$scope.n}`);
	$on($scope, $scope.n % 2 === 0);
	$spread($scope, {
		"data-a": $scope.n,
		title: `t${$scope.n}`
	});
	$hidden($scope, `h${$scope.n}`);
	$n__OR__on($scope);
	$n__closure($scope);
});
const $txt = /*@__PURE__*/ _let("txt/31", ($scope) => _attr_input_value($scope, "#input/19", $scope.txt, $valueChange($scope)));
const $pick = /*@__PURE__*/ _let("pick/32", ($scope) => _attr_input_checkedValue($scope, "#input/17", $scope.pick, $checkedValueChange($scope), "a"));
const $sel = /*@__PURE__*/ _let("sel/33", ($scope) => _attr_select_value($scope, "#select/23", $scope.sel, $valueChange3($scope)));
const $opened = /*@__PURE__*/ _let("opened/34", ($scope) => {
	_attr_details_or_dialog_open($scope, "#details/25", $scope.opened, $openChange($scope));
	_attr_details_or_dialog_open($scope, "#dialog/27", $scope.opened, $openChange2($scope));
});
const $Chunk = /*@__PURE__*/ _const("Chunk", $on__OR__Chunk);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$n($scope, +$scope.n + 1);
	});
	_on($scope["#script/8"], "click", function() {});
	_attr_input_checked_script($scope, "#input/15");
	_attr_input_checkedValue_script($scope, "#input/17");
	_attr_input_value_script($scope, "#input/19");
	_attr_input_value_script($scope, "#input/22");
	_attr_select_value_script($scope, "#select/23");
	_attr_details_or_dialog_open_script($scope, "#details/25");
	_attr_details_or_dialog_open_script($scope, "#dialog/27");
});
function $setup($scope) {
	_attr_nonce($scope, "#script/8");
	_style_shell($scope, "#style/29");
	$n($scope, 0);
	$txt($scope, "hi");
	$pick($scope, "a");
	$sel($scope, "one");
	$opened($scope, false);
	$Chunk($scope, { content: $Chunk_content($scope) });
	$setup__script($scope);
}
const $valueChange2 = ($scope) => function(v) {
	$hidden($scope, v);
};
const $checkedChange = ($scope) => function(v) {
	$n($scope, $scope.n + 0);
};
const $valueChange = ($scope) => function(v) {
	$txt($scope, v);
};
const $checkedValueChange = ($scope) => function(v) {
	$pick($scope, v);
};
const $valueChange3 = ($scope) => function(v) {
	$sel($scope, v);
};
const $openChange2 = ($scope) => function(v) {
	$opened($scope, v);
};
const $openChange = ($scope) => function(v) {
	$opened($scope, v);
};
_resume("__tests__/template.marko_0/valueChange2", $valueChange2);
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
_resume("__tests__/template.marko_0/valueChange", $valueChange);
_resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
_resume("__tests__/template.marko_0/valueChange3", $valueChange3);
_resume("__tests__/template.marko_0/openChange2", $openChange2);
_resume("__tests__/template.marko_0/openChange", $openChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
