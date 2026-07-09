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
		_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3_content", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_try($scope3_id, "#text/0", _content_resume("__tests__/template.marko_5_content", () => {
				const $scope5_id = _scope_id();
				_scope_reason();
				_await($scope5_id, "#text/0", getReport($global().range), (data) => {
					const $scope7_id = _scope_id();
					_html(`<p class=report>${_escape(_hole_value($scope7_id, "UpdateHole:#text/0", data, _persisted_reason()))}${_el_resume($scope7_id, "#text/0", _persisted_reason())}</p>`);
					_persisted_reason() && writeScope($scope7_id, {}, "__tests__/template.marko", "27:8");
				}, _persisted_reason());
			}, $scope3_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_6_content", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html("<p class=loading>loading…</p>");
			}, $scope3_id) }) }, "__tests__/template.marko_3/update_boundary_#text/0");
		}, $scope2_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_4_content", (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`<p class=failed>failed: ${_sep($sg__err_message)}${_escape(_hole_value($scope4_id, "UpdateHole:#text/0", err.message, _persisted_reason()))}${_el_resume($scope4_id, "#text/0", $sg__err_message)}</p>`);
			$sg__err_message && writeScope($scope4_id, {}, "__tests__/template.marko", "20:6");
		}, $scope2_id) }) });
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
