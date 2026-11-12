// template.marko
function boom(m) {
	throw new Error(m);
}
_shells({
	a1: "a1,<em>loading</em>",
	a3: "a3,<em>caught</em>",
	a2: "a2;D ;<p> </p>",
	a4: "a4;b%;<!><!><!>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_any_client_guard($scope0_reason);
	const $cg__input_err = _client_guard($scope0_reason, 0), $wi__input_err = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_err__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", input.err ? boom(input.err) : "ok", 1, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a0", $cg__input_err);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_err__closures, _scope($scope2_id, { _: $wi__input_err && _scope_with_id($scope1_id) }), $cg__input_err && "a0");
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<em>loading</em>");
		}, void 0, "a1", void 0, "a2", 1, 0, 2);
		$wi__input_err && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<em>caught</em>");
	}, 0, "a3", "a4", 1, 0, 1);
	_scope($scope0_id, { e: $wi__input_err && _unfilled_if($scope0_reason, 0) && $input_err__closures });
}, 1);
