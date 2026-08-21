// components/tags-pinger.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
	$scope.e($scope.f);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// components/class-host/component-browser.js
var import_components = require_components();
var component_browser_default = class {
	handlePing(count) {
		document.getElementById("class").textContent = "ping:" + count;
	}
};

// v:template.marko.hydrate-5.js
(0, import_components.register)("c", component_browser_default);
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
