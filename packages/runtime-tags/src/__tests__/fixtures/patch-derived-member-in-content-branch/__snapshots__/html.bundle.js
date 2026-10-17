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
	a0: "a0 a5 a6 a7;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a !a1;${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	wrapper_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const item = { label: input.label };
		if ($scope0_page) _if(() => {}, $scope1_id, "a", 1, 1, 0, 0, 1);
		_patch_write($scope1_id, "wc", item.label, 1);
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			c: item.label,
			_: _scope_with_id($scope0_id)
		})));
	}, $scope0_id) });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va3", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: count,
		g: $wi__input_label && $input_label__closures,
		h: $count__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 0));
}, 1);
