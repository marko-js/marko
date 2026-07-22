// data.js
function getReport(topic) {
	if (typeof window !== "undefined") throw new Error("getReport is server-only");
	return resolveAfter(`report for ${topic}`, 1);
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
	const Reports = { content: _content("a8", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "a", _content_resume("a6", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", getReport($global().topic), (report) => {
				const $scope5_id = _scope_id();
				_html(`<p class=report>${_escape(_hole_value($scope5_id, "Qa", report, _persisted_reason()))}${_el_resume($scope5_id, "a", _persisted_reason())}</p>`);
				_persisted_reason() && writeScope($scope5_id, {});
			}, _persisted_reason(), "a4");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope2_id) }) }, "a0", "a7");
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a9");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<p class=report> </p>", "D l"],
	"a10": ["<p class=report> </p>", "D l"],
	"a11": ["<p class=loading>loading…</p>", "b"],
	"a5": ["<p class=loading>loading…</p>", "b"],
	"a7": ["<!><!><!>", "b%c"],
	"a6": ["<!><!><!>", "b%c"],
	"a12": ["<!><!><!>", "b%c"],
	"a8": ["<!><!><!>", "b%c"],
	"a13": ["<p class=home>welcome home</p>", "b"],
	"a3": ["<p class=home>welcome home</p>", "b"],
	"a2": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
