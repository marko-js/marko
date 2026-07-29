// template.marko.persisted.mjs
const $template = "<h1 class=title> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><ul class=items></ul><!><!>";
const $walks = "D l b Db%l b%c";
const $for_content2__tag = ($scope, tag) => _text($scope["#text/0"], tag);
const $for_content2__$params = ($scope, $params3) => $for_content2__tag($scope, $params3[0]);
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $if_content__input_note = /*@__PURE__*/ _if_closure("#text/5", 0, ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$if_content__input_tags._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=tag> </li>", "D ", 0, $for_content2__$params);
const $if_content__input_tags = /*@__PURE__*/ _if_closure("#text/5", 0, ($scope) => $if_content__for($scope, [$scope._.input_tags]));
const $if = /*@__PURE__*/ _if("#text/5", "<section class=details><p class=note> </p><ol class=tags></ol></section>", "E l ", $if_content__setup);
const $showDetails = _var_resume("__tests__/template.marko_0_showDetails/var", /*@__PURE__*/ _let_persisted("showDetails/12", ($scope) => $if($scope, $scope.showDetails ? 0 : 1)));
const $clicks = _var_resume("__tests__/template.marko_0_clicks/var", /*@__PURE__*/ _let_persisted("clicks/13", ($scope) => _text($scope["#text/3"], $scope.clicks)));
const $setup__script = _script_shared(($scope) => {
	_on($scope["#button/1"], "click", function() {
		$showDetails($scope, !$scope.showDetails);
	});
	_on($scope["#button/2"], "click", function() {
		$clicks($scope, $scope.clicks + 1);
	});
});
function $setup($scope) {
	$showDetails($scope, true);
	$clicks($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $for = 0;
const $input_items = ($scope, input_items) => {
	if (!updating) $for($scope, [input_items, (item) => item.id]);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_items($scope, input.items);
	$input_note($scope, input.note);
	$input_tags($scope, input.tags);
};
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $if_content__input_note);
const $input_tags = /*@__PURE__*/ _const_persisted("input_tags", $if_content__input_tags);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $showDetails_seed = _update_signal("__tests__/template.marko_0_showDetails/var");
const $clicks_seed = _update_signal("__tests__/template.marko_0_clicks/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $construct = ($scope) => {
	_text($scope["#text/3"], $scope.clicks);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("showDetails" in $patch) _update_seed($live, $showDetails_seed, $patch["showDetails"]);
	if ("clicks" in $patch) _update_seed($live, $clicks_seed, $patch["clicks"]);
	if ("input_note" in $patch) {
		$live["input_note"] = $patch["input_note"];
		$if_content__input_note($live);
	}
	if ("input_tags" in $patch) {
		$live["input_tags"] = $patch["input_tags"];
		$if_content__input_tags($live);
	}
	$_holes($patch, $live);
	if ("ConditionalRenderer:#ul/4" in $patch) _update_region("#ul/4")($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_update", $noop_update);
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<h1 class=title> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><ul class=items></ul><!><!>";
const $walks = "D l b Db%l b%c";
const $for_content2__tag = ($scope, tag) => _text($scope["#text/0"], tag);
const $for_content2__$params = ($scope, $params3) => $for_content2__tag($scope, $params3[0]);
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $if_content__input_note = /*@__PURE__*/ _if_closure("#text/5", 0, ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$if_content__input_tags._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=tag> </li>", "D ", 0, $for_content2__$params);
const $if_content__input_tags = /*@__PURE__*/ _if_closure("#text/5", 0, ($scope) => $if_content__for($scope, [$scope._.input_tags]));
const $if = /*@__PURE__*/ _if("#text/5", "<section class=details><p class=note> </p><ol class=tags></ol></section>", "E l ", $if_content__setup);
const $showDetails = /*@__PURE__*/ _let_persisted("showDetails/12", ($scope) => $if($scope, $scope.showDetails ? 0 : 1));
const $clicks = /*@__PURE__*/ _let_persisted("clicks/13", ($scope) => _text($scope["#text/3"], $scope.clicks));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$showDetails($scope, !$scope.showDetails);
	});
	_on($scope["#button/2"], "click", function() {
		$clicks($scope, $scope.clicks + 1);
	});
});
function $setup($scope) {
	$showDetails($scope, true);
	$clicks($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $for = /*@__PURE__*/ _for_of("#ul/4", "<li class=item> </li>", "D ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => {
	if (!updating) $for($scope, [input_items, (item) => item.id]);
};
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_items($scope, input.items);
	$input_note($scope, input.note);
	$input_tags($scope, input.tags);
};
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $if_content__input_note);
const $input_tags = /*@__PURE__*/ _const_persisted("input_tags", $if_content__input_tags);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
