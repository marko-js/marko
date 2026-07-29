// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_plan = _serialize_guard($scope0_reason, 1), $sg__input_extras = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let note = "none";
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<fieldset class=plan><input${_attr_input_checkedValue($scope0_id, "#input/2", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/2", input.plan, _persisted_reason()), void 0, "basic")} type=radio name=plan class=plan-basic>${_el_resume($scope0_id, "#input/2", $sg__input_plan)}<input${_attr_input_checkedValue($scope0_id, "#input/3", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/3", input.plan, _persisted_reason()), void 0, "pro")} type=radio name=plan class=plan-pro>${_el_resume($scope0_id, "#input/3", $sg__input_plan)}<input${_attr_input_checkedValue($scope0_id, "#input/4", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/4", input.plan, _persisted_reason()), void 0, "max")} type=radio name=plan class=plan-max>${_el_resume($scope0_id, "#input/4", $sg__input_plan)}</fieldset><fieldset class=ship><input${_attr_input_checkedValue($scope0_id, "#input/5", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/5", input.ship, _persisted_reason()), _resume(function(v) {
		note = `ship ${v}`;
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), "ground")} type=radio name=ship class=ship-ground>${_el_resume($scope0_id, "#input/5")}<input${_attr_input_checkedValue($scope0_id, "#input/6", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/6", input.ship, _persisted_reason()), _resume(function(v) {
		note = `ship ${v}`;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id), "air")} type=radio name=ship class=ship-air>${_el_resume($scope0_id, "#input/6")}</fieldset><fieldset class=extras><input${_attr_input_checkedValue($scope0_id, "#input/7", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/7", input.extras, _persisted_reason()), void 0, "warranty")} type=checkbox class=extra-warranty>${_el_resume($scope0_id, "#input/7", $sg__input_extras)}<input${_attr_input_checkedValue($scope0_id, "#input/8", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/8", input.extras, _persisted_reason()), void 0, "setup")} type=checkbox class=extra-setup>${_el_resume($scope0_id, "#input/8", $sg__input_extras)}</fieldset><input${_attr_input_checked($scope0_id, "#input/9", _hole_value($scope0_id, "PatchAttr:checked:#input/9", input.gift, _persisted_reason()))} type=checkbox class=gift>${_el_resume($scope0_id, "#input/9", _serialize_guard($scope0_reason, 3))}<input${_attr_input_checkedValue($scope0_id, "#input/10", _hole_value($scope0_id, "PatchAttr:checkedValue:#input/10", input.promo, _persisted_reason()), void 0, _hole_value($scope0_id, "PatchAttr:value:#input/10", input.promoCode, _persisted_reason()))} type=checkbox name=promo class=promo>${_el_resume($scope0_id, "#input/10")}<output class=note>${_escape(note)}${_el_resume($scope0_id, "#text/11")}</output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_promoCode: (_serialize_if($scope0_reason, 5) || _patch_reason()) && input.promoCode,
		input_promo: (_serialize_if($scope0_reason, 4) || _patch_reason()) && input.promo,
		note: _seed_fill(_state_reason() && note),
		count: _seed_fill(_state_reason() && count)
	}, "__tests__/template.marko", 0, {
		input_promoCode: ["input.promoCode"],
		input_promo: ["input.promo"],
		note: "1:6",
		count: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><fieldset class=plan><input value=basic type=radio name=plan class=plan-basic><input value=pro type=radio name=plan class=plan-pro><input value=max type=radio name=plan class=plan-max></fieldset><fieldset class=ship><input value=ground type=radio name=ship class=ship-ground><input value=air type=radio name=ship class=ship-air></fieldset><fieldset class=extras><input value=warranty type=checkbox class=extra-warranty><input value=setup type=checkbox class=extra-setup></fieldset><input type=checkbox class=gift><input type=checkbox name=promo class=promo><output class=note> </output>", " Db%lD b b lD b lD b l b bD l"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><fieldset class=plan><input value=basic type=radio name=plan class=plan-basic><input value=pro type=radio name=plan class=plan-pro><input value=max type=radio name=plan class=plan-max></fieldset><fieldset class=ship><input value=ground type=radio name=ship class=ship-ground><input value=air type=radio name=ship class=ship-air></fieldset><fieldset class=extras><input value=warranty type=checkbox class=extra-warranty><input value=setup type=checkbox class=extra-setup></fieldset><input type=checkbox class=gift><input type=checkbox name=promo class=promo><output class=note> </output>", " Db%lD b b lD b lD b l b bD l"]
});
