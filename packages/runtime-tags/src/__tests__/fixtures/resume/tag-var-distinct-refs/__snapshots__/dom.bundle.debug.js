// template.marko
const $template = "<div>first</div><div>second</div>";
const $walks = " b b";
const $a_getter = _el("__tests__/template.marko_0_#div#0", "#div/0");
const $b_getter = _el("__tests__/template.marko_0_#div#1", "#div/1");
const $box__script = _script("__tests__/template.marko_0_box#2", ($scope) => {
	_el_read($scope["#div/0"]).dataset.ref = "a";
	_el_read($scope["#div/1"]).dataset.ref = "b";
	console.log($scope.box.a() === $scope.box.b() ? "SAME" : "distinct");
});
const $box = /*@__PURE__*/ _const("box", $box__script);
function $setup($scope) {
	$box($scope, {
		a: $a_getter($scope),
		b: $b_getter($scope)
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
