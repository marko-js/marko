// tags/wrap.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a3: "a3 !a0; D%c%;<button><!> <!></button>",
	a: "a !;b%;<!><!><!>",
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a", 0);
			wrap_default({ content: _content_elide("a3", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				let n = 0;
				_html(`<button>${_patch_text($scope2_id, "b", input.label, void 0, $scope0_reason, 2)} ${_text_resume($scope2_id, "c", n, 2)}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a1");
				_patch_fill($scope2_id, "va2", n, 1);
				$scope2_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					d: n,
					_: $wi__input_show__OR__input_label && _scope_with_id($scope1_id)
				}));
			}, $scope1_id) });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a4"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2));
}, 1);
