// template.marko
_shells({ a: "a !; bDb%lD ;<a id=go href=/next>go</a><p>pending <!></p><span> </span>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const go = _action($scope0_id, "a0");
	_html(`<a id=go href=/next>go</a>${_el_resume($scope0_id, "a")}<p>pending ${_text_resume($scope0_id, "b", go.pending, 2)}</p><span>${_patch_text($scope0_id, "c", input.label, void 0, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		g: go,
		h: void 0
	});
}, 1);
