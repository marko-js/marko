// template.marko
_shells({
	a1: "a1;D%;<div id=done><!> done</div>",
	a2: "a2; ;<section></section>",
	a: "a !a8; D l%;<button> </button><!><!>",
	a3: "a3;D%;<div id=done><!> done</div>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 2), $wi__input_show__OR__input_promise__OR__input_msg = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $ui__input_promise2 = _unfilled_if($scope0_reason, 3), $ui__input_msg = _unfilled_if($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 2), $wi__input_msg = _write_if($scope0_reason, 4), $wi__input_promise = _write_if($scope0_reason, 3);
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
				const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 3);
				_await($scope2_id, "a", input.promise, () => {
					const $scope3_id = _scope_id();
					_html(`<div id=done>${_text_mark($scope3_id, "a", input.msg, 1, $scope0_reason, 4)} done</div>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "a0", $cg__input_msg);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope3_id, {}), $cg__input_msg && "a0");
				}, 1, "a1", $ui__input_promise);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a5", 1);
				$wi__input_show__OR__input_promise__OR__input_msg && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a5", 0);
				$wi__input_show__OR__input_promise__OR__input_msg && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 2);
		_html(`</section>${_el_mark($scope1_id, "a", $wg__input_show)}`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a6", $cg__input_show);
		$wi__input_show__OR__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a6", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_promise__OR__input_msg && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a7", void 0, "a2", 1);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: $wi__input_show && ($ui__input_show || $ui__input_promise2) && input.promise,
		h: $wi__input_show && ($ui__input_show || $ui__input_msg) && input.msg,
		i: count,
		l: $wi__input_msg && $wi__input_msg && ($ui__input_msg || $ui__input_show) && $input_msg__closures,
		k: $wi__input_promise && $wi__input_promise && ($ui__input_promise2 || $ui__input_show) && $input_promise__closures,
		j: $wi__input_show && $ui__input_show && $input_show__closures
	}) || (_filled_guard($scope0_reason, 3) && $ui__input_show && _patch_write($scope0_id, "xg", input.promise, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "a9", "g"), _filled_guard($scope0_reason, 4) && $ui__input_show && _patch_write($scope0_id, "xh", input.msg, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "a10", "h"));
}, 1);
