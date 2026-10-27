// template.marko
_shells({ a: "a !a1;D l b%b D ;<p> </p><div></div><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 0));
	let count = 0;
	_html(`<p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p><div`);
	_patch_attrs_content({
		title: input.label,
		onClick: _bind_resume(function() {
			console.log("clicked " + input.label);
		}, "a0", $scope0_id)
	}, "b", $scope0_id, "div", 0, void 0, void 0, $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "b")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html(`<button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, {
		h: input.label,
		i: count
	});
}, 1);
