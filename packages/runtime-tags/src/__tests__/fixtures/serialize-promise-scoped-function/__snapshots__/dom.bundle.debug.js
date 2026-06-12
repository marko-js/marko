// template.marko
const $template = "<button>inc:<!></button><div id=ref>0</div>";
const $walks = " Db%lb";
const $promise__script = _script("__tests__/template.marko_0_promise", ($scope) => (async () => {
	document.getElementById("ref").textContent = String((await $scope.promise)());
})());
const $promise = /* @__PURE__ */ _const("promise", $promise__script);
const $getCount2 = ($scope, getCount) => $promise($scope, Promise.resolve(getCount));
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/2", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$getCount2($scope, $getCount($scope));
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
function $getCount($scope) {
	return () => $scope.count;
}
_resume("__tests__/template.marko_0/getCount", $getCount);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
