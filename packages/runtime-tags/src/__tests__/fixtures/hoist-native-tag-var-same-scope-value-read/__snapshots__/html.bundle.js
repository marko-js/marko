// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "a0");
	const $later_getter = _hoist($scope0_id, "a1");
	let ref = $el_getter;
	const laterRef = $later_getter;
	_html(`<div></div>${_el_mark($scope0_id, "a")}<div></div>${_el_mark($scope0_id, "b")}<button></button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: ref,
		f: laterRef
	});
}, 1);
