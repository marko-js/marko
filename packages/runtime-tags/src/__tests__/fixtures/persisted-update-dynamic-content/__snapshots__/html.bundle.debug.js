// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", open ? "collapse" : "expand", _state_reason()))}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}</aside><section>`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/tags/layout.marko_0/update_dynamic_#text/2");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/layout.marko_0");
	writeScope($scope0_id, { open: _seed_fill(_state_reason() && open) }, "__tests__/tags/layout.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/layout.marko_0_update": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"],
	"__tests__/tags/layout.marko": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 2), $sg__input_summary = _serialize_guard($scope0_reason, 3), $sg__input_specs = _serialize_guard($scope0_reason, 4), $si__input_view = _serialize_if($scope0_reason, 5), $sg__input_view = _serialize_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_summary__closures = new Set();
	const $input_specs__closures = new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", $sg__input_title)}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	const Overview = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>Overview of ${_sep($sg__input_title)}${_escape(input.title)}${_el_resume($scope1_id, "#text/0", $sg__input_title)}: ${_sep($sg__input_summary)}${_escape(input.summary)}${_el_resume($scope1_id, "#text/1", $sg__input_summary)}</p>`);
		_serialize_guard($scope0_reason, 1) && _subscribe($sg__input_summary && $input_summary__closures, _subscribe($sg__input_title && $input_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2")));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const Specs = { content: _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("<ul>");
		_for_of(input.specs, (spec) => {
			const $scope3_id = _scope_id();
			_html(`<li>${_escape(spec.name)}${_el_resume($scope3_id, "#text/0", $sg__input_specs)} is ${_sep($sg__input_specs)}${_escape(spec.value)}${_el_resume($scope3_id, "#text/1", $sg__input_specs)}</li>`);
			$sg__input_specs && writeScope($scope3_id, {}, "__tests__/template.marko", "10:6");
		}, function(spec) {
			return spec.name;
		}, $scope2_id, "#ul/0", $sg__input_specs, $sg__input_specs, $sg__input_specs, "</ul>", 1);
		_serialize_guard($scope0_reason, 0) && _subscribe($sg__input_specs && $input_specs__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"));
		_resume_branch($scope2_id);
	}, $scope0_id) };
	_set_serialize_reason($sg__input_view);
	const $childScope = _peek_scope_id();
	layout_default({ content: input.view === "specs" ? Specs : Overview });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_title: ($si__input_view || _patch_reason()) && input.title,
		input_summary: ($si__input_view || _patch_reason()) && input.summary,
		input_specs: ($si__input_view || _patch_reason()) && input.specs,
		count: _seed_fill(_state_reason() && count),
		Overview: ($si__input_view || _patch_reason()) && Overview,
		Specs: ($si__input_view || _patch_reason()) && Specs,
		"ClosureScopes:input_title": $sg__input_title && $input_title__closures,
		"ClosureScopes:input_summary": $sg__input_summary && $input_summary__closures,
		"ClosureScopes:input_specs": $sg__input_specs && $input_specs__closures,
		"#childScope/3": $sg__input_view | _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_summary: ["input.summary"],
		input_specs: ["input.specs"],
		count: "1:6",
		Overview: "5:9",
		Specs: "8:9"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [[
		"<h1> </h1><button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		"D l Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[
		"<h1> </h1><button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		"D l Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]]
});
