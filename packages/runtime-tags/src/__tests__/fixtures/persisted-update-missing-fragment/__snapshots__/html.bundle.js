// data.js
const getNote = typeof window === "undefined" ? (panel, topic) => `panel ${panel} covers ${topic}` : void 0;
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
].filter(Boolean) : void 0;

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const PanelA = { content: _content("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p class=a>${_escape(_hole_value($scope1_id, "Qa", getNote?.("a", $global().topic), _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}) };
	const PanelB = { content: _content("a6", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<p class=b>${_escape(_hole_value($scope2_id, "Qa", getNote?.("b", $global().topic), _persisted_reason()))}${_el_resume($scope2_id, "a", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope2_id, {});
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_if(() => $global().alert ? 0 : 1, $scope0_id, "d", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a2", [() => {
		const $scope3_id = _scope_id();
		_html("<p class=alert>attention needed</p>");
		_persisted_reason() && writeScope($scope3_id, {});
	}, () => {
		const $scope4_id = _scope_id();
		_html("<p class=calm>all clear</p>");
		_persisted_reason() && writeScope($scope4_id, {});
	}]);
	_html("<ul class=items>");
	_for_of(getItems?.($global().range), (item) => {
		const $scope5_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope5_id, "Qa", item.name, _persisted_reason()))}${_el_resume($scope5_id, "a", _persisted_reason())}</li>`);
		_persisted_reason() && writeScope($scope5_id, {});
	}, function(item) {
		return item.id;
	}, $scope0_id, "e", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1, "a3");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { f: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
