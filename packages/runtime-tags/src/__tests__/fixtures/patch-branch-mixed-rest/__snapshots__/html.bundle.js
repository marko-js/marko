// template.marko
_shells({ a: "a !a0;E l%b ;<main><div> </div><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const { known, ...rest } = input;
	_html(`<main><div>${_patch_text($scope0_id, "a", known, void 0, $scope0_reason, 0)}</div>`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		h: rest
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", rest, !_server_guard($scope0_reason, 1));
}, 1);
