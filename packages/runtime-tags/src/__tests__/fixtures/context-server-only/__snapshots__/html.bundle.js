// resolve-theme.js
function resolveTheme($global, _marker) {
	return $global.theme;
}

// provider.marko
var provider_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("a", resolveTheme($global(), "context_value_sentinel"), () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	provider_default({ content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const theme = _context_get("a");
		const loggedTheme = _context_get("a");
		_html(`<div>${_escape(theme)}${_el_resume($scope1_id, "a")}</div><button>log theme</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, { d: loggedTheme });
	}) });
}, 1);
