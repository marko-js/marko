// template.marko
_shells({
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<span> </span>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4,loading",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			const $await_content__value__closures = /* @__PURE__ */ new Set();
			_try($scope3_id, "a", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`<span>${_text_mark($scope4_id, "a", value, 1, $scope0_reason, 0)}</span>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope4_id, "a0", $cg__input_promise);
				_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__value__closures, _scope($scope4_id, { _: $wi__input_promise && _scope_with_id($scope3_id) }), $cg__input_promise && "a0");
			}, void 0, (err) => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html(`<em>${_text_mark($scope5_id, "a", err.message, 1, 4, 0)}</em>`);
				_scope($scope5_id, {});
			}, 0, "a1", "a2", 1, 1, 1);
			$wi__input_promise && _scope($scope3_id, { f: _unfilled_if($scope0_reason, 0) && $await_content__value__closures });
		}, 1, "a3", _unfilled_if($scope0_reason, 0), 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a7", 1);
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a7", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a4", void 0, "a6", 1, 0, 2);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);
