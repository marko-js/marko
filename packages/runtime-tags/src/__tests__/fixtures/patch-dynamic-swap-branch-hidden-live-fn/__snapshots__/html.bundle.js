// tags/probe.marko
const $template$1 = "<output></output>";
const $setup$2 = [[], []];
_shells({ b: "b; ;<output></output>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.get }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/w.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["b>", $setup$2]);
_shells({
	c3: "c3 c14",
	c4: "c4 c16",
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&`)(" b")};${((_w0) => `<!><!>${_w0}`)($template$1)}`)(),
	c2: "c2 !c1; ;<button>a</button>",
	c5: "c5 !c7; ;<button>b</button>"
});
var w_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_flag__OR__input_x = _write_if($scope0_reason, 1), $sg__input_show = _server_guard($scope0_reason, 2), $cg__input_x = _client_guard($scope0_reason, 4), $cg__input_flag = _client_guard($scope0_reason, 3), $cg__input_flag__OR__input_x = _client_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vc9", input.show, !$sg__input_show);
	const A = { content: _content_resume("c4", ({ x }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_patch_write($scope1_id, "wd", x);
		_html("<u>A</u>");
		_if(() => {
			if (input.show) {
				const $scope3_id = _scope_id();
				_html(`<button>a</button>${_el_resume($scope3_id, "a")}`);
				_script($scope3_id, "c1");
				$scope1_page && _scope($scope3_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c2"], $scope0_reason, 2);
		$cg__input_show && _patch_init($scope1_id, "c6");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, {
			d: x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id)
		}));
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("c3", ({ x }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const $scope2_page = _page_render();
		_patch_write($scope2_id, "wd", x);
		_html("<u>B</u>");
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<button>b</button>${_el_resume($scope4_id, "a")}`);
				_script($scope4_id, "c7");
				$scope2_page && _scope($scope4_id, { _: _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c5"], $scope0_reason, 2);
		$cg__input_show && _patch_init($scope2_id, "c8");
		$scope2_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
			d: x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id),
			Ck: $wi__input_show && 1
		}));
		$wg__input_show || _resume_branch($scope2_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.flag ? A : B, { x: input.x }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _patch_child($scope0_id, "b");
	probe_default({ get: _bind_resume(function() {
		return "s:" + input.show;
	}, "c0", $scope0_id) });
	$cg__input_flag__OR__input_x && _patch_write($scope0_id, "wh", A, 1);
	$cg__input_flag__OR__input_x && _patch_write($scope0_id, "wi", B, 1);
	$cg__input_flag__OR__input_x && _patch_init($scope0_id, "c12");
	$scope0_page ? _scope($scope0_id, {
		e: input.show,
		f: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.flag,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.x,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && A,
		i: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && B,
		k: $wi__input_show && $input_show__closures,
		b: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_x && _patch_fill($scope0_id, "vc10", input.flag, !_server_guard($scope0_reason, 3)), $cg__input_x && _content_withhold(input.flag), _filled_guard($scope0_reason, 4) && $cg__input_flag && _patch_fill($scope0_id, "vc11", input.x, !_server_guard($scope0_reason, 4)), $cg__input_flag && _content_withhold(input.x));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _patch_child($scope0_id, "a");
	w_default({
		x: input.a,
		show: input.show,
		flag: input.flag
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
