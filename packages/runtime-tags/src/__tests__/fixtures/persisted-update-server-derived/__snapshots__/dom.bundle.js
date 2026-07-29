// template.marko.persisted.mjs
const $if_content__walks = "E lDb%l l", $if_content__template = "<section><h2> </h2><p>costs <!></p><button class=copy>use price</button></section>", $else_content__walks = "b", $else_content__template = "<p>no selection</p>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__details_price__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $if_content__details_price = _var_resume("a9", /*@__PURE__*/ _const_persisted(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if_content__details_price__script($scope);
}));
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a3": [$else_content__template, $else_content__walks],
	"a7": [$else_content__template, $else_content__walks],
	"a4": [$if_content__template, $if_content__walks],
	"a8": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $details_price_update = _update_signal("a9");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a10");
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope.f);
	_construct_effect($scope, $if_content__details_price__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) $details_price_update($live, $patch["f"]);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update, 0], ["a4", "a3"]);
};
_construct("a4", $if_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a4", $if_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__details_price__script = _script_update("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
