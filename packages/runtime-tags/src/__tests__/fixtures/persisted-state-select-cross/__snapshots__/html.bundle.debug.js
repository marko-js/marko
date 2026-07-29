// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 0), $sg__input_rowsA = _serialize_guard($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2), $sg__input_rowsB = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	let tab = 0;
	_html(`<button class=a>A</button>${_el_resume($scope0_id, "#button/0")}<button class=b>B</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (tab === 0) {
			_group_site("__tests__/template.marko_1_update");
			const $scope1_id = _scope_id();
			_html("<section class=pane-a>");
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2_content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "#text/0", resolveAfter(input.a, 1), (note) => {
					const $scope6_id = _scope_id();
					_html(`<p class=note-a>${_escape(_hole_value($scope6_id, "PatchHole:#text/0", note, _persisted_reason()))}${_el_resume($scope6_id, "#text/0", $sg__input_a)}</p>`);
					$sg__input_a && writeScope($scope6_id, {}, "__tests__/template.marko", "10:8");
				}, $sg__input_a, "__tests__/template.marko_6_update");
				_subscribe($sg__input_a && $input_a__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:6"));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5_content", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("loading a");
			}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/0", "__tests__/template.marko_2_update");
			_html("<ol class=rows-a>");
			_region(() => {
				forOf(input.rowsA, (row) => {
					const $scope7_id = _scope_id();
					_html(`<li class=row-a>${_escape(row.text)}${_el_resume($scope7_id, "#text/0", $sg__input_rowsA)}</li>`);
					$sg__input_rowsA && writeScope($scope7_id, {}, "__tests__/template.marko", "15:8");
				});
			}, $scope1_id, "#ol/1", "__tests__/template.marko_r0");
			_html(`</ol>${_el_resume($scope1_id, "#ol/1", $sg__input_rowsA)}</section>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		} else {
			_group_site("__tests__/template.marko_3_update");
			const $scope3_id = _scope_id();
			_html("<section class=pane-b>");
			_try($scope3_id, "#text/0", _content_resume("__tests__/template.marko_4_content", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_await($scope4_id, "#text/0", resolveAfter(input.b, 1), (note) => {
					const $scope9_id = _scope_id();
					_html(`<p class=note-b>${_escape(_hole_value($scope9_id, "PatchHole:#text/0", note, _persisted_reason()))}${_el_resume($scope9_id, "#text/0", $sg__input_b)}</p>`);
					$sg__input_b && writeScope($scope9_id, {}, "__tests__/template.marko", "25:8");
				}, $sg__input_b, "__tests__/template.marko_9_update");
				_subscribe($sg__input_b && $input_b__closures, writeScope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "23:6"));
				_resume_branch($scope4_id);
			}, $scope3_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_8_content", () => {
				_scope_reason();
				const $scope8_id = _scope_id();
				_html("loading b");
			}, $scope3_id) }) }, "__tests__/template.marko_3/update_boundary_#text/0", "__tests__/template.marko_4_update");
			_html("<ol class=rows-b>");
			_region(() => {
				forOf(input.rowsB, (row) => {
					const $scope10_id = _scope_id();
					_html(`<li class=row-b>${_escape(row.text)}${_el_resume($scope10_id, "#text/0", $sg__input_rowsB)}</li>`);
					$sg__input_rowsB && writeScope($scope10_id, {}, "__tests__/template.marko", "30:8");
				});
			}, $scope3_id, "#ol/1", "__tests__/template.marko_r1");
			_html(`</ol>${_el_resume($scope3_id, "#ol/1", $sg__input_rowsB)}</section>`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "21:2");
			return 1;
		}
	}, $scope0_id, "#text/2", 1 | _persisted_reason() | (1 | _persisted_reason()), 1 | _persisted_reason(), 1, 0, 1, void 0, void 0, ["__tests__/template.marko_1_update", "__tests__/template.marko_3_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_a: input.a,
		input_rowsA: input.rowsA,
		input_b: input.b,
		input_rowsB: input.rowsB,
		tab: _seed_fill(_state_reason() && tab),
		"ClosureScopes:input_a": $sg__input_a && $input_a__closures,
		"ClosureScopes:input_b": $sg__input_b && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_rowsA: ["input.rowsA"],
		input_b: ["input.b"],
		input_rowsB: ["input.rowsB"],
		tab: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_9_update": ["<p class=note-b> </p>", "D l"],
	"__tests__/template.marko_9_content": ["<p class=note-b> </p>", "D l"],
	"__tests__/template.marko_6_update": ["<p class=note-a> </p>", "D l"],
	"__tests__/template.marko_6_content": ["<p class=note-a> </p>", "D l"],
	"__tests__/template.marko_4_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_4_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_3_update": ["<section class=pane-b><!><ol class=rows-b></ol></section>", "D%b l"],
	"__tests__/template.marko_3_content": ["<section class=pane-b><!><ol class=rows-b></ol></section>", "D%b l"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<section class=pane-a><!><ol class=rows-a></ol></section>", "D%b l"],
	"__tests__/template.marko_1_content": ["<section class=pane-a><!><ol class=rows-a></ol></section>", "D%b l"],
	"__tests__/template.marko_0_update": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"],
	"__tests__/template.marko": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"]
});
