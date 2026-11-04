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
_shells({ a: "a !a5; b%;<button>x</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Field = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id("A");
		_html(`<input${_attr("id", uid, $scope1_id, "a", 0, 0)}>${_el_mark($scope1_id, "a", 0)}<label${_attr("for", uid, $scope1_id, "b", 0, 0)}>${_text_mark($scope1_id, "c", input.label, 1, $scope0_reason, 0)}</label>${_el_mark($scope1_id, "b", 0)}`);
		$cg__input_label && _patch_render($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1");
	}, $scope0_id) };
	let rows = [Field, Field];
	_html(`<button>x</button>${_el_mark($scope0_id, "a")}`);
	_for_of(rows, (field) => {
		const $scope2_id = _scope_id();
		const $for_content__field__closures = /* @__PURE__ */ new Set();
		_try($scope2_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope3_id, "a", 0);
			card_default({ content: field });
			_patch_child_end();
			_subscribe($for_content__field__closures, _scope($scope3_id, {
				_: _scope_with_id($scope2_id),
				a: _existing_scope($childScope)
			}), "a2", 0);
			_resume_branch($scope3_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("error");
		}, 0, "a3", "a4");
		_scope($scope2_id, { i: $for_content__field__closures });
	}, 0, $scope0_id, "b");
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		e: input.label,
		h: _write_if($scope0_reason, 0) && $input_label__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a6", "e");
}, 1);
