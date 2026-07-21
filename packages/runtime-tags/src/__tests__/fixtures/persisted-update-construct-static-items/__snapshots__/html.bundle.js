// data.js
function getRatings(topic) {
	if (typeof window !== "undefined") throw new Error("getRatings is server-only");
	return resolveAfter([
		"good",
		"great",
		"amazing"
	], 1);
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=clicks>clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Ratings = { content: _content("a9", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "a", _content_resume("a7", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", getRatings($global().topic), (ratings) => {
				const $scope5_id = _scope_id();
				_html("<div class=ratings>");
				_for_to(ratings.length, 1, 1, (i) => {
					const $scope6_id = _scope_id();
					_html(`<div class=rating>${_escape(_hole_value($scope6_id, "Qa", ratings[i - 1], _persisted_reason()))}${_el_resume($scope6_id, "a", _persisted_reason())} for ${_sep(_persisted_reason())}${_escape(_hole_value($scope6_id, "Qb", $global().topic, _persisted_reason()))}${_el_resume($scope6_id, "b", _persisted_reason())}</div>`);
					_persisted_reason() && writeScope($scope6_id, { _: _scope_with_id($scope5_id) });
				}, 0, $scope5_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</div>", 1, "a4");
				_persisted_reason() && writeScope($scope5_id, {});
			}, _persisted_reason(), "a5");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
			_scope_reason();
			_scope_id();
			_html("loading ratings…");
		}, $scope2_id) }) }, "a0", "a8");
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "ratings" ? Ratings : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a10");
	writeScope($scope0_id, { d: _state_reason() && clicks });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<div class=rating><!> for <!></div>", "D%c%l"],
	"a11": ["<div class=rating><!> for <!></div>", "D%c%l"],
	"a5": ["<div class=ratings></div>", " b"],
	"a12": ["<div class=ratings></div>", " b"],
	"a13": ["loading ratings…", "b"],
	"a6": ["loading ratings…", "b"],
	"a8": ["<!><!><!>", "b%c"],
	"a7": ["<!><!><!>", "b%c"],
	"a14": ["<!><!><!>", "b%c"],
	"a9": ["<!><!><!>", "b%c"],
	"a15": ["<p class=home>welcome home</p>", "b"],
	"a3": ["<p class=home>welcome home</p>", "b"],
	"a2": ["<button class=clicks>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=clicks>clicked <!></button><!><!>", " Db%l%c"]
});
