// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 0), $sg__input_rowsA = _serialize_guard($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2);
	_serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	let tab = 0;
	_html(`<button class=a>A</button>${_el_resume($scope0_id, "a")}<button class=b>B</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			_group_site("a14");
			const $scope1_id = _scope_id();
			_html("<section class=pane-a>");
			_try($scope1_id, "a", _content_resume("a5", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(input.a, 1), (note) => {
					const $scope6_id = _scope_id();
					_html(`<p class=note-a>${_escape(_hole_value($scope6_id, "Qa", note, _persisted_reason()))}${_el_resume($scope6_id, "a", $sg__input_a)}</p>`);
					$sg__input_a && writeScope($scope6_id, {});
				}, $sg__input_a, "a3");
				_subscribe($sg__input_a && $input_a__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
				_scope_reason();
				_scope_id();
				_html("loading a");
			}, $scope1_id) }) }, "a0", "a6");
			_html("<ol class=rows-a>");
			_region(() => {
				forOf(input.rowsA, (row) => {
					const $scope7_id = _scope_id();
					_html(`<li class=row-a>${_escape(row.text)}${_el_resume($scope7_id, "a", $sg__input_rowsA)}</li>`);
					$sg__input_rowsA && writeScope($scope7_id, {});
				});
			}, $scope1_id, "b", "a7");
			_html(`</ol>${_el_resume($scope1_id, "b", $sg__input_rowsA)}</section>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1 | _persisted_reason() | (1 | _persisted_reason()), 1 | _persisted_reason(), 1, 0, 1, void 0, void 0, ["a14", "a13"]);
	_script($scope0_id, "a15");
	writeScope($scope0_id, {
		f: input.a,
		g: input.rowsA,
		h: input.b,
		i: input.rowsB,
		j: _seed_fill(_state_reason() && tab),
		k: $sg__input_a && $input_a__closures,
		m: $sg__input_b && $input_b__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a8": ["<p class=note-b> </p>", "D l"],
	"a16": ["<p class=note-b> </p>", "D l"],
	"a3": ["<p class=note-a> </p>", "D l"],
	"a17": ["<p class=note-a> </p>", "D l"],
	"a11": ["<!><!><!>", "b%c"],
	"a10": ["<!><!><!>", "b%c"],
	"a13": ["<section class=pane-b><!><ol class=rows-b></ol></section>", "D%b l"],
	"a18": ["<section class=pane-b><!><ol class=rows-b></ol></section>", "D%b l"],
	"a6": ["<!><!><!>", "b%c"],
	"a5": ["<!><!><!>", "b%c"],
	"a14": ["<section class=pane-a><!><ol class=rows-a></ol></section>", "D%b l"],
	"a19": ["<section class=pane-a><!><ol class=rows-a></ol></section>", "D%b l"],
	"a2": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"],
	"a": ["<button class=a>A</button><button class=b>B</button><!><!>", " b b%c"]
});
