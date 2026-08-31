// tags/note.marko
var note_default = _template("__tests__/tags/note.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.label, _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/tags/note.marko_0_input_label#3");
	writeScope($scope0_id, { input_label: input.label }, "__tests__/tags/note.marko", 0, { input_label: ["input.label"] });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = new Set();
	let clicks = 0;
	_html(`<button>clicks ${_text_resume($scope0_id, "#text/1", clicks, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("outer", 2), (outer) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_clicks#3/pending");
			_html(`<p>${_escape(outer)} ${_text_resume($scope2_id, "#text/1", clicks, 2)}</p>`);
			_try($scope2_id, "#text/2", _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "#text/0", resolveAfter("inner", 4), (inner) => {
					const $scope4_id = _scope_id();
					_script($scope4_id, "__tests__/template.marko_4_clicks#3/pending");
					_set_serialize_reason(1);
					const $childScope = _peek_scope_id();
					note_default({ label: `${inner} ${clicks}` });
					writeScope($scope4_id, {
						inner,
						_: _scope_with_id($scope3_id),
						"#childScope/0": _existing_scope($childScope),
						"ClosureSignalIndex:clicks": 1
					}, "__tests__/template.marko", "11:8", { inner: "11:14" });
					_resume_branch($scope4_id);
				});
				writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "9:6");
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_6*content", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				note_default({ label: "inner placeholder" });
			}, $scope2_id) }) });
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		note_default({ label: "outer placeholder" });
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		clicks,
		"ClosureScopes:clicks": $clicks__closures
	}, "__tests__/template.marko", 0, { clicks: "3:6" });
	_resume_branch($scope0_id);
}, 1);
