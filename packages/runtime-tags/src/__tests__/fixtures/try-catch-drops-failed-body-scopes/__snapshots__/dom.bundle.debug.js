// tags/child.marko
const $template$1 = "<button>c<!></button>";
const $walks$1 = " Db%l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 100);
	$setup__script$1($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<button>outer <!></button><!><!>";
const $walks = " Db%l%c";
function boom() {
	throw new Error("BOOM");
}
_enable_catch();
const $catch_content__e_message = ($scope, e_message) => _text($scope["#text/0"], e_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__e_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2_content", "caught <!>", "b%b", 0, $catch_content__$params);
const $try_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	_text($scope["#text/1"], boom());
};
const $count = /*@__PURE__*/ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", /*@__PURE__*/ ((_w0) => `${_w0} `)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1), $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
