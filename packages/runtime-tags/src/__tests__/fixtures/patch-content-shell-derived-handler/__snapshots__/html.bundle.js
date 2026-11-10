// tags/wrapper.marko
const $template = "<div><!></div>";
const $setup = [[], []];
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
_shells({
	a2: "a2 !a0; ;<button>show</button>",
	a: "a;b%bD ;<!><!><p> </p>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let shown = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			wrapper_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const label = input.label;
				_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "xb", label, !$sg__input_label);
				_html(`<button>show</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				$cg__input_label && _patch_render($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					b: label,
					_: _scope_with_id($scope1_id)
				}), $cg__input_label && "a1");
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "b", shown)}</p>`);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "a4", "f");
	_scope($scope0_id, {
		f: ($ui__input_show || $ui__input_label) && input.label,
		h: _write_if($scope0_reason, 1) && ($ui__input_label || $ui__input_show) && $input_label__closures
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xf", input.label, !$sg__input_label);
}, 1);
