// tags/v:show-await.marko.css
var v_show_await_marko_default = "\n    .v { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0); }\n  ";

// tags/card.marko
const $template$2 = "<p> </p><button>log</button>";
const $walks$2 = "D l b";
const $setup$2 = ($_) => {};
const $o = /*@__PURE__*/ _let("o/6", ($scope) => $o_label($scope, $scope.o?.label));
const $a = /*@__PURE__*/ _let("a/5", ($scope) => $o($scope, { label: $scope.a }));
const $input_label = $a;
const $o_label__script = _script("__tests__/tags/card.marko_0_o_label#7", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log($scope.o_label);
}));
const $o_label = /*@__PURE__*/ _const("o_label", ($scope) => {
	_text($scope["#text/0"], $scope.o_label);
	$o_label__script($scope);
});
const $input$2 = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, 0, $input$2);

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__d = /*@__PURE__*/ _let_change("d/10", ($scope) => _text($scope["#text/3"], $scope.d));
const $await_content__c = /*@__PURE__*/ _let("c/9", ($scope) => {
	_style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0", $scope.c);
	_text($scope["#text/2"], $scope.c);
	$await_content__d($scope, $scope.c, $valueChange($scope));
});
const $await_content__b = /*@__PURE__*/ _let("b/8", ($scope) => {
	_text($scope["#text/1"], $scope.b);
	$await_content__c($scope, $scope.b);
});
const $await_content__a = /*@__PURE__*/ _let("a/7", ($scope) => $await_content__b($scope, $scope.a));
const $await_content__x = ($scope, x) => {
	$input_label($scope["#childScope/4"], x);
	$await_content__a($scope, x);
};
const $await_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<style></style><p class=v><!>|<!>|<!></p>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => ` bD%c%c%l/${_w0}&`)($walks$2), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
const $valueChange = ($scope) => (_new_c) => {
	$await_content__c($scope, _new_c);
};
_resumed["__tests__/tags/show-await.marko_1/valueChange"] = $valueChange;
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $if_content__p = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.p));
const $if_content__setup = ($scope) => {
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $p = /*@__PURE__*/ _let("p/6", $if_content__p);
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
