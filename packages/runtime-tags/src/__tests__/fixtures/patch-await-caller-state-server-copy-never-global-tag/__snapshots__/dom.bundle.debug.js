// tags/brand.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label($scope, input.label);
var brand_default = /*@__PURE__*/ _template("__tests__/tags/brand.marko", $template$2, "D l", 0, $input$2);

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const tags = [brand_default];
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content__x__$global_flag = /*@__PURE__*/ _fill_global_join("__tests__/tags/show-await.marko_1_$global_flag#0:8_x#2", ($scope) => $await_content__dynamicTag($scope, $scope.x && _global_read($scope.$global, "flag") ? tags[0] : null, ($_) => ({ label: $scope.x })), "flag");
const $await_content__x = /*@__PURE__*/ _const("x", $await_content__x__$global_flag);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $if_content__p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_p#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.p)));
const $if_content__setup = ($scope) => {
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $p = _let("p/6", $if_content__p);
const $input_promise = $p;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
