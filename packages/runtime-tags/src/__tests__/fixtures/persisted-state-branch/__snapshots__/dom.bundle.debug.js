// template.marko.update.mjs
const $show_seed = _update_signal("__tests__/template.marko_0_show/var");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $list_seed = _update_signal("__tests__/template.marko_0_list/var");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("show" in patch) _update_seed(live, $show_seed, patch["show"]);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("list" in patch) _update_seed(live, $list_seed, patch["list"]);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_title" in patch) live["input_title"] = patch["input_title"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<h1> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><!><ul class=items></ul><button class=add>add</button>";
const $walks = "D l b Db%l%b b b";
const $for_content__count = /* @__PURE__ */ _for_closure("#ul/5", ($scope) => _text($scope["#text/1"], $scope._.count));
const $for_content__setup = $for_content__count;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__count = /* @__PURE__ */ _if_closure("#text/4", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $if = /* @__PURE__ */ _if("#text/4", "<p class=detail>detail <!></p>", "Db%l", $if_content__setup);
const $show = /* @__PURE__ */ _let("show/10", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $count = /* @__PURE__ */ _let("count/11", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$if_content__count($scope);
	$for_content__count($scope);
});
const $for = /* @__PURE__ */ _for_of("#ul/5", "<li><!>:<!></li>", "D%c%l", $for_content__setup, $for_content__$params);
const $list = /* @__PURE__ */ _let("list/12", ($scope) => $for($scope, [$scope.list, function(item) {
	return item;
}]));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/6"], "click", function() {
		$list($scope, [...$scope.list, `c${$scope.count}`]);
	});
});
function $setup($scope) {
	$show($scope, true);
	$count($scope, 0);
	$list($scope, ["a", "b"]);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
enableBranches();
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
