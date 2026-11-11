// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2",
	a3: "a3;D ;<em> </em>",
	a4: "a4;D%b%;<div><!><!></div>",
	a: "a !a10;D%b ;<main><!><button>x</button></main>",
	a5: "a5;D ;<b> </b>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_fast = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_fast__OR__input_slow = _write_if($scope0_reason, 1), $ui__input_fast2 = _unfilled_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_fast__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_slow = _unfilled_if($scope0_reason, 4);
		_html("<div>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id(), $ui__input_fast = _unfilled_if($scope0_reason, 3);
				_await($scope2_id, "a", input.fast, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_mark($scope4_id, "a", a, 1, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {});
				}, 1, "a1", $ui__input_fast && 2);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a7", 1);
				$wi__input_show__OR__input_fast && _subscribe($ui__input_fast && $input_fast__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a7", 0);
				$wi__input_show__OR__input_fast && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 2);
		_await($scope1_id, "b", input.slow, (b) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_mark($scope5_id, "a", b, 1, $scope0_reason, 4)}</em>`);
			_scope($scope5_id, {});
		}, 1, "a0", $ui__input_slow && 2, 1);
		_html("</div>");
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a8", $cg__input_show);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a9", 1);
		$wi__input_show__OR__input_fast__OR__input_slow && _subscribe($ui__input_slow && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a8", $wg__input_show), _client_guard($scope0_reason, 4) && "a9", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_fast__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a2", void 0, "a4", 1, 0, 2);
	_html(`<button>x</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		f: ($ui__input_show || $ui__input_fast2) && input.fast,
		i: _write_if($scope0_reason, 3) && ($ui__input_fast2 || $ui__input_show) && $input_fast__closures,
		h: _write_if($scope0_reason, 2) && $ui__input_show && $input_show__closures,
		j: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_slow__closures
	}) || _filled_guard($scope0_reason, 3) && $ui__input_show && _patch_write($scope0_id, "xf", input.fast, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "a11", "f");
}, 1);
