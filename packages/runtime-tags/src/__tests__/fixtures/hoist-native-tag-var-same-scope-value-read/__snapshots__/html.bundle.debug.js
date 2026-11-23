// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "__tests__/template.marko_0_#div#0/hoist");
	const $later_getter = _hoist($scope0_id, "__tests__/template.marko_0_#div#1/hoist");
	let show = true;
	let ref = $el_getter;
	const laterRef = show && $later_getter;
	_html(`<div></div>${_el_mark($scope0_id, "#div/0")}<div></div>${_el_mark($scope0_id, "#div/1")}<button></button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		ref,
		laterRef
	}, "__tests__/template.marko", 0, {
		ref: "9:6",
		laterRef: "11:8"
	});
}, 1);
