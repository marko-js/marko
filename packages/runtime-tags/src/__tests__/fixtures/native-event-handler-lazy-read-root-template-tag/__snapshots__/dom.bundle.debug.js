// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
var Box = class {
	constructor(n) {
		this.n = n;
	}
};
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, {
	n: $scope.n,
	fmt: $_return($scope),
	Box: $_return2
}));
function $setup$1($scope) {
	$n($scope, 1);
}
function $_return2(v) {
	return new Box(v);
}
const $_return = ($scope) => (strings, value) => strings.join(String(value + $scope.n));
_resumed["__tests__/tags/child.marko_0/_return2"] = $_return2;
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=whole>whole</button><!><div class=log> </div>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b%bD l`)("");
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$log($scope._, ($scope._.api?.fmt)`a${1}b`);
	});
	_on($scope["#button/1"], "click", function() {
		$log($scope._, String(new ($scope._.api?.Box)(2).n));
	});
});
const $if_content__setup = $if_content__setup__script;
const $log = /*@__PURE__*/ _let("log/5", ($scope) => _text($scope["#text/4"], $scope.log));
const $if = /*@__PURE__*/ _if("#text/3", "<button class=tag>tag</button><button class=new>new</button>", " b ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$log($scope, Object.keys($scope.api).join());
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $api);
	$log($scope, "");
	$show($scope, true);
	$setup__script($scope);
}
const $api = /*@__PURE__*/ _const("api");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
