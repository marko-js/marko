// resolve-theme.js
function resolveTheme($global, _marker) {
	return $global.theme;
}

// provider.marko
var provider_default = _template("__tests__/provider.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("__tests__/provider.marko", resolveTheme($global(), "context_value_sentinel"), () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/provider.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	provider_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const theme = _context_get("__tests__/provider.marko", "./provider.marko");
		const loggedTheme = _context_get("__tests__/provider.marko", "./provider.marko");
		_html(`<div>${_escape(theme)}${_el_resume($scope1_id, "#text/0")}</div><button>log theme</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { loggedTheme }, "__tests__/template.marko", "3:2", { loggedTheme: "9:12" });
	}) });
}, 1);
