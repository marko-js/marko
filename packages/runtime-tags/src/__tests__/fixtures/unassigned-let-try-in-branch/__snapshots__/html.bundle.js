// tags/label.marko
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_onHide = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", typeof input.onHide, $wg__input_onHide)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	label_default({ onHide: function() {
		show = false;
	} });
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, (value) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_resume($scope4_id, "a", value, $wg__input_promise)}</em>`);
					$wi__input_promise && _scope($scope4_id, {});
				}, $wg__input_promise);
				_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", 0);
				_resume_branch($scope2_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<p>loading</p>");
			}, void 0, "a1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b");
	_scope($scope0_id, {
		f: input.promise,
		h: $wi__input_promise && $input_promise__closures
	});
}, 1);
