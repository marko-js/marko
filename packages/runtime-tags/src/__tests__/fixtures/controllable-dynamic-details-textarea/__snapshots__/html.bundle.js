// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $text__closures = /* @__PURE__ */ new Set();
	let open = false;
	let text = "first";
	const detailsTag = "details";
	const textareaTag = "textarea";
	_dynamic_tag($scope0_id, "a", detailsTag, {
		open,
		openChange: _resume(function(next) {
			open = next;
		}, "a0", $scope0_id)
	}, _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<summary>toggle</summary>");
		_dynamic_tag($scope1_id, "a", textareaTag, {
			value: text,
			valueChange: _resume(function(next) {
				text = next;
			}, "a1", $scope1_id)
		});
		_subscribe($text__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id));
	_html(`<output>${_text_resume($scope0_id, "b", open ? "open" : "closed")}/${_text_resume($scope0_id, "c", text, 2)}</output>`);
	writeScope($scope0_id, {
		e: text,
		f: detailsTag,
		h: textareaTag,
		i: $text__closures
	});
	_resume_branch($scope0_id);
}, 1);
