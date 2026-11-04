// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1",
	a2: "a2;D ;<span> </span>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 0);
			_await($scope2_id, "a", input.promise, (value) => {
				const $scope6_id = _scope_id();
				_html(`<span>${_text_mark($scope6_id, "a", value, 1, $scope0_reason, 0)}</span>`);
				_scope($scope6_id, {});
			}, 1, "a0", $ui__input_promise && 2, 1);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a5", 1);
			$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 0) && "a5", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("inner");
		}, (err) => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`<em>${_text_mark($scope5_id, "a", err.message, 1, 4, 0)}</em>`);
			_scope($scope5_id, {});
		}, "a6", "a1", "a3", 1, 1);
		$wi__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer");
	}, void 0, "a7", void 0, "a4", 1);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);
