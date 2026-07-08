// resolve-label.js
function resolveLabel($global, _marker) {
	return $global.label;
}

// labeled-region.marko
var labeled_region_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("a", resolveLabel($global(), "self_context_sentinel"), () => {
		_html(`<em>${_escape(_context_get("a"))}${_el_resume($scope0_id, "a")}</em>`);
		_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	labeled_region_default({ content: _content("b0", () => {
		_scope_reason();
		_scope_id();
		_html("<div>static</div>");
	}) });
	let count = 0;
	_html(`<button class=inc>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
