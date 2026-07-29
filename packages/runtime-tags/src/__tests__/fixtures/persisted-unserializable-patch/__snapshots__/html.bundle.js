// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_label = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button class=log>log ${_sep($sg__input_label)}${_escape(_hole_value($scope0_id, "Qd", input.label, _persisted_reason()))}${_el_resume($scope0_id, "d", $sg__input_label)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: input.detail,
		i: _seed_fill(_state_reason() && count)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button> </button><button class=log>log <!></button>", " D l Db%l"],
	"a": ["<button> </button><button class=log>log <!></button>", " D l Db%l"]
});
