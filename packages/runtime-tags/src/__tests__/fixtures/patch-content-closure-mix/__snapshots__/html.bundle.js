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
	a: "a; ;<main></main>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_prefix = _client_guard($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 1), $wi__input_items__OR__input_prefix = _write_if($scope0_reason, 0), $ui__input_items = _unfilled_if($scope0_reason, 1), $ui__input_prefix = _unfilled_if($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 1), $wi__input_prefix = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: _content("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_text_mark($scope2_id, "a", $global$1.brand, 1, 4, 0)}:${_text_mark($scope2_id, "b", input.prefix, 2, $scope0_reason, 2)}:${_text_mark($scope2_id, "c", item, 2, $scope0_reason, 1)}</i>`);
			_global_subscribe("a0", $scope2_id);
			$cg__input_prefix && _patch_render($scope2_id, "a1");
			$cg__input_items && _patch_render($scope2_id, "a2");
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__item__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_prefix__closures, _scope($scope2_id, { _: $wi__input_items__OR__input_prefix && _scope_with_id($scope1_id) }), $cg__input_prefix && "a1"), $cg__input_items && "a2");
		}, $scope1_id, 0) });
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_items__OR__input_prefix && _scope_with_id($scope0_id),
			i: $wi__input_items && _unfilled_if($scope0_reason, 1) && $for_content__item__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a")}`);
	_scope($scope0_id, {
		e: $wi__input_items && ($ui__input_items || $ui__input_prefix) && input.prefix,
		f: $wi__input_prefix && $wi__input_prefix && ($ui__input_prefix || $ui__input_items) && $input_prefix__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_items && _patch_write($scope0_id, "xe", input.prefix, !_server_guard($scope0_reason, 2)) && $cg__input_items && _patch_subscribers($scope0_id, "a5", "e");
}, 1);
