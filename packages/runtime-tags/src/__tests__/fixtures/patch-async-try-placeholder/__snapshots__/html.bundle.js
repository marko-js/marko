// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a;E l%;<main><h1> </h1><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 1);
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", value, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", $ui__input_promise && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a3", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a3", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a4", void 0, "a2", 1);
	_html("</main>");
	_scope($scope0_id, { g: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures });
}, 1);
