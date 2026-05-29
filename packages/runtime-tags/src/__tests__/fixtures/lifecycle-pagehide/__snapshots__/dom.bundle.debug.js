// template.marko
const $template = "<span id=log></span><button id=inc>+</button>";
const $walks = "b b";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => {
	_lifecycle($scope, {
		onMount: function() {
			document.getElementById("log").textContent += "mount,";
		},
		onUpdate: function() {
			document.getElementById("log").textContent += "update" + $scope.count + ",";
		}
	});
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
});
const $count = /* @__PURE__ */ _let("count/1", $count__script);
function $setup($scope) {
	$count($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b b", $setup);
