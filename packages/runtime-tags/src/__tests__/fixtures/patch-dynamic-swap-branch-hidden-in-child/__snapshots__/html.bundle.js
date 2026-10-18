// tags/w.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0 b13,",
	b1: "b1 b15,",
	b: "b !;b%;<!><!><!>",
	b2: "b2 !b4; ;<button>a</button>",
	b3: "b3 !b6; ;<button>b</button>"
});
var w_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_flag__OR__input_x = _write_if($scope0_reason, 1), $wg__input_flag__OR__input_x = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const A = { content: _content_resume("b1", ({ x }) => {
		const $scope1_id = _scope_id();
		_patch_write($scope1_id, "wd", x);
		_scope_reason();
		_html("<u>A</u>");
		_if(() => {
			if (input.show) {
				const $scope3_id = _scope_id();
				_html(`<button>a</button>${_el_resume($scope3_id, "a")}`);
				_script($scope3_id, "b4");
				_scope($scope3_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b2"], $scope0_reason, 2);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b5");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, {
			d: x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id)
		}));
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("b0", ({ x }) => {
		const $scope2_id = _scope_id();
		_patch_write($scope2_id, "wd", x);
		_scope_reason();
		_html("<u>B</u>");
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<button>b</button>${_el_resume($scope4_id, "a")}`);
				_script($scope4_id, "b6");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 2);
		_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "b7");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
			d: x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id),
			Cj: $wi__input_show && 1
		}));
		$wg__input_show || _resume_branch($scope2_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.flag ? A : B, { x: input.x }, 0, 0, $wg__input_flag__OR__input_x, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "we", input.flag, 1);
	_patch_write($scope0_id, "wf", input.x, 1);
	_patch_write($scope0_id, "wg", A, 1);
	_patch_write($scope0_id, "wh", B, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b11");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.show,
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.flag,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.x,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && A,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && B,
		j: $wi__input_show && $input_show__closures
	}) : (_filled_guard($scope0_reason, 2) && (_content_withheld("b1", _client_guard($scope0_reason, 0)) || _content_withheld("b0", _client_guard($scope0_reason, 0))) && _patch_value($scope0_id, "vb8", input.show, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "vb9", input.flag, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "vb10", input.x, !_server_guard($scope0_reason, 4)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
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
