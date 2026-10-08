// tags/grand/index.marko
const $template = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var grand_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $wg__input_content, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// tags/child/index.marko
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `E l/${_w0}&l`)("D%l")};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template)}`)() });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	grand_default({ content: input.content });
	_html("</section>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a1;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason();
	_source_guard($scope0_reason, 1);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: input.note,
		g: open,
		i: $input_note__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a2", input.title), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a3", input.note));
}, 1);
