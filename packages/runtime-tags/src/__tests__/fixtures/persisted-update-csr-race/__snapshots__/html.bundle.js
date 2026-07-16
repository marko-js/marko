// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}<section>`);
	_try($scope0_id, "d", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.note, 1), (note) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a5");
			_html(`<p>clicked <!>${_escape(count)}${_el_resume($scope2_id, "a")} times -- ${_sep($sg__input_note)}${_escape(_hole_value($scope2_id, "Qb", note, _persisted_reason()))}${_el_resume($scope2_id, "b", $sg__input_note)}</p>`);
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		}, 1 | _persisted_reason());
		_subscribe($sg__input_note && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		_scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "a0");
	_html("</section>");
	_script($scope0_id, "a6");
	writeScope($scope0_id, {
		i: _state_reason() && count,
		k: $count__closures,
		j: $sg__input_note && $input_note__closures
	});
	_resume_branch($scope0_id);
}, 1);
