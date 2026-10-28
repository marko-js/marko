// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.fn("x"), void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const { fmt, wrap, quoted, keyed, templated } = {
		fmt: _bind_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated", $scope0_id),
		wrap: _bind_resume(function(s) {
			return "(" + s + input.title + ")";
		}, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated2", $scope0_id),
		"quoted": _bind_resume((s) => s + "'" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated3", $scope0_id),
		["keyed"]: _bind_resume((s) => s + "[" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated4", $scope0_id),
		[`templated`]: _bind_resume((s) => s + "`" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated5", $scope0_id)
	};
	const o = {
		get: _bind_resume((s) => s + "=" + input.title, "__tests__/template.marko_0/o", $scope0_id),
		0: _bind_resume((s) => s + "0" + input.title, "__tests__/template.marko_0/o2", $scope0_id)
	};
	const tag = _bind_resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			card_default({ fn: fmt });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope2 = _patch_child($scope1_id, "#childScope/1", 1);
			card_default({ fn: wrap });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope3 = _patch_child($scope1_id, "#childScope/2", 2);
			card_default({ fn: quoted });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope4 = _patch_child($scope1_id, "#childScope/3", 3);
			card_default({ fn: keyed });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope5 = _patch_child($scope1_id, "#childScope/4", 4);
			card_default({ fn: templated });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope6 = _patch_child($scope1_id, "#childScope/5", 5);
			card_default({ fn: o.get });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope7 = _patch_child($scope1_id, "#childScope/6", 6);
			card_default({ fn: o[0] });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope8 = _patch_child($scope1_id, "#childScope/7", 7);
			card_default({ fn: tag });
			_patch_child_end();
			_scope($scope1_id, {
				"#childScope/0": $wi__input_title && _existing_scope($childScope),
				"#childScope/1": $wi__input_title && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3),
				"#childScope/3": $wi__input_title && _existing_scope($childScope4),
				"#childScope/4": $wi__input_title && _existing_scope($childScope5),
				"#childScope/5": $wi__input_title && _existing_scope($childScope6),
				"#childScope/6": $wi__input_title && _existing_scope($childScope7),
				"#childScope/7": $wi__input_title && _existing_scope($childScope8)
			}, "__tests__/template.marko", "17:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		fmt,
		wrap,
		quoted,
		keyed,
		templated,
		o_get: o.get,
		o_0: o[0],
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		fmt: "1:10",
		wrap: "1:15",
		quoted: "1:21",
		keyed: "1:29",
		templated: "1:36",
		o_get: ["o.get", "10:8"],
		o_0: ["o[0]", "10:8"],
		tag: "14:8",
		show: "15:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", fmt, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", wrap, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", quoted, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill3", keyed, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill4", templated, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill5", o.get, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill6", o[0], !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill7", tag, !$sg__input_title));
}, 1);
