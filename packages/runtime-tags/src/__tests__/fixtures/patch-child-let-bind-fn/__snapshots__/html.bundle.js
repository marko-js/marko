// tags/picker.marko
const $template = "<button>load</button><ul></ul>";
const $walks = " b b";
_shells({ b: "b !b1; b ;<button>load</button><ul></ul>" });
var picker_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let refreshing = input.refreshing;
	let catalog = null;
	const load = _resume(async (refresh) => {
		if (refresh) refreshing = true;
		catalog = ["a", "b"];
		if (refresh) refreshing = false;
	}, "b0", $scope0_id);
	const $return = load;
	_html(`<button>load</button>${_el_resume($scope0_id, "a")}<ul>`);
	if ($scope0_page) _for_of(catalog || [], (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "b1");
	_patch_write($scope0_id, "we", input.refreshing, 1);
	_patch_write($scope0_id, "wf", input.refreshingChange, 1);
	_patch_write($scope0_id, "wk", load, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b4");
	const $refreshingChange = input.refreshingChange || void 0;
	_patch_let_change($scope0_id, "vb5", refreshing, "di", $refreshingChange, $scope0_reason, 0);
	_patch_value($scope0_id, "vb6", catalog, 1);
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.refreshing,
		f: _write_if($scope0_reason, 1) && input.refreshingChange,
		k: load,
		i: $refreshingChange
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb2", input.refreshing), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb3", input.refreshingChange));
	return $return;
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a1;${((_w0) => `0${_w0}&D l b`)($walks)};${((_w0) => `${_w0}<p> </p><button id=outer>outer</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let busy = false;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	let refresh = picker_default({ refreshingChange: _resume(function(v) {
		busy = v;
	}, "a0", $scope0_id) });
	_patch_write($scope0_id, "wf", refresh, 1);
	_html(`<p>${_text_resume($scope0_id, "c", busy ? "busy" : "idle")}</p><button id=outer>outer</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "wf", refresh, 1);
	_patch_value($scope0_id, "va2", busy, 1);
	$scope0_page && _scope($scope0_id, {
		f: refresh,
		a: _existing_scope($childScope)
	});
}, 1);
