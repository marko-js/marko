// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $label__closures = new Set();
	let show = false;
	const label = show ? "on" : "off";
	const Box = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", label)}</em>`);
		_subscribe($label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_label#0:3/subscribe");
	}, $scope0_id) };
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", show ? Box : null, {});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		Box,
		"ClosureScopes:label/6": $label__closures
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		Box: "3:9"
	});
}, 1);
