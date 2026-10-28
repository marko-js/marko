// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2",
	a3: "a3;D ;<em> </em>",
	a4: "a4;D%b%;<div><!><!></div>",
	a: "a !a13;D%b ;<main><!><button>x</button></main>",
	a5: "a5;D ;<b> </b>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fast = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $cg__input_slow = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_fast__OR__input_slow = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fast__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.fast, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_resume($scope4_id, "a", a, 1, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {});
				}, 1, "a1");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_fast ? "a7" : "a8");
				_write_if($scope0_reason, 0) && _subscribe(_unfilled_if($scope0_reason, 3) && $input_fast__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_fast && "a8", 0);
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a6"], $scope0_reason, 2);
		_await($scope1_id, "b", input.slow, (b) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "a", b, 1, $scope0_reason, 4)}</em>`);
			_scope($scope5_id, {});
		}, 1, "a0", 1);
		_html("</div>");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_show ? "a9" : "a10");
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, $cg__input_slow ? "a11" : "a12");
		$wi__input_show__OR__input_fast__OR__input_slow && _subscribe(_unfilled_if($scope0_reason, 4) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a10", $wg__input_show), $cg__input_slow && "a12", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_fast__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a2", void 0, "a4", 1, void 0, 2);
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a13");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.fast,
		i: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_fast__closures,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures,
		j: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_slow__closures
	}) || _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va14", input.fast, !_server_guard($scope0_reason, 3));
}, 1);
