// template.marko
_shells({
	a2: "a2,<span>ok</span>",
	a3: "a3,<span>ok</span>",
	a4: "a4;b%;<!><!><!>",
	a: "a !a7;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_detail = _write_guard($scope0_reason, 0), $wi__input_detail = _write_if($scope0_reason, 0), $cg__input_detail = _client_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $fg__input_detail = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_await($scope3_id, "a", input.promise, () => {
			_scope_id();
			_html("<span>ok</span>");
		}, 1, "a2", _unfilled_if($scope0_reason, 1) && 2);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a5", $cg__input_promise);
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a5", 0);
		$wi__input_promise && _resume_branch($scope3_id);
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", input.detail, $wg__input_detail)}</p>`);
				$cg__input_detail && _patch_render($scope2_id, "a0");
				_subscribe($wi__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: $wi__input_detail && 1
				}), $cg__input_detail && "a0", $wg__input_detail);
				return 0;
			}
		}, $scope1_id, "a", $wg__input_detail, $wg__input_detail, 0, 0, 1);
		$cg__input_detail && _patch_render($scope1_id, "a1");
		_subscribe($wi__input_detail && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_detail && "a1", $wg__input_detail);
	}, 0, "a6", "a4", 1);
	_html(`<button>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a7");
	$fg__input_detail && _patch_subscribers($scope0_id, "a8", "f");
	_scope($scope0_id, {
		f: input.detail,
		h: count,
		i: $wi__input_detail && $input_detail__closures,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) || $fg__input_detail && _patch_write($scope0_id, "xf", input.detail, !_server_guard($scope0_reason, 0));
}, 1);
