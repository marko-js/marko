// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_note = _serialize_guard($scope0_reason, 1), $sg__input_tick = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_tick__closures = new Set();
	let show = true;
	_html(`<button class=toggle>${show ? "hide" : "show"}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2_content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter(input.note, input.tick), (note) => {
					const $scope4_id = _scope_id();
					_html(`<p class=note>${_escape(_hole_value($scope4_id, "PatchHole:#text/0", note, _persisted_reason()))}${_el_resume($scope4_id, "#text/0", $sg__input_note__OR__input_tick)}</p>`);
					$sg__input_note__OR__input_tick && writeScope($scope4_id, {}, "__tests__/template.marko", "9:8");
				}, $sg__input_note__OR__input_tick);
				_subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_note && $input_note__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6")));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("loading…");
			}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/0");
			_html("</section>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_note: input.note,
		input_tick: input.tick,
		show: _state_reason() && show,
		"ClosureScopes:input_note": $sg__input_note && $input_note__closures,
		"ClosureScopes:input_tick": $sg__input_tick && $input_tick__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_tick: ["input.tick"],
		show: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
