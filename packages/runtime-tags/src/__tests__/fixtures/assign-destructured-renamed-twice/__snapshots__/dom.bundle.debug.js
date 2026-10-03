// template.marko
const $template = "<button><!>:<!>:<!></button>";
const $walks = " D%c%c%l";
const $bar = /*@__PURE__*/ _let("bar/4", ($scope) => _text($scope["#text/3"], $scope.bar));
const $obj2 = ($scope, obj) => {
	$foo($scope, obj.foo);
	$fooChange2($scope, obj.fooChange);
};
function $setup($scope) {
	$bar($scope, 0);
	$obj2($scope, {
		foo: 1,
		fooChange: $obj($scope)
	});
}
const $foo = ($scope, foo) => {
	_text($scope["#text/1"], foo);
	$renamed($scope, foo);
};
const $renamed = ($scope, foo) => _text($scope["#text/2"], foo);
const $fooChange2__script = _script("__tests__/template.marko_0_$fooChange#7", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$fooChange($scope.bar + 1);
}));
const $fooChange2 = /*@__PURE__*/ _const("$fooChange", $fooChange2__script);
const $obj = ($scope) => function(v) {
	$bar($scope, v);
};
_resumed["__tests__/template.marko_0/obj"] = $obj;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
