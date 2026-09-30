// template.marko
const $template = "<ul><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li></ul><button class=mutate>mutate</button><button class=apply>apply</button>";
const $walks = "E lD lD lD lD lD lD lD lD lD lD lD m b b";
const $settings = /*@__PURE__*/ _let("settings/14", ($scope) => {
	$settings_theme($scope, $scope.settings?.theme);
	$settings_count($scope, $scope.settings?.count);
	$settings_removed($scope, $scope.settings?.removed);
	$settings_kind($scope, $scope.settings?.kind);
	$settings_first($scope, $scope.settings?.first);
	$settings_width($scope, $scope.settings?.width);
	$settings_picked($scope, $scope.settings?.picked);
	$settings_rest($scope, $scope.settings?.rest);
	$settings_fallback($scope, $scope.settings?.fallback);
	$settings_lastKey($scope, $scope.settings?.lastKey);
	$settings_lastTag($scope, $scope.settings?.lastTag);
	$settings_copy($scope, $scope.settings?.copy);
});
const $settings_theme = /*@__PURE__*/ _const("settings_theme", ($scope) => _text($scope["#text/0"], $scope.settings_theme));
const $settings_count = /*@__PURE__*/ _const("settings_count", ($scope) => _text($scope["#text/1"], $scope.settings_count));
const $settings_removed = /*@__PURE__*/ _const("settings_removed", ($scope) => _text($scope["#text/2"], $scope.settings_removed ?? "deleted"));
const $settings_kind = /*@__PURE__*/ _const("settings_kind", ($scope) => _text($scope["#text/3"], $scope.settings_kind));
const $settings_first = /*@__PURE__*/ _const("settings_first", ($scope) => _text($scope["#text/4"], $scope.settings_first));
const $settings_width = /*@__PURE__*/ _const("settings_width", ($scope) => _text($scope["#text/5"], $scope.settings_width));
const $settings_picked = /*@__PURE__*/ _const("settings_picked", ($scope) => _text($scope["#text/6"], $scope.settings_picked));
const $settings_rest = /*@__PURE__*/ _const("settings_rest", ($scope) => _text($scope["#text/7"], $scope.settings_rest));
const $settings_fallback = /*@__PURE__*/ _const("settings_fallback", ($scope) => _text($scope["#text/8"], $scope.settings_fallback));
const $settings_lastKey = /*@__PURE__*/ _const("settings_lastKey", ($scope) => _text($scope["#text/9"], $scope.settings_lastKey));
const $settings_lastTag = /*@__PURE__*/ _const("settings_lastTag", ($scope) => _text($scope["#text/10"], $scope.settings_lastTag));
const $settings_copy = /*@__PURE__*/ _const("settings_copy", ($scope) => $settings_copy_w($scope, $scope.settings_copy?.w));
const $settings_copy_w = /*@__PURE__*/ _const("settings_copy_w", ($scope) => _text($scope["#text/11"], $scope.settings_copy_w));
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
