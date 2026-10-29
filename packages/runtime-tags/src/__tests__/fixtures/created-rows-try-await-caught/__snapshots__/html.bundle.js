// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, () => {
				_scope_id();
				_html("done");
			}, 0);
			_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("error");
		}, void 0, "b1");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		e: input.promise,
		g: $wi__input_promise && $input_promise__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<h1>Rows whose await rejects</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_promise << 1);
			const $childScope = _peek_scope_id();
			outer_default({ promise: input.promise });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_promise && _scope_with_id($scope0_id),
				a: $wi__input_promise && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.promise });
}, 1);
