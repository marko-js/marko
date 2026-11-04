// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.fn("x"), 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_key__OR__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 4), $sg__input_key__OR__input_title = _server_guard($scope0_reason, 0), $fg__input_key__OR__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 4), $fg__input_title = _filled_guard($scope0_reason, 4), $fg__input_key = _filled_guard($scope0_reason, 3), $fg__input_title__OR__input_pre = _filled_guard($scope0_reason, 1), $fg__input_pre = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const key = input.key;
	const o = {
		[key]: _bind_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/o", $scope0_id, 1),
		key: input.title
	};
	const [first] = [...input.pre, _bind_resume((s) => s + "=" + input.title, "__tests__/template.marko_0/first", $scope0_id, 1)];
	const tag = _bind_resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id, 1);
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ fn: o[key] });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			card_default({ fn: first });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/2", 2);
			card_default({ fn: tag });
			_patch_child_end();
			_html(`<p>${_text_mark($scope1_id, "#text/3", o.key, $wg__input_key__OR__input_title)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_o_key#0:11/setup");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_first#0:13/setup");
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "__tests__/template.marko_1_tag#0:14/setup");
			_patch_render($scope1_id, "__tests__/template.marko_1_key#0:8_o#0:10/setup", ((_filled_guard($scope0_reason, 3) ? " >key" : "") + (_filled_guard($scope0_reason, 0) ? " >o" : "")).slice(1), $scope0_reason, 0);
			_scope($scope1_id, {
				"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope),
				"#childScope/1": _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3)
			}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_key && _patch_render($scope0_id, "__tests__/template.marko_1_key#0:8/setup", "key");
	$fg__input_key__OR__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_o#0:10/setup", "o");
	$fg__input_key__OR__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_o_key#0:11/setup", "o_key");
	$fg__input_title__OR__input_pre && _patch_render($scope0_id, "__tests__/template.marko_1_first#0:13/setup", "first");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_tag#0:14/setup", "tag input_title");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#5_input_pre#6/setup", (($fg__input_title ? " input_title" : "") + ($fg__input_pre ? " input_pre" : "")).slice(1), $scope0_reason, 1);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#5_key#8/setup", (($fg__input_title ? " input_title" : "") + ($fg__input_key ? " key" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_title: input.title,
		input_pre: $wi__input_title && input.pre,
		key,
		o,
		o_key: o.key,
		first,
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_pre: ["input.pre"],
		key: "1:8",
		o: "2:8",
		o_key: ["o.key", "2:8"],
		first: "3:9",
		tag: "4:8",
		show: "5:6"
	}) || ($fg__input_pre && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_pre", input.pre, !_server_guard($scope0_reason, 5)), $fg__input_key && _patch_write($scope0_id, "PatchMarkedWrite:key", key, !_server_guard($scope0_reason, 3)), $fg__input_key__OR__input_title && _patch_write($scope0_id, "PatchMarkedWrite:o", o, !$sg__input_key__OR__input_title), $fg__input_key__OR__input_title && _patch_write($scope0_id, "PatchMarkedWrite:o_key", o.key, !$sg__input_key__OR__input_title), $fg__input_title__OR__input_pre && _patch_write($scope0_id, "PatchMarkedWrite:first", first, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:tag", tag, !$sg__input_title));
}, 1);
