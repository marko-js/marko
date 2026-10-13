// tags/grand/index.marko
const $template$1 = "<div><!></div>";
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
const $template = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `E l/${_w0}&l`)("D%l")};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1)}`)() });
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
	a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		title: input.title,
		content: _content_elide("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: $wi__input_note && _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		f: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1);
