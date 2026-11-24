// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		1,
		2,
		3
	];
	_html(`<div>${_text_mark($scope0_id, "a", list[1])}</div>`);
	child_default({});
	const [, ...[second, ...more]] = list;
	_html(`<div>${_text_mark($scope0_id, "c", second)} ${_text_mark($scope0_id, "d", more.length, 2)}</div><button>update</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
