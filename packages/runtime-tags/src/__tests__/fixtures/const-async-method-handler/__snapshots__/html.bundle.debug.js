// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loaded = "no";
	const handlers = { load: _resume(async function() {
		loaded = await Promise.resolve("yes");
	}, "__tests__/template.marko_0/handlers", $scope0_id) };
	_html(`<button>${_escape(loaded)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_handlers_load");
	writeScope($scope0_id, { handlers_load: handlers.load }, "__tests__/template.marko", 0, { handlers_load: ["handlers.load", "4:8"] });
	_resume_branch($scope0_id);
}, 1);
