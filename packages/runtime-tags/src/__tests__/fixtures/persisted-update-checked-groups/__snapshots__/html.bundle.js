// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_plan = _serialize_guard($scope0_reason, 1), $sg__input_extras = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let note = "none";
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<fieldset class=plan><input${_attr_input_checkedValue($scope0_id, "c", _hole_value($scope0_id, "NcheckedValue:c", input.plan, _persisted_reason()), void 0, "basic")} type=radio name=plan class=plan-basic>${_el_resume($scope0_id, "c", $sg__input_plan)}<input${_attr_input_checkedValue($scope0_id, "d", _hole_value($scope0_id, "NcheckedValue:d", input.plan, _persisted_reason()), void 0, "pro")} type=radio name=plan class=plan-pro>${_el_resume($scope0_id, "d", $sg__input_plan)}<input${_attr_input_checkedValue($scope0_id, "e", _hole_value($scope0_id, "NcheckedValue:e", input.plan, _persisted_reason()), void 0, "max")} type=radio name=plan class=plan-max>${_el_resume($scope0_id, "e", $sg__input_plan)}</fieldset><fieldset class=ship><input${_attr_input_checkedValue($scope0_id, "f", _hole_value($scope0_id, "NcheckedValue:f", input.ship, _persisted_reason()), _resume(function(v) {
		note = `ship ${v}`;
	}, "a0", $scope0_id), "ground")} type=radio name=ship class=ship-ground>${_el_resume($scope0_id, "f")}<input${_attr_input_checkedValue($scope0_id, "g", _hole_value($scope0_id, "NcheckedValue:g", input.ship, _persisted_reason()), _resume(function(v) {
		note = `ship ${v}`;
	}, "a1", $scope0_id), "air")} type=radio name=ship class=ship-air>${_el_resume($scope0_id, "g")}</fieldset><fieldset class=extras><input${_attr_input_checkedValue($scope0_id, "h", _hole_value($scope0_id, "NcheckedValue:h", input.extras, _persisted_reason()), void 0, "warranty")} type=checkbox class=extra-warranty>${_el_resume($scope0_id, "h", $sg__input_extras)}<input${_attr_input_checkedValue($scope0_id, "i", _hole_value($scope0_id, "NcheckedValue:i", input.extras, _persisted_reason()), void 0, "setup")} type=checkbox class=extra-setup>${_el_resume($scope0_id, "i", $sg__input_extras)}</fieldset><input${_attr_input_checked($scope0_id, "j", _hole_value($scope0_id, "Nchecked:j", input.gift, _persisted_reason()))} type=checkbox class=gift>${_el_resume($scope0_id, "j", _serialize_guard($scope0_reason, 3))}<input${_attr_input_checkedValue($scope0_id, "k", _hole_value($scope0_id, "NcheckedValue:k", input.promo, _persisted_reason()), void 0, _hole_value($scope0_id, "Nvalue:k", input.promoCode, _persisted_reason()))} type=checkbox name=promo class=promo>${_el_resume($scope0_id, "k", _serialize_guard($scope0_reason, 0))}<output class=note>${_escape(note)}${_el_resume($scope0_id, "l")}</output>`);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		s: (_serialize_if($scope0_reason, 5) || _patch_reason()) && input.promoCode,
		t: (_serialize_if($scope0_reason, 4) || _patch_reason()) && input.promo,
		w: _state_reason() && count
	});
	_resume_branch($scope0_id);
}, 1);
