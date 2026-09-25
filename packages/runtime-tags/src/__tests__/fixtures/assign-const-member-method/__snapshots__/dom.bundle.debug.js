// template.marko
const $template = "<button class=show>show</button><button class=call>call</button><span> </span>";
const $walks = " b bD l";
const $show2 = /*@__PURE__*/ _const("show");
const $call2 = /*@__PURE__*/ _const("call");
const $box2__script = _script("__tests__/template.marko_0_box#3", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.box.reveal = (n) => {
		$out($scope, `revealed ${n}`);
	};
} }));
const $box2 = /*@__PURE__*/ _const("box", ($scope) => {
	$show2($scope, $show($scope));
	$call2($scope, $call($scope));
	$box2__script($scope);
});
const $out = /*@__PURE__*/ _let("out/4", ($scope) => _text($scope["#text/2"], $scope.out));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.show(1);
	});
	_on($scope["#button/1"], "click", function() {
		$scope.call(2);
	});
});
function $setup($scope) {
	$box2($scope, { reveal: $box });
	$out($scope, "none");
	$setup__script($scope);
}
const $show = ($scope) => (n) => {
	$scope.box.reveal(n);
};
const $call = ($scope) => (n) => {
	const reveal = $scope.box.reveal;
	reveal(n);
};
function $box(_n) {}
_resumed["__tests__/template.marko_0/show"] = $show;
_resumed["__tests__/template.marko_0/call"] = $call;
_resumed["__tests__/template.marko_0/box"] = $box;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
