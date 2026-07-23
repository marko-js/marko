// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><fieldset class=plan><input value=basic type=radio name=plan class=plan-basic><input value=pro type=radio name=plan class=plan-pro><input value=max type=radio name=plan class=plan-max></fieldset><fieldset class=ship><input value=ground type=radio name=ship class=ship-ground><input value=air type=radio name=ship class=ship-air></fieldset><fieldset class=extras><input value=warranty type=checkbox class=extra-warranty><input value=setup type=checkbox class=extra-setup></fieldset><input type=checkbox class=gift><input type=checkbox name=promo class=promo><output class=note> </output>";
const $walks = " Db%lD b b lD b lD b l b bD l";
const $note = _var_resume("__tests__/template.marko_0_note/var", /*@__PURE__*/ _let_persisted("note/21", ($scope) => _text($scope["#text/11"], $scope.note)));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/22", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_attr_input_checkedValue_script($scope, "#input/5");
	_attr_input_checkedValue_script($scope, "#input/6");
});
function $setup($scope) {
	$note($scope, "none");
	$count($scope, 0);
	$setup__script($scope);
}
const $input_plan = /*@__PURE__*/ _const_persisted("input_plan", ($scope) => {
	_attr_input_checkedValue_default($scope, "#input/2", $scope.input_plan, "basic");
	_attr_input_checkedValue_default($scope, "#input/3", $scope.input_plan, "pro");
	_attr_input_checkedValue_default($scope, "#input/4", $scope.input_plan, "max");
});
const $input_ship = /*@__PURE__*/ _const_persisted("input_ship", ($scope) => {
	_attr_input_checkedValue($scope, "#input/5", $scope.input_ship, $checkedValueChange($scope), "ground");
	_attr_input_checkedValue($scope, "#input/6", $scope.input_ship, $checkedValueChange2($scope), "air");
});
const $input_extras = /*@__PURE__*/ _const_persisted("input_extras", ($scope) => {
	_attr_input_checkedValue_default($scope, "#input/7", $scope.input_extras, "warranty");
	_attr_input_checkedValue_default($scope, "#input/8", $scope.input_extras, "setup");
});
const $input_gift = /*@__PURE__*/ _const_persisted("input_gift", ($scope) => _attr_input_checked_default($scope, "#input/9", $scope.input_gift));
const $input_promoCode__OR__input_promo = /*@__PURE__*/ _or(20, ($scope) => _attr_input_checkedValue_default($scope, "#input/10", $scope.input_promo, $scope.input_promoCode));
const $input_promoCode = /*@__PURE__*/ _const_persisted("input_promoCode", $input_promoCode__OR__input_promo);
const $input_promo = /*@__PURE__*/ _const_persisted("input_promo", $input_promoCode__OR__input_promo);
const $input = ($scope, input) => {
	$input_plan($scope, input.plan);
	$input_ship($scope, input.ship);
	$input_extras($scope, input.extras);
	$input_gift($scope, input.gift);
	$input_promoCode($scope, input.promoCode);
	$input_promo($scope, input.promo);
};
function $checkedValueChange2($scope) {
	return function(v) {
		$note($scope, `ship ${v}`);
	};
}
function $checkedValueChange($scope) {
	return function(v) {
		$note($scope, `ship ${v}`);
	};
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $note_seed = _update_signal("__tests__/template.marko_0_note/var");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:checkedValue:#input/2": /*@__PURE__*/ _update_controllable("#input/2", _update_input_checkedValue),
	"PatchAttr:checkedValue:#input/3": /*@__PURE__*/ _update_controllable("#input/3", _update_input_checkedValue),
	"PatchAttr:checkedValue:#input/4": /*@__PURE__*/ _update_controllable("#input/4", _update_input_checkedValue),
	"PatchAttr:checkedValue:#input/5": /*@__PURE__*/ _update_controllable("#input/5", _update_input_checkedValue),
	"PatchAttr:checkedValue:#input/6": /*@__PURE__*/ _update_controllable("#input/6", _update_input_checkedValue),
	"PatchAttr:checkedValue:#input/7": /*@__PURE__*/ _update_controllable("#input/7", _update_input_checkedValue),
	"PatchAttr:checkedValue:#input/8": /*@__PURE__*/ _update_controllable("#input/8", _update_input_checkedValue),
	"PatchAttr:checked:#input/9": /*@__PURE__*/ _update_controllable("#input/9", _update_input_checked),
	"PatchAttr:value:#input/10": /*@__PURE__*/ _update_named_attr("#input/10", "value"),
	"PatchAttr:checkedValue:#input/10": /*@__PURE__*/ _update_controllable("#input/10", _update_input_checkedValue)
});
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_attr_input_checkedValue_default($scope, "#input/10", $scope.input_promo, $scope.input_promoCode);
	_text($scope["#text/11"], $scope.note);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("note" in $patch) _update_seed($live, $note_seed, $patch["note"]);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_promoCode" in $patch) $live["input_promoCode"] = $patch["input_promoCode"];
	if ("input_promo" in $patch) $live["input_promo"] = $patch["input_promo"];
	$_holes($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><fieldset class=plan><input value=basic type=radio name=plan class=plan-basic><input value=pro type=radio name=plan class=plan-pro><input value=max type=radio name=plan class=plan-max></fieldset><fieldset class=ship><input value=ground type=radio name=ship class=ship-ground><input value=air type=radio name=ship class=ship-air></fieldset><fieldset class=extras><input value=warranty type=checkbox class=extra-warranty><input value=setup type=checkbox class=extra-setup></fieldset><input type=checkbox class=gift><input type=checkbox name=promo class=promo><output class=note> </output>";
const $walks = " Db%lD b b lD b lD b l b bD l";
const $note = /*@__PURE__*/ _let_persisted("note/21", ($scope) => _text($scope["#text/11"], $scope.note));
const $count = /*@__PURE__*/ _let_persisted("count/22", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_attr_input_checkedValue_script($scope, "#input/5");
	_attr_input_checkedValue_script($scope, "#input/6");
});
function $setup($scope) {
	$note($scope, "none");
	$count($scope, 0);
	$setup__script($scope);
}
const $input_plan = /*@__PURE__*/ _const_persisted("input_plan", ($scope) => {
	_attr_input_checkedValue_default($scope, "#input/2", $scope.input_plan, "basic");
	_attr_input_checkedValue_default($scope, "#input/3", $scope.input_plan, "pro");
	_attr_input_checkedValue_default($scope, "#input/4", $scope.input_plan, "max");
});
const $input_ship = /*@__PURE__*/ _const_persisted("input_ship", ($scope) => {
	_attr_input_checkedValue($scope, "#input/5", $scope.input_ship, $checkedValueChange($scope), "ground");
	_attr_input_checkedValue($scope, "#input/6", $scope.input_ship, $checkedValueChange2($scope), "air");
});
const $input_extras = /*@__PURE__*/ _const_persisted("input_extras", ($scope) => {
	_attr_input_checkedValue_default($scope, "#input/7", $scope.input_extras, "warranty");
	_attr_input_checkedValue_default($scope, "#input/8", $scope.input_extras, "setup");
});
const $input_gift = /*@__PURE__*/ _const_persisted("input_gift", ($scope) => _attr_input_checked_default($scope, "#input/9", $scope.input_gift));
const $input_promoCode__OR__input_promo = /*@__PURE__*/ _or(20, ($scope) => _attr_input_checkedValue_default($scope, "#input/10", $scope.input_promo, $scope.input_promoCode));
const $input_promoCode = /*@__PURE__*/ _const_persisted("input_promoCode", $input_promoCode__OR__input_promo);
const $input_promo = /*@__PURE__*/ _const_persisted("input_promo", $input_promoCode__OR__input_promo);
const $input = ($scope, input) => {
	$input_plan($scope, input.plan);
	$input_ship($scope, input.ship);
	$input_extras($scope, input.extras);
	$input_gift($scope, input.gift);
	$input_promoCode($scope, input.promoCode);
	$input_promo($scope, input.promo);
};
function $checkedValueChange2($scope) {
	return function(v) {
		$note($scope, `ship ${v}`);
	};
}
function $checkedValueChange($scope) {
	return function(v) {
		$note($scope, `ship ${v}`);
	};
}
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
_resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
