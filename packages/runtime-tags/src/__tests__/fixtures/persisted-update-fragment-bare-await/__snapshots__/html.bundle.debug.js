// data.js
function getReport(range) {
	if (typeof window !== "undefined") {
		throw new Error("getReport is server-only");
	}
	return resolveAfter(`report for ${range}`, 1);
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Reports = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", getReport($global().range), (data) => {
			const $scope3_id = _scope_id();
			_html(`<p class=report>${_escape(_hole_value($scope3_id, "PatchHole:#text/0", data, _persisted_reason()))}${_el_resume($scope3_id, "#text/0", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "16:4");
		}, _persisted_reason());
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
