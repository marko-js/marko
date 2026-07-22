// tags/child.marko
var child_default = _template("b", (input) => {
	const $sg__input_class__OR__input_data_request = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(_hole_value($scope0_id, "Nclass:a", input.class, _persisted_reason()))}${_attr("data-request", _hole_value($scope0_id, "Ndata-request:a", input["data-request"], _persisted_reason()))}></div>${_el_resume($scope0_id, "a", $sg__input_class__OR__input_data_request)}`);
	$sg__input_class__OR__input_data_request && writeScope($scope0_id, {});
});
_renderer_shells({
	"b0": ["<div></div>", " b"],
	"b": ["<div></div>", " b"]
});

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
	const $childScope = _peek_scope_id();
	_set_serialize_reason($sg__input_title);
	child_default({
		"data-request": input.title,
		...attrs
	});
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		h: input.title,
		i: _state_reason() && attrs,
		k: _state_reason() && count,
		e: $sg__input_title | _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": [["<button>clicked <!></button><input><div>dynamic</div>", ["b"]], [
		" Db%l b b/",
		["b"],
		"&"
	]],
	"a": [["<button>clicked <!></button><input><div>dynamic</div>", ["b"]], [
		" Db%l b b/",
		["b"],
		"&"
	]]
});
