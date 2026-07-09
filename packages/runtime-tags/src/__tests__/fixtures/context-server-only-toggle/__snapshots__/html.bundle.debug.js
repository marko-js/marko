// tags/info-display.marko
var info_display_default = _template("__tests__/tags/info-display.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const theme = _context_get("__tests__/tags/info-provider.marko", "<info-provider>");
	_html(`<span>${_escape(theme)}${_el_resume($scope0_id, "#text/0")}</span>`);
	writeScope($scope0_id, {}, "__tests__/tags/info-display.marko", 0);
});

// resolve-info.js
function resolveInfo($global, _marker) {
	return $global.theme;
}

// tags/info-provider.marko
var info_provider_default = _template("__tests__/tags/info-provider.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("__tests__/tags/info-provider.marko", resolveInfo($global(), "toggle_context_sentinel"), () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/info-provider.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	info_provider_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let show = false;
		let items = [];
		_html(`<button class=show>show</button>${_el_resume($scope1_id, "#button/0")}<button class=add>add</button>${_el_resume($scope1_id, "#button/1")}`);
		_context_reserve("__tests__/tags/info-provider.marko");
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				info_display_default({});
				writeScope($scope2_id, {}, "__tests__/template.marko", "8:4");
				return 0;
			}
		}, $scope1_id, "#text/2");
		_context_reserve("__tests__/tags/info-provider.marko");
		_for_of(items, (i) => {
			const $scope3_id = _scope_id();
			info_display_default({});
			writeScope($scope3_id, {}, "__tests__/template.marko", "11:4");
		}, (x) => x, $scope1_id, "#text/3");
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			show,
			items
		}, "__tests__/template.marko", "3:2", {
			show: "4:8",
			items: "5:8"
		});
		_resume_branch($scope1_id);
	}) });
}, 1);
