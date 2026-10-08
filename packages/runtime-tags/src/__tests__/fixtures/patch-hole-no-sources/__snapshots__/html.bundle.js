// template.marko
let renders = 0;
const names = ["x", "y"];
_shells({
	a: "a;E%c%lD l%b%;<main><p><!> <!></p><h1> </h1><!><!></main>",
	a0: "a0;D%c%l%;<span><!> <!></span><!><!>",
	a1: "a1;D ;<i> </i>",
	a2: "a2;D ;<b> </b>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const label = names.join("+");
	_html(`<main><p>${_patch_text($scope0_id, "a", ++renders, void 0, 0, 0)} ${_patch_text($scope0_id, "b", label, 2, 0, 0)}</p><h1>${_patch_text($scope0_id, "c", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_for_of(names, (name) => {
		const $scope2_id = _scope_id();
		_html(`<i>${_patch_text($scope2_id, "a", name, void 0, 0, 0)}</i>`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "d", 1, void 0, void 0, void 0, void 0, "a1", 0, 0);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_patch_text($scope1_id, "a", ++renders, void 0, 0, 0)} ${_patch_text($scope1_id, "b", label, 2, 0, 0)}</span>`);
			_for_of(names, (name) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_patch_text($scope3_id, "a", name, void 0, 0, 0)}</b>`);
				_scope($scope3_id, {});
			}, 0, $scope1_id, "c", 1, void 0, void 0, void 0, void 0, "a2", 0, 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "e", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html("</main>");
	_patch_write($scope0_id, "j", label, 1);
	$scope0_page && _scope($scope0_id, { j: _unfilled_if($scope0_reason, 1) && label });
}, 1);
