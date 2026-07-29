// template.marko.persisted.mjs
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_promoText = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_promoText);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_promoText._($scope);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<div class=promo><strong>sale!</strong> <!></div>", "Dc%", $if_content__setup);
const $input_promo = ($scope, input_promo) => {
	if (!updating) $if($scope, input_promo ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_promo($scope, input.promo);
	$input_promoText($scope, input.promoText);
};
const $input_promoText = /*@__PURE__*/ _const_persisted("input_promoText", $if_content__input_promoText);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_promoText" in $patch) $live["input_promoText"] = $patch["input_promoText"];
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_promoText = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_promoText);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_promoText._($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<div class=promo><strong>sale!</strong> <!></div>", "Dc%", $if_content__setup);
const $input_promo = ($scope, input_promo) => {
	if (!updating) $if($scope, input_promo ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_promo($scope, input.promo);
	$input_promoText($scope, input.promoText);
};
const $input_promoText = /*@__PURE__*/ _const_persisted("input_promoText", $if_content__input_promoText);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
