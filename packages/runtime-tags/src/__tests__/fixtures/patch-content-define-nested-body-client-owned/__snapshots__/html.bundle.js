// template.marko
const $Inner_content2__walks = "b%c";
const $Inner_content2__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content2__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content2__template);
_shells({
	a1: "a1",
	a: `a !a6;${((_w0) => `D/${_w0}& l`)($Outer_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template)}`,
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Inner = { content: _content("a2", ({ open, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2), $wg__open = _write_guard($scope3_reason, 1), $fg__content = _filled_guard($scope3_reason, 2);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 2, 0, 0, $wg__content, $scope3_reason, 2);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__open, 1, 0, 0, ["a0"], $scope3_reason, 1);
		$fg__content && _client_guard($scope3_reason, 1) && _patch_render($scope3_id, "a3", "e");
		_write_if($scope3_reason, 1) && _scope($scope3_id, { e: _unfilled_if($scope3_reason, 1) && content }) || $fg__content && _unfilled_if($scope3_reason, 1) && _patch_write($scope3_id, "xe", content, !_server_guard($scope3_reason, 2));
	}, $scope0_id) };
	const Outer = { content: _content("a5", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__open = _write_if($scope1_reason, 0);
		_set_scope_reason(10);
		const $childScope = _peek_scope_id($scope1_id, "a", 1);
		Inner.content({
			open,
			content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", input.title, 1, $scope0_reason, 0)}</em>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a4", _client_guard($scope0_reason, 0));
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: ($wi__input_title || $wi__open) && _scope_with_id($scope1_id) }));
			}, $scope1_id)
		});
		_patch_child_end();
		_scope($scope1_id, {
			_: ($wi__input_title || $wi__open) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 2);
	Outer.content({ open: true });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a6");
	$fg__input_title && _patch_subscribers($scope0_id, "a7", "e");
	_scope($scope0_id, {
		e: input.title,
		f: count,
		g: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope2)
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
