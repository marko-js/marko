// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `D/${_w0}& l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Panel = { content: _content_elide("a0", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", input.title, void 0, $scope0_reason, 0)}</em>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: ($wi__input_title || $wi__open) && _scope_with_id($scope1_id) }), "a2");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__open, void 0, void 0, void 0, ["a1"], $scope1_reason, 0);
		($wi__input_title || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a");
	Panel.content({ open: true });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: count,
		g: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va4", input.title, !_server_guard($scope0_reason, 0));
}, 1);
