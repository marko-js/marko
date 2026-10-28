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
	a: "a !;b%bD ;<!><!><p> </p>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1);
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
				_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "wb", label, !$sg__input_label);
				_html(`<button>show</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					b: label,
					_: _scope_with_id($scope1_id)
				}));
			}, $scope1_id, 1) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", shown)}</p>`);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		h: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.label, !$sg__input_label);
}, 1);
