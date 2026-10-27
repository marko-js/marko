// tags/keeper.marko
const $template = "<button class=toggle>t</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b0"]];
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

// template.marko
const $Level_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks);
const $Level_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template);
const $setup = _shell_setup([[], []], ["a>", _shell_setup([[], []], ["b>", $setup$1])]);
_shells({
	a3: "a3",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($Level_content__walks)};${((_w0) => `<main>${_w0}</main>`)($Level_content__template)}`)(),
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([[], []], [">>a>", _shell_setup([[], []], ["b>", $setup$1])]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Level_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Level_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Level = { content: _content("a6", ({ n, label, content }) => {
		const $scope1_id = _scope_id();
		const $Level_content__n__closures = /* @__PURE__ */ new Set();
		const $Level_content__label__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $cg__label = _client_guard($scope1_reason, 1), $scope1_page = _page_render();
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope1_reason, 0) << 1 | _mask_group($scope1_reason, 1) << 3);
				const $childScope = _patch_child($scope2_id, "a", 0);
				Level.content({
					n: n - 1,
					label,
					content: _content_resume("a3", () => {
						_scope_reason();
						const $scope3_page = _page_render();
						const $scope3_id = _scope_id();
						_html(`<em>${_patch_text($scope3_id, "a", n, void 0, $scope1_reason, 0)}:${_patch_text($scope3_id, "b", label, 2, $scope1_reason, 1)}</em>`);
						_unfilled_if($scope1_reason, 0) && _patch_init($scope3_id, "a0");
						_unfilled_if($scope1_reason, 1) && _patch_init($scope3_id, $cg__label ? "a1" : "a2");
						$scope3_page && _subscribe(_unfilled_if($scope1_reason, 1) && $Level_content__label__closures, _subscribe(_unfilled_if($scope1_reason, 0) && $Level_content__n__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) })));
					}, $scope2_id)
				});
				_patch_child_end();
				$cg__label && _patch_init($scope2_id, "a4");
				$scope1_page && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["a5"], $scope1_reason, 0);
		_set_scope_reason(_mask_group($scope1_reason, 2) << 1);
		const $childScope2 = _patch_child($scope1_id, "b", 1);
		keeper_default({ content });
		_patch_child_end();
		$scope1_page ? _scope($scope1_id, {
			e: n,
			f: label,
			h: _write_if($scope1_reason, 0) && $Level_content__n__closures,
			i: _write_if($scope1_reason, 1) && $Level_content__label__closures,
			b: _existing_scope($childScope2)
		}) : (_filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va7", n, !_server_guard($scope1_reason, 0)), _filled_guard($scope1_reason, 1) && _patch_fill($scope1_id, "va8", label, !_server_guard($scope1_reason, 1)));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope3 = _patch_child($scope0_id, "a", 2);
	Level.content({
		n: 2,
		label: input.label
	});
	_patch_child_end();
	_html("</main>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope3) });
}, 1);
