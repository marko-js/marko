// tags/wrapper.marko
const $template = "<div><!></div>";
_shells({ b: "b;D%;<div><!></div>" });
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0 a4!a1; ;<p></p>",
	a: /*@__PURE__*/ ((_w0) => `a !;${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	wrapper_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const label = input.label;
		_html(`<p></p>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_patch_write($scope1_id, "wb", label, 1);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}));
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0));
}, 1);
