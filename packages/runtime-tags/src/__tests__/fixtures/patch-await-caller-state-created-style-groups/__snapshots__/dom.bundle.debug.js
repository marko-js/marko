// tags/v:show-await.marko.css
var v_show_await_marko_default = "\n    :root { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0); background: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_1); border-color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2); }\n  ";

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_1", $scope._.input_label), 0, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe"));
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	_style_shell($scope, "#style/0");
};
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0", $scope.x);
	_style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2", $scope.x);
	_text($scope["#text/1"], $scope.x);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<style></style><p> </p>", " bD ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=prefix>prefix</button><!><button class=swap>swap</button><!><!>";
const $walks = " b%b b%c";
const $for_content__prefix = ($scope, prefix) => _attr($scope["#span/0"], "id", prefix);
const $for_content__setup = ($scope) => $for_content__prefix($scope, _id($scope));
const $if_content2__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span></span>", " ", $for_content__setup);
const $if_content2__setup = ($scope) => $if_content2__for($scope, [[
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9
]]);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:8/init", /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_p#0:10/init", /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.p)));
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content2__setup);
const $prefixes = /*@__PURE__*/ _let("prefixes/9", ($scope) => $if($scope, $scope.prefixes ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$prefixes($scope, true);
	});
	_on($scope["#button/2"], "click", function() {
		$p($scope, Promise.resolve("swapped"));
	});
});
function $setup($scope) {
	$prefixes($scope, false);
	$setup__script($scope);
}
const $p = /*@__PURE__*/ _let("p/10", $if_content__p);
const $input_promise = $p;
const $if2 = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if2($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
