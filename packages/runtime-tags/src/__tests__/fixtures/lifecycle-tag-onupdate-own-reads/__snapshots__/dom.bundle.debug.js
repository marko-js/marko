// template.marko
const $template = "<button id=bump>Bump</button><div id=listener>never</div><div id=runs>never</div><div id=own>never</div>";
const $walks = " e";
const $other__script = _script("__tests__/template.marko_0_other#1", ($scope) => _lifecycle($scope, { onUpdate: function() {
	document.getElementById("own").textContent = `own ${$scope.other}`;
} }, 1));
const $other = /*@__PURE__*/ _let("other/1", $other__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$other($scope, +$scope.other + 1);
	});
	_lifecycle($scope, {
		onMount: function() {
			document.addEventListener("keydown", () => {
				document.getElementById("listener").textContent = `listener saw ${$scope.other}`;
			});
		},
		onUpdate: function() {
			window.n = (window.n || 0) + 1;
			document.getElementById("runs").textContent = `update ran ${window.n} times`;
		}
	});
});
function $setup($scope) {
	$other($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " e", $setup);
