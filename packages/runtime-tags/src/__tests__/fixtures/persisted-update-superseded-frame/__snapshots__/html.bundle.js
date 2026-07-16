// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_note = _serialize_guard($scope0_reason, 1), $sg__input_tick = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_tick__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button class=toggle>hide${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<section>");
			_try($scope1_id, "a", _content_resume("a2", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(input.note, input.tick), (note) => {
					const $scope4_id = _scope_id();
					_html(`<p class=note>${_escape(_hole_value($scope4_id, "Qa", note, _persisted_reason()))}${_el_resume($scope4_id, "a", $sg__input_note__OR__input_tick)}</p>`);
					$sg__input_note__OR__input_tick && writeScope($scope4_id, {});
				}, $sg__input_note__OR__input_tick);
				_subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_note && $input_note__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) })));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
				_scope_reason();
				_scope_id();
				_html("loading…");
			}, $scope1_id) }) }, "a0");
			_html("</section>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a6");
	writeScope($scope0_id, {
		f: input.note,
		g: input.tick,
		h: _state_reason() && show,
		i: $sg__input_note && $input_note__closures,
		j: $sg__input_tick && $input_tick__closures
	});
	_resume_branch($scope0_id);
}, 1);
