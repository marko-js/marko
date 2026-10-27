// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $d = /*@__PURE__*/ _draft("d/3", ($scope) => _text($scope["#text/1"], $scope.d));
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $d($scope, $scope.n));
const $save2__script = _script("__tests__/template.marko_0_save#5", ($scope) => _on($scope["#button/0"], "click", $scope.save));
const $save2 = _action("save/5", "__tests__/template.marko_0_save#5/action", $save2__script);
function $setup($scope) {
	$n($scope, 1);
	$save2($scope, $save($scope));
}
const $save = ($scope) => async () => {
	$d($scope, 2);
	await resolveAfter(0);
	$n($scope, 3);
};
_resumed["__tests__/template.marko_0/save"] = $save;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
