// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = /* @__PURE__ */ new Set();
	let clicks = 0;
	_try($scope0_id, "a", _content_resume("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", resolveAfter("done", 1), () => {
			const $scope3_id = _scope_id();
			_script($scope3_id, "a1");
			_html(`<button>loaded ${_text_resume($scope3_id, "b", clicks, 2)}</button>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "a2");
			writeScope($scope3_id, {
				_: _scope_with_id($scope2_id),
				Cc: 1
			});
			_resume_branch($scope3_id);
		});
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>loading ${_text_resume($scope1_id, "b", clicks, 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_subscribe($clicks__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		b: clicks,
		c: $clicks__closures
	});
	_resume_branch($scope0_id);
}, 1);
