// template.marko
const $template = "<button class=go>go</button><button class=check>check</button><span> </span>";
const $walks = " b bD l";
const initial = $initial;
const $show2 = /*@__PURE__*/ _const("show");
const $box__script = _script("__tests__/template.marko_0_box#3", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.box.reveal = (n) => {
		$out($scope, `revealed ${n}`);
	};
} }));
const $box = /*@__PURE__*/ _const("box", ($scope) => {
	$show2($scope, $show($scope));
	$box__script($scope);
});
const $out = /*@__PURE__*/ _let("out/4", ($scope) => _text($scope["#text/2"], $scope.out));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.show(1);
	});
	_on($scope["#button/1"], "click", function() {
		$out($scope, `${$scope.out} ${$scope.box.reveal === initial ? "initial" : "replaced"}`);
	});
});
function $setup($scope) {
	$box($scope, { reveal: initial });
	$out($scope, "none");
	$setup__script($scope);
}
function $initial(_n) {}
const $show = ($scope) => (n) => {
	$scope.box.reveal(n);
};
_resumed["__tests__/template.marko_0/initial"] = $initial;
_resumed["__tests__/template.marko_0/show"] = $show;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
