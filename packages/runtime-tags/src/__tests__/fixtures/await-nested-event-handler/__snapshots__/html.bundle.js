// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $changes__closures = /* @__PURE__ */ new Set();
	let changes = 0;
	_try($scope0_id, "a", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("outer", 1), () => {
			const $scope2_id = _scope_id();
			_try($scope2_id, "a", _content_resume("a3", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "a", resolveAfter("inner", 2), () => {
					const $scope4_id = _scope_id();
					_script($scope4_id, "a0");
					_html(`<div>changes: <!>${_escape(changes)}${_el_resume($scope4_id, "b")}</div>${_el_resume($scope4_id, "a")}`);
					_script($scope4_id, "a1");
					writeScope($scope4_id, { _: _scope_with_id($scope3_id) });
					_resume_branch($scope4_id);
				});
				writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
				_scope_reason();
				_scope_id();
				_html("loading inner...");
			}, $scope2_id) }) });
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		_html("loading outer...");
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		b: changes,
		c: $changes__closures
	});
	_resume_branch($scope0_id);
}, 1);
