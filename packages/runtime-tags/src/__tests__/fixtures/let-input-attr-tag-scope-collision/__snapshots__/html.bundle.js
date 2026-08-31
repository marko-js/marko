// tags/child-tag/index.marko
var child_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.footer, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_submitLabel = _serialize_if($scope0_reason, 3), $si__input_label = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_submitLabel__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	input.open;
	child_tag_default({ footer: attrTag({ content: _content("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_text_resume($scope1_id, "a", input.submitLabel || "OK", _serialize_guard($scope0_reason, 3))}</button><span>${_text_resume($scope1_id, "b", input.label, _serialize_guard($scope0_reason, 4))}</span>`);
		_serialize_if($scope0_reason, 0) && _subscribe($si__input_label && $input_label__closures, _subscribe($si__input_submitLabel && $input_submitLabel__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.open,
		e: _serialize_if($scope0_reason, 1) && input.openChange,
		j: input.openChange || void 0,
		k: $si__input_submitLabel && $input_submitLabel__closures,
		l: $si__input_label && $input_label__closures
	});
	_resume_branch($scope0_id);
}, 1);
