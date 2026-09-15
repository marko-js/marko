// template.marko
const $template = "<div> </div><button>zero</button>";
const $walks = "D l b";
const $volume__OR__audioOff = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.audioOff ? "off" : $scope.volume < .5 ? "low" : "high"));
const $audioOff = /*@__PURE__*/ _const("audioOff", $volume__OR__audioOff);
const $volume__OR__muted = /*@__PURE__*/ _or(4, ($scope) => $audioOff($scope, $scope.muted || $scope.volume === 0));
const $volume = /*@__PURE__*/ _let("volume/2", ($scope) => {
	$volume__OR__muted($scope);
	$volume__OR__audioOff($scope);
});
const $muted = /*@__PURE__*/ _let("muted/3", $volume__OR__muted);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$volume($scope, 0);
}));
function $setup($scope) {
	$volume($scope, 1);
	$muted($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
