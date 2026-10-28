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
	a3: "a3;D%c%c%;<i><!>:<!>:<!></i>",
	a: "a !; ;<main></main>",
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items__OR__input_prefix = _write_if($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a", 0);
		card_default({ content: _content_elide("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_text_resume($scope2_id, "a", $global$1.brand, void 0, 4, 0)}:${_text_resume($scope2_id, "b", input.prefix, 2, $scope0_reason, 2)}:${_text_resume($scope2_id, "c", item, 2, $scope0_reason, 1)}</i>`);
			_fill_global_subscribe("a0", $scope2_id);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a1");
			$cg__input_items && _patch_init($scope2_id, "a2");
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__item__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_prefix__closures, _scope($scope2_id, { _: $wi__input_items__OR__input_prefix && _scope_with_id($scope1_id) })));
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_items__OR__input_prefix && _scope_with_id($scope0_id),
			g: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $for_content__item__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a4", $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.prefix,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_prefix__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_items && _patch_fill($scope0_id, "va5", input.prefix, !_server_guard($scope0_reason, 2));
}, 1);
