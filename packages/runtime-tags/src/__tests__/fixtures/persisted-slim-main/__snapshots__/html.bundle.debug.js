// data.js
function getResults(search) {
	if (typeof window !== "undefined") {
		throw new Error("getResults is server-only");
	}
	const all = [
		"alpha",
		"beta",
		"gamma",
		"delta"
	];
	const items = all.filter((name) => name.includes(search.q ?? "")).map((name, i) => ({
		id: i + 1,
		name
	}));
	return {
		total: items.length,
		totalPages: 3,
		items
	};
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $search_q__closures = new Set();
	const $search_page__closures = new Set();
	const [search] = $global().search;
	const results = getResults(search);
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => results.total ? 0 : 1, $scope0_id, "#text/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), void 0, void 0, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html("<ul class=items>");
		_for_of(results.items, (item) => {
			const $scope5_id = _scope_id();
			_html(`<li>${_escape(_hole_value($scope5_id, "PatchHole:#text/0", item.name, _persisted_reason()))}${_el_resume($scope5_id, "#text/0", _persisted_reason())}</li>`);
			_persisted_reason() && writeScope($scope5_id, {}, "__tests__/template.marko", "9:6");
		}, function(item) {
			return item.id;
		}, $scope1_id, "#ul/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1, "__tests__/template.marko_5_update");
		_html("<nav class=pagination>");
		_for_to(results.totalPages, 1, 1, (page) => {
			const $scope2_id = _scope_id();
			_if(() => page === search.page ? 0 : 1, $scope2_id, "#text/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_2/update_if_#text/0", [() => {
				const $scope6_id = _scope_id();
				_html(`<span class=current>${_escape(_hole_value($scope6_id, "PatchHole:#text/0", page, _persisted_reason()))}${_el_resume($scope6_id, "#text/0")}</span>`);
				_persisted_reason() && writeScope($scope6_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "15:8");
			}, () => {
				const $scope3_id = _scope_id();
				_html(`<a${_attr("href", _hole_value($scope3_id, "PatchAttr:href:#a/0", `/search?page=${page}&q=${search.q}`, _persisted_reason()))}>${_escape(_hole_value($scope3_id, "PatchHole:#text/1", page, _persisted_reason()))}${_el_resume($scope3_id, "#text/1")}</a>${_el_resume($scope3_id, "#a/0", _persisted_reason())}`);
				_persisted_reason() && _subscribe($search_q__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "18:8"));
			}], ["__tests__/template.marko_6_update", "__tests__/template.marko_3_update"]);
			_persisted_reason() && _subscribe($search_page__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "14:6", { "#LoopKey": "14:10" }));
		}, 0, $scope1_id, "#nav/1", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</nav>", 0, "__tests__/template.marko_2_update");
		_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2");
	}, () => {
		const $scope4_id = _scope_id();
		_html("<p class=empty>No results</p>");
		_persisted_reason() && writeScope($scope4_id, {}, "__tests__/template.marko", "24:2");
	}], ["__tests__/template.marko_1_update", "__tests__/template.marko_4_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:search_q": _persisted_reason() && $search_q__closures,
		"ClosureScopes:search_page": _persisted_reason() && $search_page__closures
	}, "__tests__/template.marko", 0, {
		search_page: ["search.page", "3:9"],
		search_q: ["search.q", "3:9"],
		results_items: ["results.items", "4:8"],
		results_totalPages: ["results.totalPages", "4:8"],
		count: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_6_update": ["<span class=current> </span>", "D l"],
	"__tests__/template.marko_6_content": ["<span class=current> </span>", "D l"],
	"__tests__/template.marko_5_update": ["<li> </li>", "D l"],
	"__tests__/template.marko_5_content": ["<li> </li>", "D l"],
	"__tests__/template.marko_4_update": ["<p class=empty>No results</p>", "b"],
	"__tests__/template.marko_4_content": ["<p class=empty>No results</p>", "b"],
	"__tests__/template.marko_3_update": ["<a> </a>", " D l"],
	"__tests__/template.marko_3_content": ["<a> </a>", " D l"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<ul class=items></ul><nav class=pagination></nav>", " b b"],
	"__tests__/template.marko_1_content": ["<ul class=items></ul><nav class=pagination></nav>", " b b"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
