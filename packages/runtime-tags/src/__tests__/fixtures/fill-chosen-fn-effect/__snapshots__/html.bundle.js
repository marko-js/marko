// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $wi__input_upper = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fa = _resume(() => "a:" + ((el) => el())(_el_read_error).id, "a0", $scope0_id);
	const fb = _resume(() => "b:" + ((el) => el())(_el_read_error).id, "a1", $scope0_id);
	const pick = input.upper ? fa : fb;
	let open = false;
	_html(`<pre id=log></pre><div id=d></div>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: $wi__input_upper && fa,
		h: $wi__input_upper && fb,
		j: pick,
		k: open
	});
}, 1);
