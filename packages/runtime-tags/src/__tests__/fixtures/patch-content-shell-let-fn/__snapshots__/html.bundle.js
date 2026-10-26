// tags/card.marko
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_patch_text($scope0_id, "b", f(), void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	$scope0_page && _scope($scope0_id, {});
});

// tags/wrapper.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c !;b%;<!><!><!>",
	c1: "c1;b%;<!><!><!>"
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c0");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c1"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vc2", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup$2]))}`)(),
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "a");
	wrapper_default({
		show: input.show,
		content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({ fn: function() {
				return "f:" + input.label;
			} });
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a0" : "a1");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}));
		}, $scope0_id)
	});
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
