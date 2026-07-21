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
	const Home = { content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Reports = { content: _content("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", getReport($global().range), (data) => {
			const $scope3_id = _scope_id();
			_html(`<p class=report>${_escape(_hole_value($scope3_id, "Qa", data, _persisted_reason()))}${_el_resume($scope3_id, "a", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope3_id, {});
		}, _persisted_reason(), "a3");
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
	_script($scope0_id, "a5");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<p class=report> </p>", "D l"],
	"a6": ["<p class=report> </p>", "D l"],
	"a7": ["<!><!><!>", "b%c"],
	"a4": ["<!><!><!>", "b%c"],
	"a8": ["<p class=home>welcome home</p>", "b"],
	"a2": ["<p class=home>welcome home</p>", "b"],
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
