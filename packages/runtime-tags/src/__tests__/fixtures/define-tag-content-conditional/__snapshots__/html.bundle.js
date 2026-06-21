// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_content("a0", ({ content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<section>");
		_dynamic_tag($scope1_id, "a", content, {}, 0, 0, _serialize_guard($scope1_reason, 0));
		_html("</section>");
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	});
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a2");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
