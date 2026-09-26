// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		set: _resume(function(value) {
			n = value;
		}, "b0", $scope0_id)
	};
	_html(`<span>${_text_resume($scope0_id, "a", n)}</span>`);
	_scope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let Tag = child_default;
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "a", Tag, {});
	_var($scope0_id, "b", $Tag_scope, "a0");
	_html(`<button class=inc>${_text_resume($scope0_id, "d", "0:" + v?.n)}</button>${_el_resume($scope0_id, "c")}<button class=toggle></button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: a,
		g: Tag,
		h: v,
		i: v?.n
	});
}, 1);
