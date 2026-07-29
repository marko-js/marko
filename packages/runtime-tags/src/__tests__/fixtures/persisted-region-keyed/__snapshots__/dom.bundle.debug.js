// template.marko.persisted.mjs
const $for_content__walks = "D D l%l", $for_content__template = "<article class=item><button class=open> </button><!></article>";
const $template = "<!><!><p class=opens><!> opened</p>";
const $walks = "b%bD%l";
const $if_content__item_badge = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.item_badge);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__item_badge._($scope);
};
const $for_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$opens($scope._, $scope._.opens + 1);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__item_title = ($scope, item_title) => _text($scope["#text/1"], item_title);
const $for_content__if = /*@__PURE__*/ _if("#text/2", "<span class=badge> </span>", "D ", $if_content__setup);
const $for_content__item_badge = /*@__PURE__*/ _const_persisted("item_badge", ($scope) => {
	if (!updating) $for_content__if($scope, $scope.item_badge ? 0 : 1);
	$if_content__item_badge($scope);
});
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_title($scope, $params2[0]?.title);
	$for_content__item_badge($scope, $params2[0]?.badge);
};
const $opens = _var_resume("__tests__/template.marko_0_opens/var", /*@__PURE__*/ _let_persisted("opens/5", ($scope) => _text($scope["#text/1"], $scope.opens)));
function $setup($scope) {
	$opens($scope, 0);
}
const $for = 0;
const $input_items = ($scope, input_items) => {
	if (!updating) $for($scope, [input_items, function(item) {
		return item.id;
	}]);
};
const $input = ($scope, input) => $input_items($scope, input.items);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $opens_seed = _update_signal("__tests__/template.marko_0_opens/var");
const $for_update = _update_for_keyed("#text/0", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("item_badge" in $patch) $live["item_badge"] = $patch["item_badge"];
	$for_content_holes($patch, $live);
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.opens);
};
const $update2 = ($patch, $live) => {
	if ("opens" in $patch) _update_seed($live, $opens_seed, $patch["opens"]);
	if ("BranchScopes:#text/0" in $patch) $for_update($live, [$patch["BranchScopes:#text/0"], "#LoopKey"]);
};
_construct("__tests__/template.marko_1_update", $for_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<!><!><p class=opens><!> opened</p>";
const $walks = "b%bD%l";
const $if_content__item_badge = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.item_badge);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__item_badge._($scope);
};
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$opens($scope._, $scope._.opens + 1);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__item_title = ($scope, item_title) => _text($scope["#text/1"], item_title);
const $for_content__if = /*@__PURE__*/ _if("#text/2", "<span class=badge> </span>", "D ", $if_content__setup);
const $for_content__item_badge = /*@__PURE__*/ _const_persisted("item_badge", ($scope) => {
	if (!updating) $for_content__if($scope, $scope.item_badge ? 0 : 1);
	$if_content__item_badge($scope);
});
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_title($scope, $params2[0]?.title);
	$for_content__item_badge($scope, $params2[0]?.badge);
};
const $opens = /*@__PURE__*/ _let_persisted("opens/5", ($scope) => _text($scope["#text/1"], $scope.opens));
function $setup($scope) {
	$opens($scope, 0);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<article class=item><button class=open> </button><!></article>", "D D l%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => {
	if (!updating) $for($scope, [input_items, function(item) {
		return item.id;
	}]);
};
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
