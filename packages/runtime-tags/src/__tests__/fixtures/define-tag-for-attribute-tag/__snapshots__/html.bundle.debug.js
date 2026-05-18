// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class({ "selected": input.thing.selected })}>`);
	_dynamic_tag($scope0_id, "#text/1", input.thing.content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 1))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = false;
	const myThing = {
		selected,
		content: _content("__tests__/template.marko_1_content", () => {
			const $scope1_id = _scope_id();
			_scope_reason();
			_html("<span>The thing</span>");
		})
	};
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	child_default({ thing: myThing });
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_selected");
	writeScope($scope0_id, {
		selected,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { selected: "1:6" });
	_resume_branch($scope0_id);
}, 1);
