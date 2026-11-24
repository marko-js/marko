// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>child</span>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		1,
		2,
		3
	];
	_html(`<div>${_text_mark($scope0_id, "#text/0", list[1])}</div>`);
	child_default({});
	const [, ...[second, ...more]] = list;
	_html(`<div>${_text_mark($scope0_id, "#text/2", second)} ${_text_mark($scope0_id, "#text/3", more.length, 2)}</div><button>update</button>${_el_mark($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
