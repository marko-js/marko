// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $setup$2 = [[], []];
_shells({ c: "c;D%;<section><!></section>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b1: "b1;D ;<em> </em>",
	b: "b !;b%;<!><!><!>",
	b2: /*@__PURE__*/ ((_w0) => `b2${_shell_marker(_shell_setup([[], []], ["a>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_n = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			wrap_default({ content: _content("b1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", input.n, 1, $scope0_reason, 2)}</em>`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "b0");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_n__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_n && _scope_with_id($scope1_id) }));
			}, $scope1_id, 1) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_n && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_n__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb3", input.n, !_server_guard($scope0_reason, 2));
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
