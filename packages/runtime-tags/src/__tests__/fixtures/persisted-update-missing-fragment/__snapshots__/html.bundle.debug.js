// data.js
const getNote = typeof window === "undefined" ? (panel, topic) => `panel ${panel} covers ${topic}` : undefined;
const getItems = typeof window === "undefined" ? (range) => [
	{
		id: 1,
		name: "alpha"
	},
	{
		id: 2,
		name: "beta"
	},
	range === "wide" && {
		id: 3,
		name: "gamma"
	}
].filter(Boolean) : undefined;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const PanelA = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p class=a>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", getNote?.("a", $global().topic), _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}) };
	const PanelB = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<p class=b>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", getNote?.("b", $global().topic), _persisted_reason()))}${_el_resume($scope2_id, "#text/0", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope2_id, {}, "__tests__/template.marko", "9:2");
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_if(() => $global().alert ? 0 : 1, $scope0_id, "#text/3", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_0/update_if_#text/3", [() => {
		const $scope3_id = _scope_id();
		_html("<p class=alert>attention needed</p>");
		_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "15:2");
	}, () => {
		const $scope4_id = _scope_id();
		_html("<p class=calm>all clear</p>");
		_persisted_reason() && writeScope($scope4_id, {}, "__tests__/template.marko", "18:2");
	}]);
	_html("<ul class=items>");
	_for_of(getItems?.($global().range), (item) => {
		const $scope5_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope5_id, "PatchHole:#text/0", item.name, _persisted_reason()))}${_el_resume($scope5_id, "#text/0", _persisted_reason())}</li>`);
		_persisted_reason() && writeScope($scope5_id, {}, "__tests__/template.marko", "23:4");
	}, function(item) {
		return item.id;
	}, $scope0_id, "#ul/4", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1, "__tests__/template.marko_0/update_for_#ul/4");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
