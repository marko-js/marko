// resolve-label.js
function resolveLabel($global, _marker) {
	return $global.label;
}

// labeled-region.marko
var labeled_region_default = _template("__tests__/labeled-region.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("__tests__/labeled-region.marko", resolveLabel($global(), "self_context_sentinel"), () => {
		const label = _context_get("__tests__/labeled-region.marko", "./labeled-region.marko");
		_html(`<em>${_escape(label)}${_el_resume($scope0_id, "#text/0")}</em>`);
		_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	writeScope($scope0_id, {}, "__tests__/labeled-region.marko", 0);
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	labeled_region_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>static</div>");
	}) });
	let count = 0;
	_html(`<button class=inc>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "9:6" });
	_resume_branch($scope0_id);
}, 1);
