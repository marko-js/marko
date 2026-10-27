// template.marko
const $template = "<pre id=log></pre><div id=d></div><main><!><button>+</button></main>";
const $walks = "b bD%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b bD%b ;<pre id=log></pre><div id=d></div><main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_upper = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fa = _resume(() => "a:" + ((el) => el())(_el_read_error).id, "__tests__/template.marko_0/fa", $scope0_id);
	const fb = _resume(() => "b:" + ((el) => el())(_el_read_error).id, "__tests__/template.marko_0/fb", $scope0_id);
	const pick = input.upper ? fa : fb;
	let open = false;
	_html(`<pre id=log></pre><div id=d></div>${_el_resume($scope0_id, "#div/0")}<main>`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", typeof pick, $wg__input_upper)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0_pick#9");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		fa: _unfilled_if($scope0_reason, 0) && fa,
		fb: _unfilled_if($scope0_reason, 0) && fb,
		pick,
		open
	}, "__tests__/template.marko", 0, {
		fa: "3:8",
		fb: "4:8",
		pick: "5:8",
		open: "6:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", pick, !_server_guard($scope0_reason, 0));
}, 1);
