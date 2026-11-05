// template.marko
const shout = (s) => s.toUpperCase() + "!";
const stamp = "srv";
_shells({
	a: "a !a2;E%c%l%b ;<main><p><!> <!></p><!><button>+</button></main>",
	a1: "a1 a5;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><p>${_text_mark($scope0_id, "a", shout(input.title), 1, $scope0_reason, 0)} ${_text_mark($scope0_id, "b", stamp, 2, 0, 0)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "a", shout(input.title) + " #0")}</span>`);
			_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 0) && ">g");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_title && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a3", "g");
	_scope($scope0_id, {
		g: input.title,
		i: count
	}) || $fg__input_title && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 0));
}, 1);
