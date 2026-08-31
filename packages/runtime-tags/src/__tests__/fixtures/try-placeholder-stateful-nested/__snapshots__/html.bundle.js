// tags/note.marko
var note_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.label, _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { d: input.label });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = /* @__PURE__ */ new Set();
	let clicks = 0;
	_html(`<button>clicks ${_text_resume($scope0_id, "b", clicks, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("outer", 2), (outer) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a3");
			_html(`<p>${_escape(outer)} ${_text_resume($scope2_id, "b", clicks, 2)}</p>`);
			_try($scope2_id, "c", _content_resume("a2", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "a", resolveAfter("inner", 4), (inner) => {
					const $scope4_id = _scope_id();
					_script($scope4_id, "a0");
					_set_serialize_reason(1);
					const $childScope = _peek_scope_id();
					note_default({ label: `${inner} ${clicks}` });
					writeScope($scope4_id, {
						c: inner,
						_: _scope_with_id($scope3_id),
						a: _existing_scope($childScope),
						Ce: 1
					});
					_resume_branch($scope4_id);
				});
				writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
				_scope_reason();
				_scope_id();
				note_default({ label: "inner placeholder" });
			}, $scope2_id) }) });
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		note_default({ label: "outer placeholder" });
	}, $scope0_id) }) });
	_script($scope0_id, "a6");
	writeScope($scope0_id, {
		d: clicks,
		e: $clicks__closures
	});
	_resume_branch($scope0_id);
}, 1);
