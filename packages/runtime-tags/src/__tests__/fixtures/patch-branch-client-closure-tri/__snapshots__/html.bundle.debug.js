// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $open__closures = new Set();
	let open = false;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_mark($scope1_id, "#text/0", "x:" + input.title, $wg__input_title)}</b>`);
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "#text/0", "y:" + input.title, $wg__input_title)}</i>`);
					_if(() => {
						if (open) {
							const $scope3_id = _scope_id();
							_html(`<u>${_text_mark($scope3_id, "#text/0", "z:" + input.title, $wg__input_title)}</u>`);
							$cg__input_title && _patch_render($scope3_id, "__tests__/template.marko_3_input_title#0:4/subscribe");
							_subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, { "ClosureSignalIndex:input_title/6": $wi__input_title && 1 }, "__tests__/template.marko", "7:8"), $cg__input_title && "__tests__/template.marko_3_input_title#0:4/subscribe", $wg__input_title);
							return 0;
						}
					}, $scope2_id, "#text/1", 1, 1, 0, 0, 1);
					$cg__input_title && _patch_render($scope2_id, "__tests__/template.marko_2_input_title#0:4/subscribe");
					_subscribe($open__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, {}, "__tests__/template.marko", "5:6"), $cg__input_title && "__tests__/template.marko_2_input_title#0:4/subscribe"), "__tests__/template.marko_2_open#0:5/subscribe");
					return 0;
				}
			}, $scope1_id, "#text/1");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#4/subscribers", "input_title");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:4/setup", "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		open,
		"ClosureScopes:input_title/6": $wi__input_title && $input_title__closures,
		"ClosureScopes:open/7": $open__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		open: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
