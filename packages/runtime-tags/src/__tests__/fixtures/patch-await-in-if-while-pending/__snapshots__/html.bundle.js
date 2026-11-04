// template.marko
_shells({
	a1: "a1",
	a2: "a2;D%;<div id=done><!> done</div>",
	a3: "a3; ;<section></section>",
	a: "a !a8; D l%;<button> </button><!><!>",
	a4: "a4;D%;<div id=done><!> done</div>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 4), $cg__input_promise = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_promise__OR__input_msg = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 3), $fg__input_msg = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, () => {
					const $scope3_id = _scope_id();
					_html(`<div id=done>${_text_mark($scope3_id, "a", input.msg, 1, $scope0_reason, 4)} done</div>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "a0", $cg__input_msg);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope3_id, {}), $cg__input_msg && "a0");
				}, 1, "a2", _unfilled_if($scope0_reason, 3));
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a6", $cg__input_promise);
				$wi__input_show__OR__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 3) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a6", 0);
				$wi__input_show__OR__input_promise__OR__input_msg && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 2);
		_html(`</section>${_el_mark($scope1_id, "a", $wg__input_show)}`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a7", $cg__input_show);
		$wi__input_show__OR__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a7", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_promise__OR__input_msg && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a1", void 0, "a3", 1, 0, 2);
	_script($scope0_id, "a8");
	$fg__input_promise && $cg__input_show && _patch_subscribers($scope0_id, "a9", "g");
	$fg__input_msg && $cg__input_show && _patch_subscribers($scope0_id, "a10", "h");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.msg,
		i: count,
		l: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2)) && $input_msg__closures,
		k: _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && $input_promise__closures,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures
	}) || ($fg__input_promise && $cg__input_show && _patch_write($scope0_id, "xg", input.promise, !_server_guard($scope0_reason, 3)), $fg__input_msg && $cg__input_show && _patch_write($scope0_id, "xh", input.msg, !_server_guard($scope0_reason, 4)));
}, 1);
