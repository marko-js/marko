// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_summary = _serialize_guard($scope0_reason, 0), $sg__input_entries = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_summary__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			_group_site("a7");
			const $scope1_id = _scope_id();
			_html("<section class=panel>");
			_try($scope1_id, "a", _content_resume("a4", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(input.summary, 1), (summary) => {
					const $scope4_id = _scope_id();
					_html(`<p class=summary>${_escape(_hole_value($scope4_id, "Qa", summary, _persisted_reason()))}${_el_resume($scope4_id, "a", $sg__input_summary)}</p>`);
					$sg__input_summary && writeScope($scope4_id, {});
				}, $sg__input_summary, "a2");
				_subscribe($sg__input_summary && $input_summary__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, $scope1_id) }) }, "a0", "a5");
			_html("<ol class=entries>");
			_region(() => {
				forOf(input.entries, (entry) => {
					const $scope5_id = _scope_id();
					_html(`<li class=entry>${_escape(entry.text)}${_el_resume($scope5_id, "a", $sg__input_entries)}</li>`);
					$sg__input_entries && writeScope($scope5_id, {});
				});
			}, $scope1_id, "b", "a6");
			_html(`</ol>${_el_resume($scope1_id, "b", $sg__input_entries)}</section>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1 | _persisted_reason(), 1 | _persisted_reason(), 1, 0, 1, void 0, void 0, ["a7"]);
	_script($scope0_id, "a8");
	writeScope($scope0_id, {
		e: input.summary,
		f: input.entries,
		g: _seed_fill(_state_reason() && open),
		h: $sg__input_summary && $input_summary__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<p class=summary> </p>", "D l"],
	"a9": ["<p class=summary> </p>", "D l"],
	"a5": ["<!><!><!>", "b%c"],
	"a4": ["<!><!><!>", "b%c"],
	"a7": ["<section class=panel><!><ol class=entries></ol></section>", "D%b l"],
	"a10": ["<section class=panel><!><ol class=entries></ol></section>", "D%b l"],
	"a1": ["<button class=toggle>toggle</button><!><!>", " b%c"],
	"a": ["<button class=toggle>toggle</button><!><!>", " b%c"]
});
