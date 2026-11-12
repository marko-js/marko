// template.marko
_shells({ a: "a !a3;D%b ;<main><!><button>+</button><output></output></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_prefix = _server_guard($scope0_reason, 0), $fg__input_prefix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_prefix && _patch_write($scope0_id, "xe", input.prefix, !$sg__input_prefix);
	const onChange = _bind_resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "a0", $scope0_id, 1);
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}<output></output></main>`);
	_script($scope0_id, "a3");
	$fg__input_prefix && _patch_render($scope0_id, "a2", "f e");
	_scope($scope0_id, {
		e: input.prefix,
		f: onChange,
		g: open
	}) || $fg__input_prefix && _patch_write($scope0_id, "xf", onChange, !$sg__input_prefix);
}, 1);
