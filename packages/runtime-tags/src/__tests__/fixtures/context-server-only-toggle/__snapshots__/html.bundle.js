// tags/info-display.marko
var info_display_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(_context_get("c"))}${_el_resume($scope0_id, "a")}</span>`);
	writeScope($scope0_id, {});
});

// resolve-info.js
function resolveInfo($global, _marker) {
	return $global.theme;
}

// tags/info-provider.marko
var info_provider_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("c", resolveInfo($global(), "toggle_context_sentinel"), () => {
		_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	info_provider_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let show = false;
		let items = [];
		_html(`<button class=show>show</button>${_el_resume($scope1_id, "a")}<button class=add>add</button>${_el_resume($scope1_id, "b")}`);
		_context_reserve("c");
		_if(() => {}, $scope1_id, "c");
		_context_reserve("c");
		_for_of(items, (i) => {
			const $scope3_id = _scope_id();
			info_display_default({});
			writeScope($scope3_id, {});
		}, (x) => x, $scope1_id, "d");
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			e: show,
			f: items
		});
		_resume_branch($scope1_id);
	}) });
}, 1);
