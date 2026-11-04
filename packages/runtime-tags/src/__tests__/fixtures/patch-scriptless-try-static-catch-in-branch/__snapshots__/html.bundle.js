// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,<p>oops</p>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_promise = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
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
					_html(`<em>${_text_mark($scope4_id, "a", value, 1, $scope0_reason, 2)}</em>`);
					_scope($scope4_id, {});
				}, 1, "a0", _unfilled_if($scope0_reason, 2) && 2);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a5", $cg__input_promise);
				$wi__input_show__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a5", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope2_id);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("<p>oops</p>");
			}, 0, "a1", "a3", 0, 0, 1);
			$wi__input_show__OR__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_promise && $cg__input_show && _patch_subscribers($scope0_id, "a6", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise,
		f: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && $input_promise__closures
	}) || $fg__input_promise && $cg__input_show && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
