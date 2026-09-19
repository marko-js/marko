// tags/host/child.marko
const $template$2 = "<p class=child> </p>";
const $walks$2 = "D l";
_shells({ "__tests__/tags/host/child.marko": "__tests__/tags/host/child.marko;D ;<p class=child> </p>" });
var child_default = _template_patch("__tests__/tags/host/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/host/child.marko", 0);
}, 0, 0);

// tags/host/index.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/tags/host/child.marko", void 0, 1);
const $template$1 = "<section></section>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/host/index.marko": "__tests__/tags/host/index.marko !; ;<section></section>",
	"__tests__/tags/host/index.marko_1*shell": "__tests__/tags/host/index.marko_1*shell __tests__/tags/host/index.marko_1_#text#0/init;b%/&;<!><!><!>"
});
var host_default = _template_patch("__tests__/tags/host/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/tags/host/index.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/host/index.marko_1*shell"], $scope0_reason, 1);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $sg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { input_label: input.label }, "__tests__/tags/host/index.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/host/index.marko0", input.label);
}, 0, () => [$Child_withLoadAssets]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)(" b"), ((_w0) => `<main>${_w0}</main>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	host_default({
		show: input.show,
		label: input.label
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [host_default]);
