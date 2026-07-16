// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_eta__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_eta = _serialize_guard($scope0_reason, 3), $sg__input_tick = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_eta__closures = /* @__PURE__ */ new Set();
	const $input_tick__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_attr_select_value($scope0_id, "d", _hole_value($scope0_id, "Nvalue:d", input.ship, _persisted_reason()), void 0, () => {
		_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "c", _hole_value($scope0_id, "Nvalue:c", input.sku, _persisted_reason()))} class=sku>${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 1))}<select class=ship><option${_attr_option_value("ground")}>ground</option><option${_attr_option_value("air")}>air</option><option${_attr_option_value("sea")}>sea</option></select>`);
	});
	_html(_el_resume($scope0_id, "d", _serialize_guard($scope0_reason, 2)));
	_try($scope0_id, "e", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.eta, input.tick), (eta) => {
			const $scope3_id = _scope_id();
			_html(`<p class=eta>${_escape(_hole_value($scope3_id, "Qa", eta, _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__input_eta__OR__input_tick)}</p>`);
			$sg__input_eta__OR__input_tick && writeScope($scope3_id, {});
		}, $sg__input_eta__OR__input_tick);
		$sg__input_eta__OR__input_tick && _subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_eta && $input_eta__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "a0");
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		j: (_serialize_if($scope0_reason, 4) || _patch_reason()) && input.eta,
		k: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.tick,
		l: _state_reason() && count,
		m: $sg__input_eta && $input_eta__closures,
		n: $sg__input_tick && $input_tick__closures
	});
	_resume_branch($scope0_id);
}, 1);
