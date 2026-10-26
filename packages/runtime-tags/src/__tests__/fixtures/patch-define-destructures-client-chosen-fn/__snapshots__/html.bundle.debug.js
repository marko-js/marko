// template.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Show_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Show_content__walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($Show_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const Show = { content: _content("__tests__/template.marko_1*content", ({ get }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<output></output>${_el_resume($scope1_id, "#output/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_get#3");
		_filled_guard($scope1_reason, 0) && _patch_effect($scope1_id, _client_guard($scope1_reason, 0) ? "PatchQueuedEffect:__tests__/template.marko_1_get#3" : "PatchEffect:__tests__/template.marko_1_get#3", "get");
		$scope1_page ? _scope($scope1_id, { get }, "__tests__/template.marko", "4:2", { get: "4:16" }) : _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:get", get, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(6);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Show.content({ get: upper ? up : low });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_effect($scope0_id, "PatchInit:__tests__/template.marko_0_upper#5_up#6_low#7/init", _filled_guard($scope0_reason, 0) && "up", _filled_guard($scope0_reason, 0) && "low");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		upper,
		up,
		low,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		upper: "1:6",
		up: "2:8",
		low: "3:8"
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title));
}, 1);
