// template.marko
const $template = "<button id=late> </button><button id=native><!> <!></button>";
const $walks = " D l D%c%l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $_shownSource($scope, $scope.count));
const $shown = /*@__PURE__*/ _draft("shown/6", "count/5", ($scope) => _text($scope["#text/1"], $scope.shown));
const $_shownSource = ($scope) => {
	$shown($scope, $scope.count);
};
const $late2 = /*@__PURE__*/ _action("late/8", ($scope) => $late_pending($scope, $scope.late.pending));
const $native2 = /*@__PURE__*/ _action("native/10", ($scope) => $native_pending($scope, $scope.native.pending));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.late();
	});
	_on($scope["#button/2"], "click", function() {
		$scope.native();
	});
});
function $setup($scope) {
	$count($scope, 0);
	$late2($scope, $late($scope));
	$native2($scope, $native($scope));
	$setup__script($scope);
}
const $late_pending = /*@__PURE__*/ _const("late_pending", ($scope) => _text($scope["#text/3"], $scope.late_pending ? "late" : "-"));
const $native_pending = /*@__PURE__*/ _const("native_pending", ($scope) => _text($scope["#text/4"], $scope.native_pending ? "native" : "-"));
const $late = ($scope) => /*@__PURE__*/ _act(function* () {
	yield resolveAfter(0);
	$shown($scope, 7, 1);
	yield resolveAfter(0);
}, 1, $scope, $late2);
const $native = ($scope) => /*@__PURE__*/ _act(async function() {
	void arguments;
	$shown($scope, 8, 1);
	await resolveAfter(0);
	$shown($scope, 9, 1);
}, 0, $scope, $native2);
_resumed["__tests__/template.marko_0/late"] = $late;
_resumed["__tests__/template.marko_0/native"] = $native;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
