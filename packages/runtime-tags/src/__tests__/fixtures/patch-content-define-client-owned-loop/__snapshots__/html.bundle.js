// template.marko
const $List_content__walks = " b";
const $List_content__template = "<ul></ul>";
_shells({
	a: /*@__PURE__*/ (() => `a !a3;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($List_content__walks, $List_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($List_content__template, $List_content__template)}`)(),
	a0: "a0;D%b%;<li><!><!></li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let count = 1;
	const List = { content: _content("a2", ({ items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__items = _write_if($scope1_reason, 0);
		_html("<ul>");
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_patch_text($scope2_id, "a", item, void 0, $scope1_reason, 0)}${_patch_text($scope2_id, "b", input.suffix, 2, $scope0_reason, 0)}</li>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a1");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope2_id, { _: ($wi__input_suffix || $wi__items) && _scope_with_id($scope1_id) }), "a1");
		}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope1_reason, 0);
		_html(`</ul>${_el_resume($scope1_id, "a")}`);
		_scope($scope1_id, { _: ($wi__input_suffix || $wi__items) && _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a");
	List.content({ items: count % 2 ? ["a"] : ["a", "b"] });
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope2 = _patch_child($scope0_id, "b");
	List.content({ items: input.items });
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.suffix,
		h: count,
		i: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va4", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
