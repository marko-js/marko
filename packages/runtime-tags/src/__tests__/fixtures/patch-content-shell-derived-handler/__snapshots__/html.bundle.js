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
	a0: "a0 a6!a2; ;<button>show</button>",
	a: "a !;b%bD ;<!><!><p> </p>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let shown = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a");
			wrapper_default({ content: _content_elide("a0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const label = input.label;
				_html(`<button>show</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a2");
				_patch_write($scope2_id, "wb", label, 1);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					b: label,
					_: _scope_with_id($scope1_id)
				}));
			}, $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", shown)}</p>`);
	_patch_value($scope0_id, "va4", shown, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		h: $wi__input_label && $input_label__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
