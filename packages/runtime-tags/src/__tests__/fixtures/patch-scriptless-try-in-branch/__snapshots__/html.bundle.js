// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_promise2 = _unfilled_if($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 2);
				_await($scope2_id, "a", input.promise, (value) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_mark($scope4_id, "a", value, 1, $scope0_reason, 2)}</em>`);
					_scope($scope4_id, {});
				}, 1, "a0", $ui__input_promise && 2);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a5", 1);
				$wi__input_show__OR__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a5", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope2_id);
			}, void 0, (err) => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>${_text_mark($scope3_id, "a", err.message, 1, 4, 0)}</p>`);
				_scope($scope3_id, {});
			}, 0, "a1", "a3", 0, 1);
			$wi__input_show__OR__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && ($ui__input_show || $ui__input_promise2) && input.promise,
		f: $wi__input_promise && $wi__input_promise && ($ui__input_promise2 || $ui__input_show) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a6", "e");
}, 1);
