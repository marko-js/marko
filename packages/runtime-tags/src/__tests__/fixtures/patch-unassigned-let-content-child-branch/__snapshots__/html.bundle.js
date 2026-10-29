// tags/wrap.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D l%;<button> </button><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", n, 1);
	_scope($scope0_id, {
		f: input.content,
		g: n
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.w, $wg__input_w)}</p>`);
				_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_w);
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 0, 0, 1);
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		e: input.w,
		f: show,
		g: $wi__input_w && $input_w__closures,
		h: $show__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 1));
}, 1);
