// template.marko
function boom() {
	throw new Error("boom");
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.show ? boom() : "ok", $wg__input_show)}</p>`);
		$wi__input_show && _subscribe($input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_show);
		$wg__input_show || $wi__input_show && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_escape(x)}</b>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope2_id);
	}, void 0, "a1");
	_scope($scope0_id, {
		f: x,
		g: $wi__input_show && $input_show__closures
	});
	_resume_branch($scope0_id);
}, 1);
