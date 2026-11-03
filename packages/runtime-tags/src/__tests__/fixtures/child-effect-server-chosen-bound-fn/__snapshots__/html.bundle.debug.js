// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_fn#2_v#3", 0);
	_scope($scope0_id, {
		fn: input.fn,
		v: input.v
	}, "__tests__/tags/child.marko", 0, {
		fn: "1:10",
		v: "1:14"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_pick = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = "none";
	const fa = _resume(function(v) {
		last = "a" + v;
	}, "__tests__/template.marko_0/fa", $scope0_id);
	const fb = _resume(function(v) {
		last = "b" + v;
	}, "__tests__/template.marko_0/fb", $scope0_id);
	const $childScope = _peek_scope_id();
	child_default({
		v: input.x,
		fn: input.pick ? fa : fb
	});
	_html(`<p>${_text_resume($scope0_id, "#text/1", last)}</p>`);
	_scope($scope0_id, {
		fa: $wi__input_pick && fa,
		fb: $wi__input_pick && fb,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		fa: "2:8",
		fb: "3:8"
	});
}, 1);
