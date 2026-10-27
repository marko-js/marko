// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button><output></output></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_prefix = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.prefix, !$sg__input_prefix);
	const onChange = _bind_resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "a0", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}<output></output></main>`);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		e: input.prefix,
		f: onChange,
		g: open
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", onChange, !$sg__input_prefix);
}, 1);
