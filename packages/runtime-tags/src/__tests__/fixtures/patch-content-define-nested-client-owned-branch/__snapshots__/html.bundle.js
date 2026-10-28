// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($Inner_content__template);
_shells({
	a1: "a1",
	a: /*@__PURE__*/ (() => `a !a7;${((_w0) => `D/${_w0}& l`)($Outer_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template)}`)(),
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Inner = { content: _content("a2", ({ open, body }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__body = _write_guard($scope2_reason, 2), $wg__open = _write_guard($scope2_reason, 1), $cg__open = _client_guard($scope2_reason, 1);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", body, {}, 2, 0, 0, $wg__body, $scope2_reason, 2);
				_write_if($scope2_reason, 0) && _scope($scope4_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__open, void 0, void 0, void 0, ["a0"], $scope2_reason, 1);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: _unfilled_if($scope2_reason, 1) && body }) || (_filled_guard($scope2_reason, 2) && $cg__open && _patch_fill($scope2_id, "va3", body, !_server_guard($scope2_reason, 2)), $cg__open && _content_withhold(body));
	}, $scope0_id) };
	const Outer = { content: _content("a4", ({ open, body }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html("<section>");
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 2) << 5);
		const $childScope = _peek_scope_id($scope3_id, "a", 1);
		Inner.content({
			open,
			body
		});
		_patch_child_end();
		_html("</section>");
		_scope($scope3_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 2);
	Outer.content({
		open: true,
		body: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.title, void 0, $scope0_reason, 0)}</em>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "a5" : "a6");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		e: input.title,
		f: count,
		g: _write_if($scope0_reason, 0) && $input_title__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", input.title, !_server_guard($scope0_reason, 0));
}, 1);
