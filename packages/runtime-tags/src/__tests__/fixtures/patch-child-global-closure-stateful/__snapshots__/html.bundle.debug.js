// tags/gm/index.marko
const $template$1 = "<p></p><!><!>";
const $walks$1 = " b%c";
_shells({
	"__tests__/tags/gm/index.marko": "__tests__/tags/gm/index.marko !; b%;<p></p><!><!>",
	"__tests__/tags/gm/index.marko_1*shell": "__tests__/tags/gm/index.marko_1*shell; ;<i></i>"
});
var gm_default = _template("__tests__/tags/gm/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const z = input.v + $global$1.flag;
	_html(`<p${_patch_attr($scope0_id, "PatchAttr:#p/0 data-w", "data-w", input.w, $scope0_reason, 1)}></p>${_el_resume($scope0_id, "#p/0", _mask_group($scope0_reason, 1))}`);
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			_html(`<i${_patch_attr($scope1_id, "PatchAttr:#i/0 data-z", "data-z", z + $global$1.mark, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}></i>${_el_resume($scope1_id, "#i/0")}`);
			_fill_global_subscribe("__tests__/tags/gm/index.marko_1_z#0:6_$global_mark#0:10", $scope1_id);
			_scope($scope1_id, { _: ($scope0_page || _write_if($scope0_reason, 0)) && _scope_with_id($scope0_id) }, "__tests__/tags/gm/index.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/tags/gm/index.marko_1*shell"], $scope0_reason, 0);
	_fill_global_subscribe("__tests__/tags/gm/index.marko_0_input_v#4_$global_flag#6", $scope0_id, _client_guard($scope0_reason, 0));
	_patch_write($scope0_id, "PatchWrite:input_v", input.v, 1);
	$scope0_page ? _scope($scope0_id, {
		input_v: _unfilled_if($scope0_reason, 0) && input.v,
		z: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z
	}, "__tests__/tags/gm/index.marko", 0, {
		input_v: ["input.v"],
		z: "1:8"
	}) : _filled_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/gm/index.marko_fill0", z, !_server_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0));
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
			const $childScope = _peek_scope_id();
			gm_default({
				v: "a",
				w: input.w
			});
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_w: input.w,
		open
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 0));
}, 1);
