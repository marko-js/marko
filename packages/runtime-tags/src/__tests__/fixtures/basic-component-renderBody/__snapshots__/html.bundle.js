// tags/my-button.marko
var my_button_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { onClick, content } = input;
	_html("<button>");
	_dynamic_tag($scope0_id, "b", content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { e: onClick });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = /* @__PURE__ */ new Set();
	let clickCount = 0;
	const $childScope = _peek_scope_id();
	my_button_default({
		onClick: _resume(function() {
			clickCount++;
		}, "a0", $scope0_id),
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(clickCount)}${_el_resume($scope1_id, "a")}`);
			_subscribe($clickCount__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		})
	});
	writeScope($scope0_id, {
		b: clickCount,
		Bb: $clickCount__closures,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
