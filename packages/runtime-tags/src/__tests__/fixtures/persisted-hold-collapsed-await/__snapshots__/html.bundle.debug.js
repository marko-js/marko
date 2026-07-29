// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let collapsed = false;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><button class=collapse>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (!collapsed) {
			_group_site("__tests__/template.marko_1_update");
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2_content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter(input.note, 1), (note) => {
					const $scope4_id = _scope_id();
					_html(`<p class=note>${_escape(_hole_value($scope4_id, "PatchHole:#text/0", note, _persisted_reason()))}${_el_resume($scope4_id, "#text/0", $sg__input_note)}</p>`);
					$sg__input_note && writeScope($scope4_id, {}, "__tests__/template.marko", "9:6");
				}, $sg__input_note, "__tests__/template.marko_4_update");
				_subscribe($sg__input_note && $input_note__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4"));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("loading");
			}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/0", "__tests__/template.marko_2_update");
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/2", void 0, void 0, void 0, void 0, void 0, void 0, void 0, ["__tests__/template.marko_1_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_note: input.note,
		collapsed: _seed_fill(_state_reason() && collapsed),
		"ClosureScopes:input_note": $sg__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		collapsed: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_4_update": ["<p class=note> </p>", "D l"],
	"__tests__/template.marko_4_content": ["<p class=note> </p>", "D l"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<h1> </h1><button class=collapse>toggle</button><!><!>", "D l b%c"],
	"__tests__/template.marko": ["<h1> </h1><button class=collapse>toggle</button><!><!>", "D l b%c"]
});
