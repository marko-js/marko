// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<button class=log>log ${_sep($sg__input_label)}${_escape(_hole_value($scope0_id, "PatchHole:#text/3", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/3", $sg__input_label)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_detail: input.detail,
		count: _seed_fill(_state_reason() && count)
	}, "__tests__/template.marko", 0, {
		input_detail: ["input.detail"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button> </button><button class=log>log <!></button>", " D l Db%l"],
	"__tests__/template.marko": ["<button> </button><button class=log>log <!></button>", " D l Db%l"]
});
