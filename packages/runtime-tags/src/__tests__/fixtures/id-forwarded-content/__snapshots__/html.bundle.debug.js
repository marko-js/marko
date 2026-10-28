// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.label, $wg__input_label)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// tags/forward.marko
var forward_default = _template("__tests__/tags/forward.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/forward.marko", 0);
});

// tags/forward-body.marko
var forward_body_default = _template("__tests__/tags/forward-body.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	forward_default({ content: _content("__tests__/tags/forward-body.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/forward-body.marko", "1:2"), "__tests__/tags/forward-body.marko_1_input_content#0:3/subscribe", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_content && _scope($scope0_id, { "ClosureScopes:input_content/4": $input_content__closures }, "__tests__/tags/forward-body.marko", 0);
});

// tags/forward-attr.marko
var forward_attr_default = _template("__tests__/tags/forward-attr.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_content << 1);
	const $childScope = _peek_scope_id();
	forward_default({ content: input.content });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/forward-attr.marko", 0);
});

// tags/forward-define.marko
var forward_define_default = _template("__tests__/tags/forward-define.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const Wrap = { content: _content("__tests__/tags/forward-define.marko_2*content", ({ content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_dynamic_tag($scope2_id, "#text/0", content, {}, 0, 0, $wg__content);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/forward-define.marko", "1:2");
	}, $scope0_id) };
	Wrap.content({ content: _content("__tests__/tags/forward-define.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/forward-define.marko", "2:2"), "__tests__/tags/forward-define.marko_1_input_content#0:3/subscribe", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_content && _scope($scope0_id, { "ClosureScopes:input_content/4": $input_content__closures }, "__tests__/tags/forward-define.marko", 0);
});

// tags/forward-inner.marko
var forward_inner_default = _template("__tests__/tags/forward-inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const Inner = { content: _content("__tests__/tags/forward-inner.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/forward-inner.marko", "1:2"), "__tests__/tags/forward-inner.marko_1_input_content#0:3/subscribe", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) };
	Inner.content({});
	$wi__input_content && _scope($scope0_id, { "ClosureScopes:input_content/4": $input_content__closures }, "__tests__/tags/forward-inner.marko", 0);
});

// tags/named.marko
const Named = field_default;
var named_default = _template("__tests__/tags/named.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", Named, {
		label: "named",
		content: input.content
	}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/named.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Labeled = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		field_default({ label: "defined" });
	}, $scope0_id) };
	forward_default({ content: _content("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		field_default({ label: "direct" });
	}, $scope0_id) });
	forward_default({ content: _content("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	forward_body_default({ content: _content("__tests__/template.marko_4*content", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		field_default({ label: "body" });
	}, $scope0_id) });
	forward_body_default({ content: _content("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	forward_attr_default({ content: _content("__tests__/template.marko_6*content", () => {
		_scope_reason();
		const $scope6_id = _scope_id();
		field_default({ label: "attr" });
	}, $scope0_id) });
	forward_default({ content: Labeled });
	forward_define_default({ content: _content("__tests__/template.marko_7*content", () => {
		_scope_reason();
		const $scope7_id = _scope_id();
		field_default({ label: "define" });
	}, $scope0_id) });
	forward_define_default({ content: _content("__tests__/template.marko_8*content", () => {
		_scope_reason();
		const $scope8_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	forward_inner_default({ content: _content("__tests__/template.marko_9*content", () => {
		_scope_reason();
		const $scope9_id = _scope_id();
		field_default({ label: "inner" });
	}, $scope0_id) });
	forward_inner_default({ content: _content("__tests__/template.marko_10*content", () => {
		_scope_reason();
		const $scope10_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	named_default({ content: _content("__tests__/template.marko_11*content", () => {
		_scope_reason();
		const $scope11_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_if(() => {
		if (input.show) {
			const $scope12_id = _scope_id();
			forward_body_default({ content: _content("__tests__/template.marko_13*content", () => {
				_scope_reason();
				const $scope13_id = _scope_id();
				field_default({ label: "created" });
			}, $scope12_id) });
			$wi__input_show && _scope($scope12_id, {}, "__tests__/template.marko", "13:2");
			return 0;
		}
	}, $scope0_id, "#text/11", $wg__input_show, $wg__input_show, 0, 0, 1);
	$wi__input_show && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
