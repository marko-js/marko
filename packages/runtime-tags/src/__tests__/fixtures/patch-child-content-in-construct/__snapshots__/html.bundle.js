// tags/wrap/index.marko
const $template$1 = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ c: "c;D%;<section><!></section>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/card/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
const $setup = _shell_setup([[], ["b2"]], ["c>", $setup$1]);
_shells({
	b1: "b1;D ;<em> </em>",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&`)("D%l")};${((_w0) => `<button> </button>${_w0}`)($template$1)}`)()
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	wrap_default({ content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, void 0, $scope0_reason, 0)}</em>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b0");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: $wi__input_note && _scope_with_id($scope0_id) }));
	}, $scope0_id, 1) });
	_patch_child_end();
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb3", n, 1);
	_scope($scope0_id, {
		g: n,
		h: $wi__input_note && _unfilled_if($scope0_reason, 0) && $input_note__closures,
		c: _existing_scope($childScope)
	});
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ note: input.note });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.note }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
