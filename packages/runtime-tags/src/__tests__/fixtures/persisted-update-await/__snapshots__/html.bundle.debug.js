// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_related = _serialize_guard($scope0_reason, 1), $sg__input_note = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_related__closures = new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}<section>`);
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.related, 1), (related) => {
			const $scope3_id = _scope_id();
			_html("<ul>");
			_region(() => {
				forOf(related, (item) => {
					const $scope4_id = _scope_id();
					_html(`<li>${_escape(item.name)}${_el_resume($scope4_id, "#text/0", $sg__input_related)} costs ${_sep($sg__input_related)}${_escape(item.price)}${_el_resume($scope4_id, "#text/1", $sg__input_related)}</li>`);
					$sg__input_related && writeScope($scope4_id, {}, "__tests__/template.marko", "11:10");
				});
			}, $scope3_id, "#ul/0");
			_html(`</ul>${_el_resume($scope3_id, "#ul/0", $sg__input_related)}`);
			$sg__input_related && writeScope($scope3_id, {}, "__tests__/template.marko", "9:6");
		}, $sg__input_related, "__tests__/template.marko_3_update");
		$sg__input_related && _subscribe($input_related__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading related…");
	}, $scope0_id) }) }, "__tests__/template.marko_0/update_boundary_#text/3", "__tests__/template.marko_1_update");
	_html("</section><footer>");
	_await($scope0_id, "#text/4", resolveAfter(input.note, 2), (note) => {
		const $scope5_id = _scope_id();
		_html(`<em>${_escape(_hole_value($scope5_id, "PatchHole:#text/0", note, _persisted_reason()))}${_el_resume($scope5_id, "#text/0", $sg__input_note)}</em>`);
		$sg__input_note && writeScope($scope5_id, {}, "__tests__/template.marko", "19:4");
	}, $sg__input_note, "__tests__/template.marko_5_update");
	_html("</footer>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:input_related": $sg__input_related && $input_related__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_5_update": ["<em> </em>", "D l"],
	"__tests__/template.marko_5_content": ["<em> </em>", "D l"],
	"__tests__/template.marko_3_update": ["<ul></ul>", " b"],
	"__tests__/template.marko_3_content": ["<ul></ul>", " b"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<h1> </h1><button>clicked <!></button><section><!></section><footer><!></footer>", "D l Db%lD%lD%l"],
	"__tests__/template.marko": ["<h1> </h1><button>clicked <!></button><section><!></section><footer><!></footer>", "D l Db%lD%lD%l"]
});
