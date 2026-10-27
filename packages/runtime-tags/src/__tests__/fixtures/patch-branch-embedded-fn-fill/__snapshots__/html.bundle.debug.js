// template.marko
const $template = "<main><!><button>show</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>show</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const api = {
		get: _bind_resume(() => input.title, "__tests__/template.marko_0/api", $scope0_id),
		label: "title"
	};
	let show = false;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", api.label, $wg__input_title)}: ${_text_resume($scope1_id, "#text/1", api.get(), $wg__input_title * 2)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		api,
		api_label: api.label
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		api: "1:8",
		api_label: ["api.label", "1:8"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", api, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", api.label, !$sg__input_title));
}, 1);
