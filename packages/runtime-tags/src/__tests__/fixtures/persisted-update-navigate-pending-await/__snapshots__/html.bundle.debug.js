// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_data__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_data = _serialize_guard($scope0_reason, 2), $sg__input_tick = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_data__closures = new Set();
	const $input_tick__closures = new Set();
	let x = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 1))}</h1>${_el_resume($scope0_id, "#h1/0")}<section>`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.data, input.tick), (data) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_escape(_hole_value($scope3_id, "PatchHole:#text/0", data, _persisted_reason()))}${_el_resume($scope3_id, "#text/0", $sg__input_data__OR__input_tick)}</p>`);
			$sg__input_data__OR__input_tick && writeScope($scope3_id, {}, "__tests__/template.marko", "10:6");
		}, $sg__input_data__OR__input_tick);
		$sg__input_data__OR__input_tick && _subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_data && $input_data__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4")));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "__tests__/template.marko_0/update_boundary_#text/2");
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_data: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.data,
		input_tick: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.tick,
		x: _state_reason() && x,
		"ClosureScopes:input_data": $sg__input_data && $input_data__closures,
		"ClosureScopes:input_tick": $sg__input_tick && $input_tick__closures
	}, "__tests__/template.marko", 0, {
		input_data: ["input.data"],
		input_tick: ["input.tick"],
		x: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
