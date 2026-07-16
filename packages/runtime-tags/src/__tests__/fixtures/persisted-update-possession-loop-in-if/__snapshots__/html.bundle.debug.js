// data.js
const getTasks = typeof window === "undefined" ? (day) => day === "mon" ? [{
	id: 1,
	name: "brew",
	eta: "5m"
}, {
	id: 2,
	name: "grind",
	eta: "2m"
}] : day === "tue" ? [
	{
		id: 3,
		name: "roast",
		eta: "45m"
	},
	{
		id: 2,
		name: "grind",
		eta: "3m"
	},
	{
		id: 1,
		name: "brew",
		eta: "6m"
	}
] : [{
	id: 2,
	name: "grind",
	eta: "4m"
}, {
	id: 1,
	name: "brew",
	eta: "7m"
}] : undefined;
const serverTaskSentinel = typeof window === "undefined" ? () => "server-only task sentinel" : undefined;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => $global().lane === "active" ? 0 : 1, $scope0_id, "#text/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html("<ol class=lane>");
		_for_of(getTasks?.($global().day), (task) => {
			const $scope3_id = _scope_id();
			_html(`<li><em>TASK_ROW_MARKUP</em>${_escape(serverTaskSentinel?.())}<span class=name>${_escape(_hole_value($scope3_id, "PatchHole:#text/1", task.name, _persisted_reason()))}${_el_resume($scope3_id, "#text/1", _persisted_reason())}</span>: <span class=eta>${_escape(_hole_value($scope3_id, "PatchHole:#text/2", task.eta, _persisted_reason()))}${_el_resume($scope3_id, "#text/2", _persisted_reason())}</span></li>`);
			_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, function(task) {
			return task.id;
		}, $scope1_id, "#ol/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ol>", 1, "__tests__/template.marko_1/update_for_#ol/0");
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p class=closed>lane closed</p>");
		_persisted_reason() && writeScope($scope2_id, {}, "__tests__/template.marko", "17:2");
	}]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
