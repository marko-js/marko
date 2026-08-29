// template.marko
_shells({ a: "a !a1;E l ;<main><h1> </h1><select><option value=a>A</option><option value=b>B</option></select></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1>`);
	_attr_select_value($scope0_id, "b", input.choice, _resume(function(next) {
		document.querySelector("main").dataset.choice = next;
	}, "a0"), () => {
		_html(`<select${_patch_bind($scope0_id, "Eb", _resume(function(next) {
			document.querySelector("main").dataset.choice = next;
		}, "a0"))}${_patch_control($scope0_id, "b", 3, input.choice, $scope0_owned, 1)}><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
