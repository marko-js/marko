// template.marko
_shells({ a: "a !a0; b%bD l%b ;<!----><!><p> </p><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<!--${_escape_comment(input.label)} ${_escape_comment(count)}-->${_el_resume($scope0_id, "a")}`);
	const $show = input.on;
	_show_start($show, 0);
	_html(`<p>${_text_resume($scope0_id, "c", input.label, void 0, $scope0_reason, 0)}</p>`);
	_show_end($scope0_id, "d", $show, 1, 0, 0, 1, 3, 1, void 0, $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: input.label,
		j: count
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.label, !_server_guard($scope0_reason, 0));
}, 1);
