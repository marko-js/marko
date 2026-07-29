// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_summary = _serialize_guard($scope0_reason, 0), $sg__input_entries = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_summary__closures = new Set();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			_group_site("__tests__/template.marko_1_update");
			const $scope1_id = _scope_id();
			_html("<section class=panel>");
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2_content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter(input.summary, 1), (summary) => {
					const $scope4_id = _scope_id();
					_html(`<p class=summary>${_escape(_hole_value($scope4_id, "PatchHole:#text/0", summary, _persisted_reason()))}${_el_resume($scope4_id, "#text/0", $sg__input_summary)}</p>`);
					$sg__input_summary && writeScope($scope4_id, {}, "__tests__/template.marko", "9:8");
				}, $sg__input_summary, "__tests__/template.marko_4_update");
				_subscribe($sg__input_summary && $input_summary__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6"));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("loading");
			}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/0", "__tests__/template.marko_2_update");
			_html("<ol class=entries>");
			_region(() => {
				forOf(input.entries, (entry) => {
					const $scope5_id = _scope_id();
					_html(`<li class=entry>${_escape(entry.text)}${_el_resume($scope5_id, "#text/0", $sg__input_entries)}</li>`);
					$sg__input_entries && writeScope($scope5_id, {}, "__tests__/template.marko", "14:8");
				});
			}, $scope1_id, "#ol/1", "__tests__/template.marko_r0");
			_html(`</ol>${_el_resume($scope1_id, "#ol/1", $sg__input_entries)}</section>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1 | _persisted_reason(), 1 | _persisted_reason(), 1, 0, 1, void 0, void 0, ["__tests__/template.marko_1_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_summary: input.summary,
		input_entries: input.entries,
		open: _seed_fill(_state_reason() && open),
		"ClosureScopes:input_summary": $sg__input_summary && $input_summary__closures
	}, "__tests__/template.marko", 0, {
		input_summary: ["input.summary"],
		input_entries: ["input.entries"],
		open: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_4_update": ["<p class=summary> </p>", "D l"],
	"__tests__/template.marko_4_content": ["<p class=summary> </p>", "D l"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<section class=panel><!><ol class=entries></ol></section>", "D%b l"],
	"__tests__/template.marko_1_content": ["<section class=panel><!><ol class=entries></ol></section>", "D%b l"],
	"__tests__/template.marko_0_update": ["<button class=toggle>toggle</button><!><!>", " b%c"],
	"__tests__/template.marko": ["<button class=toggle>toggle</button><!><!>", " b%c"]
});
