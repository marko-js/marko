// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_note = _serialize_guard($scope0_reason, 1), $sg__input_tick = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_tick__closures = /* @__PURE__ */ new Set();
	let clicks = 0;
	_html(`<button class=clicks>clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<section>`);
	_try($scope0_id, "c", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.note, input.tick), (note) => {
			const $scope3_id = _scope_id();
			let taps = 0;
			_html(`<button class=taps>${_escape(_hole_value($scope3_id, "Qb", note, _persisted_reason()))}${_el_resume($scope3_id, "b", $sg__input_note__OR__input_tick)} tapped <!>${_escape(taps)}${_el_resume($scope3_id, "c")}</button>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "a2");
			writeScope($scope3_id, { f: _state_reason() && taps });
			_resume_branch($scope3_id);
		}, 0, "a3");
		$sg__input_note__OR__input_tick && _subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_note && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "a0", "a6");
	_html("</section>");
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		f: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.note,
		g: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.tick,
		h: _state_reason() && clicks,
		i: $sg__input_note && $input_note__closures,
		j: $sg__input_tick && $input_tick__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<button class=taps><!> tapped <!></button>", " D%c%l"],
	"a8": ["<button class=taps><!> tapped <!></button>", " D%c%l"],
	"a6": ["<!><!><!>", "b%c"],
	"a5": ["<!><!><!>", "b%c"],
	"a1": ["<button class=clicks>clicked <!></button><section><!></section>", " Db%lD%l"],
	"a": ["<button class=clicks>clicked <!></button><section><!></section>", " Db%lD%l"]
});
