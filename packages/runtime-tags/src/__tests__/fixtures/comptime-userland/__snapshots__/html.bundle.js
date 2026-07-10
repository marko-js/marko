// tags/hero/index.marko
var hero_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section${_attr_class(`hero hero--${input.variant}`)}><h1>${_escape(input.title)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</h1>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 3));
	_html(`</section>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let claps = 0;
	_html(`<section class="hero hero--launch"><h1>Meet Comptime</h1><button>clap <!>${_escape(claps)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</section>`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_title,
		2: $sg__input_title
	});
	hero_default({
		variant: "live",
		title: `runtime ${input.title}`,
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<p>still a component</p>");
		})
	});
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: claps,
		c: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
