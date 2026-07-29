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
}] : void 0;
const serverTaskSentinel = typeof window === "undefined" ? () => "server-only task sentinel" : void 0;

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => $global().lane === "active" ? 0 : 1, $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html("<ol class=lane>");
		_for_of(getTasks?.($global().day), (task) => {
			const $scope3_id = _scope_id();
			_html(`<li><em>TASK_ROW_MARKUP</em>${_escape(serverTaskSentinel?.())}<span class=name>${_escape(task.name)}${_el_resume($scope3_id, "b", _persisted_reason())}</span>: <span class=eta>${_escape(task.eta)}${_el_resume($scope3_id, "c", _persisted_reason())}</span></li>`);
			_persisted_reason() && writeScope($scope3_id, {});
		}, function(task) {
			return task.id;
		}, $scope1_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ol>", 1);
		_persisted_reason() && writeScope($scope1_id, {});
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p class=closed>lane closed</p>");
		_persisted_reason() && writeScope($scope2_id, {});
	}], [0, 0], "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { d: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
