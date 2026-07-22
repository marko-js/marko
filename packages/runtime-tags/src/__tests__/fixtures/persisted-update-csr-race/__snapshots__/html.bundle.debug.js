// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $input_note__closures = new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}<section>`);
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.note, 1), (note) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_count/pending");
			_html(`<p>clicked <!>${_escape(count)}${_el_resume($scope2_id, "#text/0")} times -- ${_sep($sg__input_note)}${_escape(_hole_value($scope2_id, "PatchHole:#text/1", note, _persisted_reason()))}${_el_resume($scope2_id, "#text/1", $sg__input_note)}</p>`);
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "9:6");
			_resume_branch($scope2_id);
		}, 1 | _persisted_reason(), "__tests__/template.marko_2_update");
		_subscribe($sg__input_note && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "__tests__/template.marko_0/update_boundary_#text/3", "__tests__/template.marko_1_update");
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:count": $count__closures,
		"ClosureScopes:input_note": $sg__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["loading…", "b"],
	"__tests__/template.marko_3_content": ["loading…", "b"],
	"__tests__/template.marko_2_update": ["<p>clicked <!> times -- <!></p>", "Db%c%l"],
	"__tests__/template.marko_2_content": ["<p>clicked <!> times -- <!></p>", "Db%c%l"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<h1> </h1><button>clicked <!></button><section><!></section>", "D l Db%lD%l"],
	"__tests__/template.marko": ["<h1> </h1><button>clicked <!></button><section><!></section>", "D l Db%lD%l"]
});
