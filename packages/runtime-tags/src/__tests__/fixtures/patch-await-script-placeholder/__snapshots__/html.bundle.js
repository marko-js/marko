// template.marko
_shells({
	a1: "a1;D ;<span id=v> </span>",
	a2: "a2",
	a3: "a3;D ;<span id=v> </span>",
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
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 0);
		const $scope3_id = _await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_filled_guard($scope0_reason, 0) && _patch_write($scope3_id, "xc", value, !_server_guard($scope0_reason, 0));
			_html(`<span id=v>${_text_mark($scope3_id, "a", value, 1, $scope0_reason, 0)}</span>`);
			_script($scope3_id, "a0", 1, _filled_guard($scope0_reason, 0));
			_scope($scope3_id, { c: value });
		}, 1, "a1", $ui__input_promise && 2, 1);
		if ($scope3_id) _script($scope3_id, "a0", 1, _filled_guard($scope0_reason, 0));
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a5", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a5", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a2", void 0, "a4", 1, 0, 2);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && $input_promise__closures });
}, 1);
