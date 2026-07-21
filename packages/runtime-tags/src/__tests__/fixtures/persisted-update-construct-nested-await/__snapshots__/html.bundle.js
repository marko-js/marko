// data.js
function getSummary(topic) {
	if (typeof window !== "undefined") throw new Error("getSummary is server-only");
	return resolveAfter(`${topic} summary`, 1);
}
function getDetail(topic) {
	if (typeof window !== "undefined") throw new Error("getDetail is server-only");
	return resolveAfter(`${topic} detail`, 2);
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a4", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Reports = { content: _content("a13", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "a", _content_resume("a11", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", getSummary($global().topic), (summary) => {
				const $scope5_id = _scope_id();
				_html(`<p class=summary>${_escape(_hole_value($scope5_id, "Qa", summary, _persisted_reason()))}${_el_resume($scope5_id, "a", _persisted_reason())}</p>`);
				_try($scope5_id, "b", _content_resume("a7", () => {
					const $scope6_id = _scope_id();
					_scope_reason();
					_await($scope6_id, "a", getDetail($global().topic), (detail) => {
						const $scope8_id = _scope_id();
						_html(`<p class=detail>${_escape(_hole_value($scope8_id, "Qa", detail, _persisted_reason()))}${_el_resume($scope8_id, "a", _persisted_reason())}</p>`);
						_persisted_reason() && writeScope($scope8_id, {});
					}, _persisted_reason(), "a5");
				}, $scope5_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
					_scope_reason();
					_scope_id();
					_html("<p class=sub>detail…</p>");
				}, $scope5_id) }) }, "a1", "a8");
				_persisted_reason() && writeScope($scope5_id, {});
			}, _persisted_reason(), "a9");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a10", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=loading>summary…</p>");
		}, $scope2_id) }) }, "a0", "a12");
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "reports" ? Reports : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a2");
	_script($scope0_id, "a14");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<p class=detail> </p>", "D l"],
	"a15": ["<p class=detail> </p>", "D l"],
	"a16": ["<p class=sub>detail…</p>", "b"],
	"a6": ["<p class=sub>detail…</p>", "b"],
	"a8": ["<!><!><!>", "b%c"],
	"a7": ["<!><!><!>", "b%c"],
	"a9": ["<p class=summary> </p><!><!>", "D l%c"],
	"a17": ["<p class=summary> </p><!><!>", "D l%c"],
	"a18": ["<p class=loading>summary…</p>", "b"],
	"a10": ["<p class=loading>summary…</p>", "b"],
	"a12": ["<!><!><!>", "b%c"],
	"a11": ["<!><!><!>", "b%c"],
	"a19": ["<!><!><!>", "b%c"],
	"a13": ["<!><!><!>", "b%c"],
	"a20": ["<p class=home>welcome home</p>", "b"],
	"a4": ["<p class=home>welcome home</p>", "b"],
	"a3": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
