// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $attempt__closures = /* @__PURE__ */ new Set();
	let attempt = 1;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", resolveAfter("body", 3), (value) => {
			const $scope4_id = _scope_id();
			_html(`<p>${_text_resume($scope4_id, "a", value)}</p>`);
			_scope($scope4_id, {});
		});
		_subscribe($attempt__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cc: 1
		}), "a2", 0);
		_resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>retry ${_text_resume($scope1_id, "b", attempt, 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_subscribe($attempt__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "a", err.message, $wg__err_message)}</b>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, "a3", "a4");
	_scope($scope0_id, {
		b: attempt,
		c: $attempt__closures
	});
	_resume_branch($scope0_id);
}, 1);
