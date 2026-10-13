// tags/grand/index.marko
const $template = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var grand_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// tags/child/index.marko
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `E l/${_w0}&l`)("D%l")};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template)}`)() });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "b");
	grand_default({ content: input.content });
	_html("</section>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a1;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $scope0_page = _page_render(), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: input.note,
		g: open,
		i: $wi__input_note && $input_note__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.title), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", input.note));
}, 1);
