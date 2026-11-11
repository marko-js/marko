// tags/wrap.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a3: "a3 !a0; D%c%;<button><!> <!></button>",
	a: "a;b%;<!><!><!>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			wrap_default({ content: _content("a3", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				let n = 0;
				_html(`<button>${_text_mark($scope2_id, "b", input.label, 1, $scope0_reason, 2)} ${_text_mark($scope2_id, "c", n, 2)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				$cg__input_label && _patch_render($scope2_id, "a1");
				_patch_fill($scope2_id, "va2", n, 1);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					d: n,
					_: $wi__input_show__OR__input_label && _scope_with_id($scope1_id)
				}), $cg__input_label && "a1");
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: ($ui__input_show || $ui__input_label) && input.label,
		f: _write_if($scope0_reason, 2) && ($ui__input_label || $ui__input_show) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a5", "e");
}, 1);
