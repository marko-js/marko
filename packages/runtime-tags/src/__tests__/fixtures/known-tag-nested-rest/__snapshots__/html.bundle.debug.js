// tags/leaf.marko
var leaf_default = _template("__tests__/tags/leaf.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_data_val = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>val ${_sep($sg__input_data_val)}${_escape(input.data.val)}${_el_resume($scope0_id, "#text/0", $sg__input_data_val)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/leaf.marko", 0);
});

// tags/mid.marko
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_group_keep = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { first, group: { keep, ...rest } } = input;
	_html(`<p>${_escape(first)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))} ${_sep($sg__input_group_keep)}${_escape(keep)}${_el_resume($scope0_id, "#text/1", $sg__input_group_keep)}</p>`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 3));
	leaf_default({ data: rest });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/2": _serialize_if($scope0_reason, 3) && _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		2: 1,
		3: 1
	});
	mid_default({
		first: "f",
		group: {
			keep: "k",
			val: n
		}
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
