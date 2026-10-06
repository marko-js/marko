// tags/grand.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $n = /*@__PURE__*/ _let("n/1", ($scope) => {
	_return($scope, {
		n: $scope.n,
		set: $_return($scope)
	});
	_text($scope["#text/0"], $scope.n);
});
function $setup$1($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed["__tests__/tags/grand.marko_0/_return"] = $_return;
var grand_default = /*@__PURE__*/ _template("__tests__/tags/grand.marko", $template$1, "D l", $setup$1);

// child.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l");
const $g = _var_resume("__tests__/child.marko_0_g#2/var", /*@__PURE__*/ _const("g", ($scope) => _return($scope, $scope.g)));
function $setup($scope) {
	_var($scope, "#childScope/0", $g);
	$setup$1($scope["#childScope/0"]);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup_var(() => import("./v:child.marko.setup.mjs"));
const $if_content__a__OR__v_n = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/4"], $scope._.a + ":" + $scope.v_n), 1, "#scopeOffset/2");
const $if_content__a = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__a__OR__v_n);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	$a($scope._, +$scope._.a + 1);
	$scope.v.set($scope._.a);
}));
const $if_content__setup = ($scope) => {
	$if_content__a._($scope);
	_var($scope, "#childScope/1", $if_content__v);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$if_content__setup__script($scope);
};
const $if_content__v = _var_resume("__tests__/template.marko_1_v#5/var", /*@__PURE__*/ _const("v", ($scope) => $if_content__v_n($scope, $scope.v?.n)));
const $if_content__v_n = /*@__PURE__*/ _const("v_n", $if_content__a__OR__v_n);
const $a = /*@__PURE__*/ _let("a/2", $if_content__a);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><button class=inc> </button>", "b%0&b D ", $if_content__setup);
const $mounted = /*@__PURE__*/ _let("mounted/3", ($scope) => $if($scope, $scope.mounted ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mounted($scope, !$scope.mounted);
}));
function $setup($scope) {
	$a($scope, 0);
	$mounted($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
