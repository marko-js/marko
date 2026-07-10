// tags/hero/index.marko
var hero_default = _template("__tests__/tags/hero/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section${_attr_class(`${"hero"} ${"hero"}--${input.variant}`)}><h1>${_escape(input.title)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 2))}</h1>`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 3));
	_html(`</section>${_el_resume($scope0_id, "#section/0", _serialize_guard($scope0_reason, 1))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/hero/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let claps = 0;
	_html(`<section class="hero hero--launch"><h1>Meet Comptime</h1><button>clap <!>${_escape(claps)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}</section>`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_title,
		2: $sg__input_title
	});
	hero_default({
		variant: "live",
		title: `runtime ${input.title}`,
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("<p>still a component</p>");
		})
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		claps,
		"#childScope/2": _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { claps: "1:6" });
	_resume_branch($scope0_id);
}, 1);
