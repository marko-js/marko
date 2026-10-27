// template.marko
const $template = "<a id=go href=/next>go</a><p>pending <!></p><span> </span>";
const $walks = " bDb%lD l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !; bDb%lD ;<a id=go href=/next>go</a><p>pending <!></p><span> </span>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const go = _action($scope0_id, "__tests__/template.marko_0_go#6/action");
	_html(`<a id=go href=/next>go</a>${_el_resume($scope0_id, "#a/0")}<p>pending ${_text_resume($scope0_id, "#text/1", go.pending, 2)}</p><span>${_patch_text($scope0_id, "#text/2", input.label, void 0, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0_go#6");
	$scope0_page && _scope($scope0_id, {
		go,
		"TagVariableChange:go": void 0 || void 0
	}, "__tests__/template.marko", 0, {
		go: "1:9",
		"TagVariableChange:go": ["goFn", "1:9"]
	});
}, 1);
