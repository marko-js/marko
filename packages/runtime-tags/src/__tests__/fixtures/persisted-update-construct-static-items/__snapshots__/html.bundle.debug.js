// data.js
function getRatings(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getRatings is server-only");
	}
	return resolveAfter([
		"good",
		"great",
		"amazing"
	], 1);
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=clicks>clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Ratings = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3_content", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "#text/0", getRatings($global().topic), (ratings) => {
				const $scope5_id = _scope_id();
				_html("<div class=ratings>");
				_for_to(ratings.length, 1, 1, (i) => {
					const $scope6_id = _scope_id();
					_html(`<div class=rating>${_escape(_hole_value($scope6_id, "PatchHole:#text/0", ratings[i - 1], _persisted_reason()))}${_el_resume($scope6_id, "#text/0", _persisted_reason())} for ${_sep(_persisted_reason())}${_escape(_hole_value($scope6_id, "PatchHole:#text/1", $global().topic, _persisted_reason()))}${_el_resume($scope6_id, "#text/1", _persisted_reason())}</div>`);
					_persisted_reason() && writeScope($scope6_id, { _: _scope_with_id($scope5_id) }, "__tests__/template.marko", "18:10");
				}, 0, $scope5_id, "#div/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</div>", 1, "__tests__/template.marko_6_update");
				_persisted_reason() && writeScope($scope5_id, {}, "__tests__/template.marko", "16:6", { ratings: "16:12" });
			}, _persisted_reason(), "__tests__/template.marko_5_update");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("loading ratings…");
		}, $scope2_id) }) }, "__tests__/template.marko_2/update_boundary_#text/0", "__tests__/template.marko_3_update");
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "ratings" ? Ratings : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { clicks: _state_reason() && clicks }, "__tests__/template.marko", 0, { clicks: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_6_update": ["<div class=rating><!> for <!></div>", "D%c%l"],
	"__tests__/template.marko_6_content": ["<div class=rating><!> for <!></div>", "D%c%l"],
	"__tests__/template.marko_5_update": ["<div class=ratings></div>", " b"],
	"__tests__/template.marko_5_content": ["<div class=ratings></div>", " b"],
	"__tests__/template.marko_4_update": ["loading ratings…", "b"],
	"__tests__/template.marko_4_content": ["loading ratings…", "b"],
	"__tests__/template.marko_3_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_3_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<p class=home>welcome home</p>", "b"],
	"__tests__/template.marko_1_content": ["<p class=home>welcome home</p>", "b"],
	"__tests__/template.marko_0_update": ["<button class=clicks>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=clicks>clicked <!></button><!><!>", " Db%l%c"]
});
