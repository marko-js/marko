// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let collapsed = false;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><button class=collapse>toggle</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			_group_site("a6");
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a4", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(input.note, 1), (note) => {
					const $scope4_id = _scope_id();
					_html(`<p class=note>${_escape(_hole_value($scope4_id, "Qa", note, _persisted_reason()))}${_el_resume($scope4_id, "a", $sg__input_note)}</p>`);
					$sg__input_note && writeScope($scope4_id, {});
				}, $sg__input_note, "a2");
				_subscribe($sg__input_note && $input_note__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, $scope1_id) }) }, "a0", "a5");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", void 0, void 0, void 0, void 0, void 0, void 0, void 0, ["a6"]);
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		g: input.note,
		h: _seed_fill(_state_reason() && collapsed),
		i: $sg__input_note && $input_note__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<p class=note> </p>", "D l"],
	"a8": ["<p class=note> </p>", "D l"],
	"a5": ["<!><!><!>", "b%c"],
	"a4": ["<!><!><!>", "b%c"],
	"a6": ["<!><!><!>", "b%c"],
	"a9": ["<!><!><!>", "b%c"],
	"a1": ["<h1> </h1><button class=collapse>toggle</button><!><!>", "D l b%c"],
	"a": ["<h1> </h1><button class=collapse>toggle</button><!><!>", "D l b%c"]
});
