// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 0);
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", value, 1, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", $ui__input_promise && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a4", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a4", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_text_mark($scope2_id, "a", err.message, 1, 4, 0)}</em>`);
		_scope($scope2_id, {});
	}, 0, "a1", "a3", 1, 1);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);
