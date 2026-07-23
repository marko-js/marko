// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let count = 0;
	let list = ["a", "b"];
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<p class=detail>detail <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/4", 1, 1, 1, 0, 1, void 0, void 0, ["__tests__/template.marko_1_update"]);
	_html("<ul class=items>");
	_for_of(list, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", item, _state_reason()))}${_el_resume($scope2_id, "#text/0")}:<!>${_escape(count)}${_el_resume($scope2_id, "#text/1")}</li>`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "11:4");
	}, function(item) {
		return item;
	}, $scope0_id, "#ul/5", 1, 1, 1, "</ul>", 1, "__tests__/template.marko_2_update");
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show: _state_reason() && show,
		count: _state_reason() && count,
		list: _state_reason() && list
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		count: "2:6",
		list: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<li><!>:<!></li>", "D%c%l"],
	"__tests__/template.marko_2_content": ["<li><!>:<!></li>", "D%c%l"],
	"__tests__/template.marko_1_update": ["<p class=detail>detail <!></p>", "Db%l"],
	"__tests__/template.marko_1_content": ["<p class=detail>detail <!></p>", "Db%l"],
	"__tests__/template.marko_0_update": ["<h1> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><!><ul class=items></ul><button class=add>add</button>", "D l b Db%l%b b b"],
	"__tests__/template.marko": ["<h1> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><!><ul class=items></ul><button class=add>add</button>", "D l b Db%l%b b b"]
});
