// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<div>x=<span>${_text_mark($scope0_id, "a", x)}</span>, was=${_text_mark($scope0_id, "b", false, 2)}</div><button id=increment>Increment</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: x });
}, 1);
