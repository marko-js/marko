// tags/layout.marko
const $template = "<main><!></main>";
_shells({ b: "b;D%;<main><!></main>" });
var layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0 !a1;D%c%l ;<p><!> <!></p><button>+</button>",
	a: /*@__PURE__*/ (() => `a;${((_w0) => `E/${_w0}&m`)("D%l")};${((_w0) => `<html><body>${_w0}</body></html>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html(`<html>${_flush_head()}<body>`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	layout_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<p>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "b", n, 2)}</p><button>+</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a2");
		_patch_value($scope1_id, "va3", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}));
	}, $scope0_id) });
	_trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
