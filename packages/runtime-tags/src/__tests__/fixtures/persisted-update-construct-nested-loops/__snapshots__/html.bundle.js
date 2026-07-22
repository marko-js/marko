// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_escape(count)}${_el_resume($scope0_id, "a")}</p>`);
	_for_of($global().groups, (group) => {
		const $scope1_id = _scope_id();
		_html(`<section><h3>${_escape(_hole_value($scope1_id, "Qa", group.id, _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</h3>`);
		_for_of(group.items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_escape(_hole_value($scope2_id, "Qb", group.id, _persisted_reason()))}${_el_resume($scope2_id, "b", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "Qc", item.id, _persisted_reason()))}${_el_resume($scope2_id, "c", _persisted_reason())}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a1");
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, "id", $scope1_id, "b", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a2");
		_html("</section>");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "b", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a3");
	writeScope($scope0_id, { c: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<button><!>:<!></button>", " D%c%l"],
	"a4": ["<button><!>:<!></button>", " D%c%l"],
	"a3": ["<section><h3> </h3><!></section>", "E l%l"],
	"a5": ["<section><h3> </h3><!></section>", "E l%l"],
	"a0": ["<p> </p><!><!>", "D l%c"],
	"a": ["<p> </p><!><!>", "D l%c"]
});
