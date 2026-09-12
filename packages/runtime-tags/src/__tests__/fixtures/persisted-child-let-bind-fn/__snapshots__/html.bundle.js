// tags/picker.marko
const $template = "<button>load</button><ul></ul>";
const $walks = " b b";
_shells({ b: "b !b1; b ;<button>load</button><ul></ul>" });
var picker_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
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
	if ($scope0_reason) _for_of(catalog || [], (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b0", refreshing, 1);
	_patch_bind($scope0_id, "i", input.refreshingChange || void 0);
	_patch_value($scope0_id, "b1", catalog, 1);
	$scope0_reason && _scope($scope0_id, {
		e: _source_if($scope0_reason, 1) && input.refreshing,
		f: _source_if($scope0_reason, 0) && input.refreshingChange,
		k: load,
		i: input.refreshingChange || void 0
	});
	return $return;
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a2;${_w0};${_w1}`)(((_w0) => `0${_w0}&D l b`)($walks), ((_w0) => `${_w0}<p> </p><button id=outer>outer</button>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let busy = false;
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let refresh = picker_default({ refreshingChange: _resume(function(v) {
		busy = v;
	}, "a0", $scope0_id) });
	_var($scope0_id, "b", $childScope, "a1");
	_filled_guard(0, 0) && _patch_write($scope0_id, "f", refresh, 1);
	_html(`<p>${_text_resume($scope0_id, "c", busy ? "busy" : "idle")}</p><button id=outer>outer</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, {
		f: refresh,
		a: _existing_scope($childScope)
	});
}, 1, () => [picker_default]);
