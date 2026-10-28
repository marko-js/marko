// template.marko
_shells({ a: "a !a0;D bD l ;<main><div></div><span> </span><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main><div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<span>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</span><button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: input.title,
		h: show
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.title, !_server_guard($scope0_reason, 0));
}, 1);
