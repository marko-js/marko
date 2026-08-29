// template.marko
_shells({ a: "a !a2;E l ;<main><h1> </h1><input></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "a0");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "a1");
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 1)}</h1><input${_attr_input_value($scope0_id, "b", input.value, input.big ? loud : plain)}${_patch_bind($scope0_id, "Eb", input.big ? loud : plain)}${_patch_control($scope0_id, "b", 2, input.value, $scope0_owned, 0)}>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, {
		f: input.value,
		g: input.big,
		h: plain,
		i: loud
	});
}, 1, 0);
