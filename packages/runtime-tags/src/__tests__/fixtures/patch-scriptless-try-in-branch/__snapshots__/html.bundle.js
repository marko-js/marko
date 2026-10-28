// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<p> </p>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, (value) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_resume($scope4_id, "a", value, void 0, $scope0_reason, 2)}</em>`);
					_scope($scope4_id, {});
				}, 1, "a0");
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_promise ? "a5" : "a6");
				$wi__input_show__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a6", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope2_id);
			}, void 0, (err) => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>${_text_resume($scope3_id, "a", err.message, void 0, 4, 0)}</p>`);
				_scope($scope3_id, {});
			}, void 0, "a1", "a3", void 0, 1, 1);
			$wi__input_show__OR__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va7", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
