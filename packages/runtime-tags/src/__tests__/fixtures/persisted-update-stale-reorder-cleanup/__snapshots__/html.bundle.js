// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_value = _serialize_guard($scope0_reason, 2), $sg__input_tick = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	const $input_tick__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qb", input.heading, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 1))}</h1>${_el_resume($scope0_id, "a")}<main>`);
	_try($scope0_id, "c", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.value, input.tick), (value) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_escape(_hole_value($scope3_id, "Qa", value, _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__input_value__OR__input_tick)}</b>`);
			$sg__input_value__OR__input_tick && writeScope($scope3_id, {});
		}, $sg__input_value__OR__input_tick);
		$sg__input_value__OR__input_tick && _subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_value && $input_value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("fetching…");
	}, $scope0_id) }) }, "a0");
	_html("</main>");
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		g: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.value,
		h: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.tick,
		i: _state_reason() && n,
		j: $sg__input_value && $input_value__closures,
		k: $sg__input_tick && $input_tick__closures
	});
	_resume_branch($scope0_id);
}, 1);
