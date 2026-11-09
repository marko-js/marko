// template.marko
const $List_content__walks = " b";
const $List_content__template = "<ul></ul>";
_shells({
	a: `a !a3;${((_w0, _w1) => `/${_w0}&/${_w1}& b`)($List_content__walks, $List_content__walks)};${((_w0, _w1) => `${_w0}${_w1}<button>+</button>`)($List_content__template, $List_content__template)}`,
	a1: "a1;D%b%;<li><!><!></li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_suffix = _client_guard($scope0_reason, 0), $wi__input_suffix = _write_if($scope0_reason, 0), $fg__input_suffix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let count = 1;
	const List = { content: _content("a2", ({ items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__items = _write_if($scope1_reason, 0);
		_html("<ul>");
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_text_mark($scope2_id, "a", item, 1, $scope1_reason, 0)}${_text_mark($scope2_id, "b", input.suffix, 2, $scope0_reason, 0)}</li>`);
			$cg__input_suffix && _patch_render($scope2_id, "a0");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope2_id, { _: ($wi__input_suffix || $wi__items) && _scope_with_id($scope1_id) }), $cg__input_suffix && "a0");
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a1", $scope1_reason, 0);
		_html(`</ul>${_el_mark($scope1_id, "a")}`);
		_scope($scope1_id, { _: ($wi__input_suffix || $wi__items) && _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	List.content({ items: count % 2 ? ["a"] : ["a", "b"] });
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	List.content({ items: input.items });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	$fg__input_suffix && _patch_subscribers($scope0_id, "a4", "f");
	_scope($scope0_id, {
		f: input.suffix,
		h: count,
		i: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || $fg__input_suffix && _patch_write($scope0_id, "xf", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
