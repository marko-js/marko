// tags/probe.marko
const $template$1 = "<output></output>";
const $setup$2 = [[], []];
_shells({ b: "b; ;<output></output>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_get);
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/w.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["b>", $setup$2]);
_shells({
	c3: "c3",
	c4: "c4",
	c: `c${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&`)(" b")};${((_w0) => `<!><!>${_w0}`)($template$1)}`,
	c2: "c2 !c1; ;<button>a</button>",
	c5: "c5 !c7; ;<button>b</button>"
});
var w_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_flag__OR__input_x = _write_if($scope0_reason, 1), $wg__input_flag__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_flag__OR__input_x = _unfilled_if($scope0_reason, 0), $ui__input_x = _unfilled_if($scope0_reason, 4), $ui__input_flag = _unfilled_if($scope0_reason, 3), $fg__input_flag = _filled_guard($scope0_reason, 3), $fg__input_x = _filled_guard($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "c9", "e");
	const A = { content: _content_resume("c4", ({ x }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_patch_write($scope1_id, "xd", x);
		_html("<u>A</u>");
		_if(() => {
			if (input.show) {
				const $scope3_id = _scope_id();
				_html(`<button>a</button>${_el_mark($scope3_id, "a")}`);
				_script($scope3_id, "c1");
				_scope($scope3_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["c2"], $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c6", $cg__input_show);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, {
			d: x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id)
		}), $cg__input_show && "c6", $wg__input_show);
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("c3", ({ x }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_patch_write($scope2_id, "xd", x);
		_html("<u>B</u>");
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<button>b</button>${_el_mark($scope4_id, "a")}`);
				_script($scope4_id, "c7");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__input_show, 1, 0, 0, ["c5"], $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "c8", $cg__input_show);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
			d: x,
			_: $wi__input_show__OR__input_flag__OR__input_x && _scope_with_id($scope0_id),
			Ck: $wi__input_show && 1
		}), $cg__input_show && "c8", $wg__input_show);
		$wg__input_show || _resume_branch($scope2_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.flag ? A : B, { x: input.x }, 1, 0, 0, $wg__input_flag__OR__input_x, $scope0_reason, 0);
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 1);
	probe_default({ get: _bind_resume(function() {
		return "s:" + input.show;
	}, "c0", $scope0_id) });
	_patch_child_end();
	$ui__input_flag__OR__input_x && _patch_write($scope0_id, "wh", A, 1);
	$ui__input_flag__OR__input_x && _patch_write($scope0_id, "wi", B, 1);
	_patch_render($scope0_id, "c10", (($fg__input_flag ? " f" : "") + ($fg__input_x ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.show,
		f: ($ui__input_x || $ui__input_flag__OR__input_x) && input.flag,
		g: ($ui__input_flag || $ui__input_flag__OR__input_x) && input.x,
		h: $ui__input_flag__OR__input_x && A,
		i: $ui__input_flag__OR__input_x && B,
		k: $wi__input_show && $input_show__closures,
		b: _existing_scope($childScope)
	}) || ($fg__input_flag && $ui__input_x && _patch_write($scope0_id, "xf", input.flag, !_server_guard($scope0_reason, 3)), $fg__input_x && $ui__input_flag && _patch_write($scope0_id, "xg", input.x, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 4) << 7 | _updates_from($scope0_reason, 2) << 9);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	w_default({
		x: input.a,
		show: input.show,
		flag: input.flag
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
