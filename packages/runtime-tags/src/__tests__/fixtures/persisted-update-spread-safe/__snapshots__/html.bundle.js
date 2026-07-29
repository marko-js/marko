// tags/child.marko
var child_default = _template("b", (input) => {
	const $sg__input_class__OR__input_data_request = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}${_attr("data-request", input["data-request"])}></div>${_el_resume($scope0_id, "a", $sg__input_class__OR__input_data_request)}`);
	$sg__input_class__OR__input_data_request && writeScope($scope0_id, {});
});
_renderer_shells({ "b0": ["<div></div>", " b"] });

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_title = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let attrs = {
		title: "client title",
		class: "client"
	};
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<input${_attrs({
		"data-request": input.title,
		...attrs
	}, "c", $scope0_id, "input")}>${_el_resume($scope0_id, "c")}<div${_attrs({
		"data-request": input.title,
		...attrs
	}, "d", $scope0_id, "div")}>dynamic</div>${_el_resume($scope0_id, "d")}`);
	_set_serialize_reason($sg__input_title);
	const $childScope = _peek_scope_id();
	_region(() => {
		child_default({
			"data-request": input.title,
			...attrs
		});
	}, $scope0_id, "f", "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		i: input.title,
		j: _state_reason() && attrs,
		l: _seed_fill(_state_reason() && count),
		e: $sg__input_title | _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button>clicked <!></button><input><div>dynamic</div><!>", " Db%l b b/&%b"],
	"a": ["<button>clicked <!></button><input><div>dynamic</div><!>", " Db%l b b/&%b"]
});
