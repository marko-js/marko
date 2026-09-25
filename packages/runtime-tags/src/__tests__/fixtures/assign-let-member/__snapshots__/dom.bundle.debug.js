// template.marko
const $template = "<ul><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li></ul><button class=mutate>mutate</button><button class=apply>apply</button>";
const $walks = "E lD lD lD lD lD lD lD lD lD lD lD m b b";
const $settings = /*@__PURE__*/ _let("settings/14", ($scope) => {
	_text($scope["#text/0"], $scope.settings?.theme);
	_text($scope["#text/1"], $scope.settings?.count);
	_text($scope["#text/2"], $scope.settings?.removed ?? "deleted");
	_text($scope["#text/3"], $scope.settings?.kind);
	_text($scope["#text/4"], $scope.settings?.first);
	_text($scope["#text/5"], $scope.settings?.width);
	_text($scope["#text/6"], $scope.settings?.picked);
	_text($scope["#text/7"], $scope.settings?.rest);
	_text($scope["#text/8"], $scope.settings?.fallback);
	_text($scope["#text/9"], $scope.settings?.lastKey);
	_text($scope["#text/10"], $scope.settings?.lastTag);
	_text($scope["#text/11"], $scope.settings?.copy?.w);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/12"], "click", function() {
		$scope.settings.theme = "light";
		$scope.settings.count += $scope.settings?.step;
		$scope.settings.count++;
		delete $scope.settings.removed;
		$scope.settings.kind = typeof $scope.settings?.step;
		[$scope.settings.first] = $scope.settings?.tags;
		({w: $scope.settings.width} = $scope.settings?.size);
		({[$scope.settings?.key]: $scope.settings.picked} = $scope.settings?.size);
		[, ...$scope.settings.rest] = $scope.settings?.tags;
		[$scope.settings.fallback = $scope.settings?.step] = [];
		for ($scope.settings.lastKey in $scope.settings?.size) {}
		for ($scope.settings.lastTag of $scope.settings?.tags) {}
		$scope.settings.copy = { w: ($scope.settings?.size).w };
	});
	_on($scope["#button/13"], "click", function() {
		$settings($scope, { ...$scope.settings });
	});
});
function $setup($scope) {
	$settings($scope, {
		theme: "dark",
		count: 1,
		step: 2,
		removed: "kept",
		tags: [
			"x",
			"y",
			"z"
		],
		size: {
			w: 3,
			h: 4
		},
		key: "h"
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
