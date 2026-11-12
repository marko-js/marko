// template.marko
_shells({
	a1: "a1,done",
	a2: "a2,done",
	a3: "a3;b%;<!><!><!>",
	a4: "a4",
	a: "a !a7; D l%;<button> </button><!><!>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_promise2 = _unfilled_if($scope0_reason, 3), $wi__input_promise = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 3);
				_await($scope3_id, "a", input.promise, () => {
					_scope_id();
					_html("done");
				}, 1, "a1", $ui__input_promise && 2);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a6", 1);
				$wi__input_show__OR__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a6", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope3_id);
			}, void 0, (err) => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", err.message, 1, 4, 0)} ${_text_mark($scope2_id, "b", input.title, 2, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0", $cg__input_title);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_title && "a0");
			}, 0, "a4", "a3", 0, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a5"], $scope0_reason, 1);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		g: input.title,
		h: _write_if($scope0_reason, 1) && ($ui__input_show || $ui__input_promise2) && input.promise,
		i: count,
		j: _write_if($scope0_reason, 2) && $input_title__closures,
		k: $wi__input_promise && $wi__input_promise && ($ui__input_promise2 || $ui__input_show) && $input_promise__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a8", "g"), _filled_guard($scope0_reason, 3) && $ui__input_show && _patch_write($scope0_id, "xh", input.promise, !_server_guard($scope0_reason, 3)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a9", "h"));
}, 1);
