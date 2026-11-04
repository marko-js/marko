// tags/my-tag.marko
const $template$1 = "<button>open</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/my-tag.marko_0"]];
_shells({ "__tests__/tags/my-tag.marko": "__tests__/tags/my-tag.marko !__tests__/tags/my-tag.marko_0; b%;<button>open</button><!><!>" });
var my_tag_default = _template("__tests__/tags/my-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>open</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/my-tag.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/my-tag.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/my-tag.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/my-tag.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/my-tag.marko_fill0", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/my-tag.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_patch_child(0, "#childScope/0");
			my_tag_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "#text/0", input.label, $wg__input_label)}</p>`);
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:11"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		show,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		show: "1:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
