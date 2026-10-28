// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe"));
const $await_content__setup$1 = $await_content__input_label;
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params$1 = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content$1 = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup$1);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params$1);
const $setup$1 = $await_content$1;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure$1 = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure$1);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $await_content2__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content2__$params = ($scope, $params3) => $await_content2__note($scope, $params3[0]);
const $placeholder_content2 = _content("__tests__/template.marko_5*content", "<em>inner</em>");
const $placeholder_content = _content("__tests__/template.marko_4*content", "<em>outer</em>");
const $try_content2__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_label#0:6/init", /*@__PURE__*/ _closure_get("input_label/10", ($scope) => $input_label$1($scope["#childScope/0"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_3_input_label#0:6/subscribe"));
const $try_content2__setup = ($scope) => {
	$try_content2__input_label($scope);
	$try_content2__p($scope);
	$setup$1($scope["#childScope/0"]);
};
const $try_content2__p = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_p#0:8/init", /*@__PURE__*/ _closure_get("p/12", ($scope) => $input_promise$1($scope["#childScope/0"], $scope._._._.p), ($scope) => $scope._._._, "__tests__/template.marko_3_p#0:8/subscribe"));
const $await_content__title = ($scope, title) => _text($scope["#text/0"], title);
const $await_content__try = /*@__PURE__*/ _try("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content2__setup, $placeholder_content2);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $await_content__$params = ($scope, $params2) => $await_content__title($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<h1> </h1><!><!>", "D l%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_title = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_title#0:5/init", /*@__PURE__*/ _closure_get("input_title/9", ($scope) => $try_content__await_promise($scope, $scope._.input_title), 0, "__tests__/template.marko_1_input_title#0:5/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_title($scope);
	$try_content__input_note($scope);
	$await_content($scope);
	$await_content2($scope);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<small> </small>", "D ");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:7/init", /*@__PURE__*/ _closure_get("input_note/11", ($scope) => $try_content__await_promise2($scope, $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:7/subscribe"));
const $p__closure = /*@__PURE__*/ _closure($try_content2__p);
const $p = /*@__PURE__*/ _let("p/8", $p__closure);
const $input_promise = $p;
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!><!>", "b%b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_title($scope, input.title);
	$input_note($scope, input.note);
	$input_label($scope, input.label);
};
const $input_title__closure = /*@__PURE__*/ _closure($try_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
const $input_label__closure = /*@__PURE__*/ _closure($try_content2__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_note__closure = /*@__PURE__*/ _closure($try_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
