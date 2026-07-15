// data.js
function getReport(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getReport is server-only");
	}
	return resolveAfter(`report for ${topic}`, 1);
}
function getSummary(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getSummary is server-only");
	}
	return resolveAfter(`summary of ${topic}`, 2);
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
		_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3_content", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "#text/0", getReport($global().topic), (report) => {
				const $scope5_id = _scope_id();
				_html(`<p class=report>${_escape(_hole_value($scope5_id, "PatchHole:#text/0", report, _persisted_reason()))}${_el_resume($scope5_id, "#text/0", _persisted_reason())}</p>`);
				_persisted_reason() && writeScope($scope5_id, {}, "__tests__/template.marko", "19:6");
			}, _persisted_reason());
			_await($scope3_id, "#text/1", getSummary($global().topic), (summary) => {
				const $scope6_id = _scope_id();
				_html(`<p class=summary>${_escape(_hole_value($scope6_id, "PatchHole:#text/0", summary, _persisted_reason()))}${_el_resume($scope6_id, "#text/0", _persisted_reason())}</p>`);
				_persisted_reason() && writeScope($scope6_id, {}, "__tests__/template.marko", "22:6");
			}, _persisted_reason());
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope2_id) }) }, "__tests__/template.marko_2/update_boundary_#text/0");
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
