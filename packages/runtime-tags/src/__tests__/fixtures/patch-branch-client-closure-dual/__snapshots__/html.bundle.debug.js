// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let a = false;
	let b = false;
	_html("<main>");
	_if(() => {
		if (a) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (b) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_mark($scope2_id, "#text/0", "p:" + input.title, $wg__input_title)}</p>`);
					$cg__input_title && _patch_render($scope2_id, "__tests__/template.marko_2_input_title#0:4/subscribe");
					_subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, {}, "__tests__/template.marko", "5:6"), $cg__input_title && "__tests__/template.marko_2_input_title#0:4/subscribe", $wg__input_title);
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
			_if(() => {
				if (b) {
					const $scope3_id = _scope_id();
					_html(`<span>${_text_mark($scope3_id, "#text/0", "s:" + input.title, $wg__input_title)}</span>`);
					$cg__input_title && _patch_render($scope3_id, "__tests__/template.marko_3_input_title#0:4/subscribe");
					_subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, { "ClosureSignalIndex:input_title/7": $wi__input_title && 1 }, "__tests__/template.marko", "8:6"), $cg__input_title && "__tests__/template.marko_3_input_title#0:4/subscribe", $wg__input_title);
					return 0;
				}
			}, $scope1_id, "#text/1", 1, 1, 0, 0, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		a,
		b,
		"ClosureScopes:input_title/7": $wi__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		a: "1:6",
		b: "2:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#4/subscribers", "input_title");
}, 1);
