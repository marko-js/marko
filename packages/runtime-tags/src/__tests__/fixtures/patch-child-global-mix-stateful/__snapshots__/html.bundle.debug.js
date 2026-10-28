// tags/gm/index.marko
const $template$1 = "<p></p>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/gm/index.marko": "__tests__/tags/gm/index.marko; ;<p></p>" });
var gm_default = _template("__tests__/tags/gm/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const z = input.v + $global$1.flag;
	_html(`<p${_attr("data-z", z + $global$1.mark, $scope0_id, "PatchAttr:#p/0 data-z", (2 | _mask_group($scope0_reason, 0)) << 1, 0)}></p>${_el_resume($scope0_id, "#p/0")}`);
	_fill_global_subscribe("__tests__/tags/gm/index.marko_0_input_v#3_$global_flag#5", $scope0_id, $cg__input_v);
	_fill_global_subscribe("__tests__/tags/gm/index.marko_0_z#4_$global_mark#7", $scope0_id);
	$cg__input_v && _patch_write($scope0_id, "PatchWrite:input_v", input.v, 1);
	_client_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _patch_write($scope0_id, "PatchWrite:z", z, 1);
	_scope($scope0_id, {
		input_v: _unfilled_if($scope0_reason, 0) && input.v,
		z: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z
	}, "__tests__/tags/gm/index.marko", 0, {
		input_v: ["input.v"],
		z: "1:8"
	});
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_peek_scope_id($scope1_id, "#childScope/0", 0);
			gm_default({ v: "a" });
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
