// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_data__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_data = _serialize_guard($scope0_reason, 2), $sg__input_tick = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_data__closures = /* @__PURE__ */ new Set();
	const $input_tick__closures = /* @__PURE__ */ new Set();
	let x = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qb", input.title, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 1))}</h1>${_el_resume($scope0_id, "a")}<section>`);
	_try($scope0_id, "c", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.data, input.tick), (data) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_escape(_hole_value($scope3_id, "Qa", data, _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__input_data__OR__input_tick)}</p>`);
			$sg__input_data__OR__input_tick && writeScope($scope3_id, {});
		}, $sg__input_data__OR__input_tick, "a2");
		$sg__input_data__OR__input_tick && _subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_data && $input_data__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		_scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "a0", "a5");
	_html("</section>");
	_script($scope0_id, "a6");
	writeScope($scope0_id, {
		g: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.data,
		h: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.tick,
		i: _state_reason() && x,
		j: $sg__input_data && $input_data__closures,
		k: $sg__input_tick && $input_tick__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<p> </p>", "D l"],
	"a7": ["<p> </p>", "D l"],
	"a5": ["<!><!><!>", "b%c"],
	"a4": ["<!><!><!>", "b%c"],
	"a1": ["<h1> </h1><section><!></section>", " D lD%l"],
	"a": ["<h1> </h1><section><!></section>", " D lD%l"]
});
