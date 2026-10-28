// tags/card/index.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1,loading",
	a2: "a2;D ;<em> </em>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a6: /*@__PURE__*/ ((_w0) => `a6${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_value = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_value = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a", 0);
			card_default({ content: _content_elide("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_try($scope2_id, "a", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_await($scope3_id, "a", Promise.resolve(input.value), () => {
						const $scope4_id = _scope_id();
						_html(`<em>${_text_resume($scope4_id, "a", input.value, void 0, $scope0_reason, 2)}</em>`);
						$cg__input_value && _patch_init($scope4_id, "a0");
						_subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope4_id, { Cf: $wi__input_value && 1 }));
					}, 1, "a2");
					$cg__input_value && _patch_init($scope3_id, "a7");
					$wi__input_show__OR__input_value && _subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
					$wi__input_show__OR__input_value && _resume_branch($scope3_id);
				}, () => {
					_scope_reason();
					_scope_id();
					_html("loading");
				}, void 0, "a1", void 0, "a4", void 0, void 0, 2);
				$wi__input_show__OR__input_value && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_value && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a6"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value,
		f: $wi__input_value && _unfilled_if($scope0_reason, 2) && $input_value__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va8", input.value, !_server_guard($scope0_reason, 2));
}, 1);
