// tags/toggle.marko
const $template$1 = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var toggle_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b1");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, void 0, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb2", input.content, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.content));
});

// tags/wrapper.marko
const $template = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0,",
	a1: /*@__PURE__*/ (() => `a1 a8 a9;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)(),
	a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = false;
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "a");
	wrapper_default({ content: _content_elide("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrapper_content__label__closures = /* @__PURE__ */ new Set();
		const label = input.label;
		_set_scope_reason(10);
		const $childScope = _patch_child($scope1_id, "a");
		toggle_default({
			open,
			content: _content_resume("a0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_patch_text($scope2_id, "a", label, void 0, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $wrapper_content__label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id)
		});
		_patch_write($scope1_id, "wb", label, 1);
		_subscribe($open__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: _scope_with_id($scope0_id),
			i: $wi__input_label && $wrapper_content__label__closures,
			a: _existing_scope($childScope)
		})));
	}, $scope0_id) });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va5", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: open,
		g: $wi__input_label && $input_label__closures,
		h: $open__closures,
		a: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 0));
}, 1);
