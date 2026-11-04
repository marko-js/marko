// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0), $sg__input_a = _server_guard($scope0_reason, 1), $fg__input_a2 = _filled_guard($scope0_reason, 1), $sg__input_b = _server_guard($scope0_reason, 2), $fg__input_b2 = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_a2 && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a);
	$fg__input_b2 && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !$sg__input_b);
	const fa = _bind_resume(() => input.a, "__tests__/template.marko_0/fa", $scope0_id);
	const fb = _bind_resume(() => input.b, "__tests__/template.marko_0/fb", $scope0_id);
	let open = false;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id(), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
			_html(`<p>${_text_mark($scope1_id, "#text/0", fa() + ":" + fb(), $wg__input_a__OR__input_b)}</p>`);
			_patch_render($scope1_id, "__tests__/template.marko_1_fa#0:6_fb#0:7/setup", [
				$fg__input_a && ">fa",
				$fg__input_a && ">input_a",
				$fg__input_b && ">fb",
				$fg__input_b && ">input_b"
			], $scope0_reason, 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_a2 && _patch_render($scope0_id, "__tests__/template.marko_1_fa#0:6/setup", ["fa", "input_a"]);
	$fg__input_b2 && _patch_render($scope0_id, "__tests__/template.marko_1_fb#0:7/setup", ["fb", "input_b"]);
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		fa,
		fb,
		open
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		fa: "1:8",
		fb: "2:8",
		open: "3:6"
	}) || ($fg__input_a2 && _patch_write($scope0_id, "PatchMarkedWrite:fa", fa, !$sg__input_a), $fg__input_b2 && _patch_write($scope0_id, "PatchMarkedWrite:fb", fb, !$sg__input_b));
}, 1);
