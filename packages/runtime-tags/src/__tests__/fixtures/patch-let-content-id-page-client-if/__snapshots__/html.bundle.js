// tags/card.marko
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
_shells({ a: "a !a2; b%;<button>x</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let field = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id("A");
		_html(`<input${_attr("id", uid, $scope1_id, "a", 0, 0)}>${_el_mark($scope1_id, "a", 0)}<label${_attr("for", uid, $scope1_id, "b", 0, 0)}>${_text_mark($scope1_id, "c", input.label, 1, $scope0_reason, 0)}</label>${_el_mark($scope1_id, "b", 0)}`);
		$cg__input_label && _patch_render($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1");
	}, $scope0_id) };
	_html(`<button>x</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (field) {
			const $scope2_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			card_default({ content: field });
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.label,
		h: _write_if($scope0_reason, 0) && $input_label__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
