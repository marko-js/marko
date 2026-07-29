// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let count = 0;
	let list = ["a", "b"];
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	_if(() => {
		{
			_group_site("a1");
			const $scope1_id = _scope_id();
			_html(`<p class=detail>detail <!>${_escape(count)}${_el_resume($scope1_id, "a")}</p>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "e", 1, 1, 1, 0, 1, void 0, void 0, ["a1"]);
	_html("<ul class=items>");
	_for_of(list, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope2_id, "Qa", item, _state_reason()))}${_el_resume($scope2_id, "a")}:<!>${_escape(count)}${_el_resume($scope2_id, "b")}</li>`);
		writeScope($scope2_id, {});
	}, function(item) {
		return item;
	}, $scope0_id, "f", 1, 1, 1, "</ul>", 1, "a2");
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		k: _seed_fill(_state_reason() && show),
		l: _seed_fill(_state_reason() && count),
		m: _seed_fill(_state_reason() && list)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<li><!>:<!></li>", "D%c%l"],
	"a4": ["<li><!>:<!></li>", "D%c%l"],
	"a1": ["<p class=detail>detail <!></p>", "Db%l"],
	"a5": ["<p class=detail>detail <!></p>", "Db%l"],
	"a0": ["<h1> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><!><ul class=items></ul><button class=add>add</button>", "D l b Db%l%b b b"],
	"a": ["<h1> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><!><ul class=items></ul><button class=add>add</button>", "D l b Db%l%b b b"]
});
