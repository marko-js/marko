// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}:<!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { g: count });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "on-click",
	selector: "body"
}]);
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(_serialize_guard($scope0_reason, 0));
		const $childScope = _peek_scope_id();
		$Child_withLoadAssets({ label: input.label });
		$si__input_label && _subscribe($input_label__closures, writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("<div id=error>failed</div>");
	}, $scope0_id) }) });
	_html("</main>");
	$si__input_label && writeScope($scope0_id, { e: $input_label__closures });
}, 1);
