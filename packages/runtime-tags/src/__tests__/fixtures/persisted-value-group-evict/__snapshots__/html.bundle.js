// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_if(() => {
		{
			_group_site("a2");
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}<p class=price>${_escape(_hole_value($scope1_id, "Qc", input.price, _persisted_reason()))}${_el_resume($scope1_id, "c", _serialize_guard($scope0_reason, 0))}</p>`);
			_script($scope1_id, "a1");
			writeScope($scope1_id, { d: _seed_fill(_state_reason() && n) });
			return 0;
		}
	}, $scope0_id, "d", 1 | _persisted_reason(), 1 | _persisted_reason(), void 0, void 0, void 0, void 0, void 0, ["a2"]);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		g: input.price,
		h: _seed_fill(_state_reason() && count),
		i: _seed_fill(_state_reason() && show)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<button class=tap>tap <!></button><p class=price> </p>", " Db%lD l"],
	"a4": ["<button class=tap>tap <!></button><p class=price> </p>", " Db%lD l"],
	"a0": ["<button class=count>clicked <!></button><button class=toggle>toggle</button><!><!>", " Db%l b%c"],
	"a": ["<button class=count>clicked <!></button><button class=toggle>toggle</button><!><!>", " Db%l b%c"]
});
