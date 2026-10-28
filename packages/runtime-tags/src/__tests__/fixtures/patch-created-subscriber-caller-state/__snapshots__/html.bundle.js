// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3; ;<div></div>",
	b2: "b2;D ;<em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show__OR__input_n = _write_if($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "a", input.n, 1, $scope0_reason, 2)}</em>`);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_n ? "b0" : "b1");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_n__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_n && _scope_with_id($scope1_id) }), $cg__input_n && "b1");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b2"], $scope0_reason, 1);
			_html(`</div>${_el_resume($scope1_id, "a", $wg__input_show)}`);
			$cg__input_show && _patch_init($scope1_id, "b4");
			$wi__input_show__OR__input_n && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_n__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb5", input.n, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		n: count,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
