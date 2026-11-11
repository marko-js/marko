// tags/box/index.marko
const $template$1 = "<div class=box><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/box/index.marko": "__tests__/tags/box/index.marko;D%;<div class=box><!></div>" });
var box_default = _template("__tests__/tags/box/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/box/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 1), $cg__input_title = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_show__closures = new Set();
	let open = false;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_patch_child(0, "#childScope/0");
			box_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_if(() => {
					if (input.show) {
						const $scope3_id = _scope_id();
						_html(`<p>${_text_mark($scope3_id, "#text/0", "t:" + input.title, $wg__input_title)}</p>`);
						$cg__input_title && _patch_render($scope3_id, "__tests__/template.marko_3_input_title#0:5/subscribe");
						_subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:8"), $cg__input_title && "__tests__/template.marko_3_input_title#0:5/subscribe", $wg__input_title);
						return 0;
					}
				}, $scope2_id, "#text/0", $wg__input_show, $wg__input_show, 0, 0, 1);
				$cg__input_show && _patch_render($scope2_id, "__tests__/template.marko_2_input_show#0:4/subscribe");
				_subscribe($wi__input_show && $input_show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"), $cg__input_show && "__tests__/template.marko_2_input_show#0:4/subscribe", $wg__input_show);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_show: input.show,
		input_title: input.title,
		open,
		"ClosureScopes:input_title/8": $wi__input_title && $input_title__closures,
		"ClosureScopes:input_show/7": $wi__input_show && $input_show__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_title: ["input.title"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_show#4/subscribers", "input_show"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#5/subscribers", "input_title"));
}, 1);
