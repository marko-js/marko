// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_if(() => {
		if (show) {
			_group_site("__tests__/template.marko_1_update");
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}<p class=price>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", input.price, _persisted_reason()))}${_el_resume($scope1_id, "#text/2", _serialize_guard($scope0_reason, 0))}</p>`);
			_script($scope1_id, "__tests__/template.marko_1");
			writeScope($scope1_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/template.marko", "5:2", { n: "6:8" });
			return 0;
		}
	}, $scope0_id, "#text/3", 1 | _persisted_reason(), 1 | _persisted_reason(), void 0, void 0, void 0, void 0, void 0, ["__tests__/template.marko_1_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_price: input.price,
		count: _seed_fill(_state_reason() && count),
		show: _seed_fill(_state_reason() && show)
	}, "__tests__/template.marko", 0, {
		input_price: ["input.price"],
		count: "1:6",
		show: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<button class=tap>tap <!></button><p class=price> </p>", " Db%lD l"],
	"__tests__/template.marko_1_content": ["<button class=tap>tap <!></button><p class=price> </p>", " Db%lD l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><button class=toggle>toggle</button><!><!>", " Db%l b%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><button class=toggle>toggle</button><!><!>", " Db%l b%c"]
});
