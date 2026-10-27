// tags/wrapper.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	wrapper_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const label = input.label;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xb", label, !_server_guard($scope0_reason, 0));
		_html(`<p></p>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_filled_guard($scope0_reason, 0) && _patch_effect($scope1_id, $cg__input_label ? "ha0" : "ea0", "b");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}), $cg__input_label && "a1");
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
