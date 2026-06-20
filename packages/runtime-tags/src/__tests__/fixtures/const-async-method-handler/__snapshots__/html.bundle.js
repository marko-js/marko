// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loaded = "no";
	const handlers = { load: _resume(async function() {
		loaded = await Promise.resolve("yes");
	}, "a0", $scope0_id) };
	_html(`<button>${_escape(loaded)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { e: handlers.load });
	_resume_branch($scope0_id);
}, 1);
