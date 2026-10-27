// tags/keeper.marko
const $template$1 = "<button class=toggle>t</button><!><!>";
const $walks$1 = " b%c";
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button class=toggle>t</button><!><!>" });
var keeper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/level.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["b>", $setup$2]);
_shells({
	c4: "c4",
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	c7: /*@__PURE__*/ (() => `c7${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.n) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			$content({
				n: input.n - 1,
				label: input.label,
				content: _content_resume("c4", () => {
					_scope_reason();
					const $scope2_page = _page_render();
					const $scope2_id = _scope_id();
					_html(`<em>${_patch_text($scope2_id, "a", input.n, void 0, $scope0_reason, 0)}:${_patch_text($scope2_id, "b", input.label, 2, $scope0_reason, 1)}</em>`);
					_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_n ? "c0" : "c1");
					_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "c2" : "c3");
					$scope2_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
				}, $scope1_id)
			});
			_patch_child_end();
			$cg__input_n && _patch_init($scope1_id, "c5");
			$cg__input_label && _patch_init($scope1_id, "c6");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["c7"], $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	keeper_default({ content: input.content });
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		e: input.n,
		f: input.label,
		h: _write_if($scope0_reason, 0) && $input_n__closures,
		i: _write_if($scope0_reason, 1) && $input_label__closures,
		b: _existing_scope($childScope2)
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc8", input.n, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && ($cg__input_n ? _patch_fill($scope0_id, "vc10", input.label) : _patch_fill($scope0_id, "vc9", input.label, !_server_guard($scope0_reason, 1))));
};
var level_default = _template("c", $content);

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	level_default({
		n: 2,
		label: input.label
	});
	_patch_child_end();
	_html("</main>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
