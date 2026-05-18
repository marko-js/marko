// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class({ "selected": input.thing.selected })}>`);
	_dynamic_tag($scope0_id, "b", input.thing.content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</div>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = false;
	const myThing = {
		selected,
		content: _content("a0", () => {
			_scope_id();
			_scope_reason();
			_html("<span>The thing</span>");
		})
	};
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	child_default({ thing: myThing });
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		c: selected,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
