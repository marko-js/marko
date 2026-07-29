// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_escape(count)}${_el_resume($scope0_id, "#text/0")}</p>`);
	_for_of($global().groups, (group) => {
		const $scope1_id = _scope_id();
		_html(`<section><h3>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", group.id, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</h3>`);
		_for_of(group.items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_escape(_hole_value($scope2_id, "PatchHole:#text/1", group.id, _persisted_reason()))}${_el_resume($scope2_id, "#text/1", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "PatchHole:#text/2", item.id, _persisted_reason()))}${_el_resume($scope2_id, "#text/2", _persisted_reason())}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6");
		}, "id", $scope1_id, "#text/1", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_2_update");
		_html("</section>");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2", { group_id: ["group.id", "3:6"] });
	}, "id", $scope0_id, "#text/1", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_1_update");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<button><!>:<!></button>", " D%c%l"],
	"__tests__/template.marko_2_content": ["<button><!>:<!></button>", " D%c%l"],
	"__tests__/template.marko_1_update": ["<section><h3> </h3><!></section>", "E l%l"],
	"__tests__/template.marko_1_content": ["<section><h3> </h3><!></section>", "E l%l"],
	"__tests__/template.marko_0_update": ["<p> </p><!><!>", "D l%c"],
	"__tests__/template.marko": ["<p> </p><!><!>", "D l%c"]
});
