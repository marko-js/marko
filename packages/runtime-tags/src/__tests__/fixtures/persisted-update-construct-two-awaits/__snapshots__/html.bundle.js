// data.js
function getReport(topic) {
	if (typeof window !== "undefined") throw new Error("getReport is server-only");
	return resolveAfter(`report for ${topic}`, 1);
}
function getSummary(topic) {
	if (typeof window !== "undefined") throw new Error("getSummary is server-only");
	return resolveAfter(`summary of ${topic}`, 2);
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
	const Reports = { content: _content("a9", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "a", _content_resume("a7", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", getReport($global().topic), (report) => {
				const $scope5_id = _scope_id();
				_html(`<p class=report>${_escape(_hole_value($scope5_id, "Qa", report, _persisted_reason()))}${_el_resume($scope5_id, "a", _persisted_reason())}</p>`);
				_persisted_reason() && writeScope($scope5_id, {});
			}, _persisted_reason(), "a4");
			_await($scope3_id, "b", getSummary($global().topic), (summary) => {
				const $scope6_id = _scope_id();
				_html(`<p class=summary>${_escape(_hole_value($scope6_id, "Qa", summary, _persisted_reason()))}${_el_resume($scope6_id, "a", _persisted_reason())}</p>`);
				_persisted_reason() && writeScope($scope6_id, {});
			}, _persisted_reason(), "a5");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope2_id) }) }, "a0", "a8");
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a10");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<p class=summary> </p>", "D l"],
	"a11": ["<p class=summary> </p>", "D l"],
	"a4": ["<p class=report> </p>", "D l"],
	"a12": ["<p class=report> </p>", "D l"],
	"a8": ["<!><!><!><!>", "b%b%c"],
	"a7": ["<!><!><!><!>", "b%b%c"],
	"a13": ["<!><!><!>", "b%c"],
	"a9": ["<!><!><!>", "b%c"],
	"a2": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
