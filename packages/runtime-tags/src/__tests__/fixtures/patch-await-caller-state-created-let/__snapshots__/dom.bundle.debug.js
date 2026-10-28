// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__m__OR__n__OR__s__OR__c__script = _script("__tests__/tags/show-await.marko_1_m#5_n#6_s#8_c#9", ($scope) => _el_read($scope["#span/1"]).textContent = [
	$scope.m,
	$scope.n,
	$scope.s,
	$scope.c
].join("|"));
const $await_content__m__OR__n__OR__s__OR__c = /*@__PURE__*/ _or(11, $await_content__m__OR__n__OR__s__OR__c__script, 3);
const $await_content__m = /*@__PURE__*/ _fill_let("__tests__/tags/show-await.marko_fill0", "m/5", $await_content__m__OR__n__OR__s__OR__c);
const $await_content__n = /*@__PURE__*/ _fill_let_change("__tests__/tags/show-await.marko_fill1", "n/6", $await_content__m__OR__n__OR__s__OR__c);
const $await_content__c = /*@__PURE__*/ _fill_let_change("__tests__/tags/show-await.marko_fill3", "c/9", $await_content__m__OR__n__OR__s__OR__c);
const $await_content__s = /*@__PURE__*/ _fill_let("__tests__/tags/show-await.marko_fill2", "s/8", ($scope) => {
	$await_content__m__OR__n__OR__s__OR__c($scope);
	$await_content__c($scope, $scope.s, $valueChange2($scope));
}, $await_content__m__OR__n__OR__s__OR__c);
const $await_content__x = ($scope, x) => {
	$await_content__m($scope, x);
	$await_content__s($scope, x);
	_text($scope["#text/0"], x);
	$await_content__n($scope, x, $valueChange($scope));
};
const $await_content__setup__script = _script("__tests__/tags/show-await.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$await_content__n($scope, "z");
	$await_content__c($scope, "y");
}));
const $await_content__setup = $await_content__setup__script;
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><span></span><button class=set>set</button>", "D l b ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
const $valueChange2 = ($scope) => function(v) {
	$await_content__s($scope, v);
};
const $valueChange = ($scope) => function(v) {
	$await_content__m($scope, v + "?");
};
_resumed["__tests__/tags/show-await.marko_1/valueChange2"] = $valueChange2;
_resumed["__tests__/tags/show-await.marko_1/valueChange"] = $valueChange;
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $if_content__p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_p#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.p)));
const $if_content__setup = ($scope) => {
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $p = /*@__PURE__*/ _let("p/6", $if_content__p);
const $input_promise = $p;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, Promise.resolve("green"));
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
