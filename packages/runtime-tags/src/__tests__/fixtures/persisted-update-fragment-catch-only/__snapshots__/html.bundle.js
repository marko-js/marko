// data.js
function getReport(range) {
	if (typeof window !== "undefined") throw new Error("getReport is server-only");
	return resolveAfter(`report for ${range}`, 1);
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Reports = { content: _content("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "a", _content_resume("a6", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_try($scope3_id, "a", _content_resume("a8", () => {
				const $scope5_id = _scope_id();
				_scope_reason();
				_await($scope5_id, "a", getReport($global().range), (data) => {
					const $scope7_id = _scope_id();
					_html(`<p class=report>${_escape(_hole_value($scope7_id, "Qa", data, _persisted_reason()))}${_el_resume($scope7_id, "a", _persisted_reason())}</p>`);
					_persisted_reason() && writeScope($scope7_id, {});
				}, _persisted_reason());
			}, $scope3_id), { placeholder: attrTag({ content: _content_resume("a9", () => {
				_scope_reason();
				_scope_id();
				_html("<p class=loading>loading…</p>");
			}, $scope3_id) }) }, "a5");
		}, $scope2_id), { catch: attrTag({ content: _content_resume("a7", (err) => {
			const $sg__err_message = _serialize_guard(_scope_reason(), 0);
			const $scope4_id = _scope_id();
			_html(`<p class=failed>failed: ${_sep($sg__err_message)}${_escape(_hole_value($scope4_id, "Qa", err.message, _persisted_reason()))}${_el_resume($scope4_id, "a", $sg__err_message)}</p>`);
			$sg__err_message && writeScope($scope4_id, {});
		}, $scope2_id) }) });
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
