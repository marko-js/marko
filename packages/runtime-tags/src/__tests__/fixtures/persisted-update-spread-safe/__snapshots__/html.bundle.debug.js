// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_class__OR__input_data_request = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}${_attr("data-request", input["data-request"])}></div>${_el_resume($scope0_id, "#div/0", $sg__input_class__OR__input_data_request)}`);
	$sg__input_class__OR__input_data_request && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});
_renderer_shells({ "__tests__/tags/child.marko_0_update": ["<div></div>", " b"] });

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let attrs = {
		title: "client title",
		class: "client"
	};
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<input${_attrs({
		"data-request": input.title,
		...attrs
	}, "#input/2", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/2")}<div${_attrs({
		"data-request": input.title,
		...attrs
	}, "#div/3", $scope0_id, "div")}>dynamic</div>${_el_resume($scope0_id, "#div/3")}`);
	_set_serialize_reason($sg__input_title);
	const $childScope = _peek_scope_id();
	_region(() => {
		child_default({
			"data-request": input.title,
			...attrs
		});
	}, $scope0_id, "#text/5", "__tests__/template.marko_r0");
	_script($scope0_id, "__tests__/template.marko_0_input_title_attrs");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_title: input.title,
		attrs: _state_reason() && attrs,
		count: _seed_fill(_state_reason() && count),
		"#childScope/4": $sg__input_title | _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		attrs: "1:6",
		count: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button>clicked <!></button><input><div>dynamic</div><!>", " Db%l b b/&%b"],
	"__tests__/template.marko": ["<button>clicked <!></button><input><div>dynamic</div><!>", " Db%l b b/&%b"]
});
