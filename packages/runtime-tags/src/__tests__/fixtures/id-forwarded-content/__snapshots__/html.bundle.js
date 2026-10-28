// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.label, $wg__input_label)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/forward.marko
var forward_default = _template("g", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/forward-body.marko
var forward_body_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	forward_default({ content: _content("d1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "d0", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_content && _scope($scope0_id, { e: $input_content__closures });
});

// tags/forward-attr.marko
var forward_attr_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_content << 1);
	const $childScope = _peek_scope_id();
	forward_default({ content: input.content });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/forward-define.marko
var forward_define_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	({ content: _content("e0", ({ content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_dynamic_tag($scope2_id, "a", content, {}, 0, 0, $wg__content);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }).content({ content: _content("e2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "e1", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_content && _scope($scope0_id, { e: $input_content__closures });
});

// tags/forward-inner.marko
var forward_inner_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	({ content: _content("f0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "f1", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) }).content({});
	$wi__input_content && _scope($scope0_id, { e: $input_content__closures });
});

// tags/named.marko
const Named = field_default;
var named_default = _template("h", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", Named, {
		label: "named",
		content: input.content
	}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Labeled = { content: _content("a0", () => {
		_scope_id();
		_scope_reason();
		field_default({ label: "defined" });
	}, $scope0_id) };
	forward_default({ content: _content("a1", () => {
		_scope_reason();
		_scope_id();
		field_default({ label: "direct" });
	}, $scope0_id) });
	forward_default({ content: _content("a2", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	forward_body_default({ content: _content("a3", () => {
		_scope_reason();
		_scope_id();
		field_default({ label: "body" });
	}, $scope0_id) });
	forward_body_default({ content: _content("a4", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	forward_attr_default({ content: _content("a5", () => {
		_scope_reason();
		_scope_id();
		field_default({ label: "attr" });
	}, $scope0_id) });
	forward_default({ content: Labeled });
	forward_define_default({ content: _content("a6", () => {
		_scope_reason();
		_scope_id();
		field_default({ label: "define" });
	}, $scope0_id) });
	forward_define_default({ content: _content("a7", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	forward_inner_default({ content: _content("a8", () => {
		_scope_reason();
		_scope_id();
		field_default({ label: "inner" });
	}, $scope0_id) });
	forward_inner_default({ content: _content("a9", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	named_default({ content: _content("a10", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_if(() => {
		if (input.show) {
			const $scope12_id = _scope_id();
			forward_body_default({ content: _content("a11", () => {
				_scope_reason();
				_scope_id();
				field_default({ label: "created" });
			}, $scope12_id) });
			$wi__input_show && _scope($scope12_id, {});
			return 0;
		}
	}, $scope0_id, "l", $wg__input_show, $wg__input_show, 0, 0, 1);
	$wi__input_show && _scope($scope0_id, {});
}, 1);
