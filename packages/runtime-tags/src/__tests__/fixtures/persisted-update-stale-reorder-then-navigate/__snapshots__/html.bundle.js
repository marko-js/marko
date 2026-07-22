// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 2), $sg__input_tick = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	const $input_tick__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qb", input.heading, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 1))} clicked <!>${_escape(n)}${_el_resume($scope0_id, "c")}</h1>${_el_resume($scope0_id, "a")}<main>`);
	_try($scope0_id, "d", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.value, input.tick), (value) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_escape(_hole_value($scope2_id, "Qb", value, _persisted_reason()))}${_el_resume($scope2_id, "b", _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a2");
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, 0, "a3");
		_subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_value && $input_value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		_html("fetching…");
	}, $scope0_id) }) }, "a0", "a6");
	_html("</main>");
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		h: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.value,
		i: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.tick,
		j: _state_reason() && n,
		k: $sg__input_value && $input_value__closures,
		l: $sg__input_tick && $input_tick__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<button> </button>", " D l"],
	"a8": ["<button> </button>", " D l"],
	"a6": ["<!><!><!>", "b%c"],
	"a5": ["<!><!><!>", "b%c"],
	"a1": ["<h1><!> clicked <!></h1><main><!></main>", " D%c%lD%l"],
	"a": ["<h1><!> clicked <!></h1><main><!></main>", " D%c%lD%l"]
});
