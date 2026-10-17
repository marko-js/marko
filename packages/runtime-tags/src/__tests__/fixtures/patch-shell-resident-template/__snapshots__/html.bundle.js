// counter.marko
_shells({ a: "a;D ;<b> </b>" });
var counter_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</b>`);
	$scope0_page && _scope($scope0_id, {});
});

// other.marko
_shells({ b: "b;D ;<i> </i>" });
var other_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</i>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/chooser.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
_shells({ d: "d !d0; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_script($scope0_id, "d0");
	_patch_value($scope0_id, "vd3", show, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.Tag,
		f: input.label,
		g: show
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "vd1", input.Tag, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "vd2", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ c: /*@__PURE__*/ (() => `c !;${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "b");
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_write($scope0_id, "we", input.which, 1);
	_patch_write($scope0_id, "wf", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c2");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.which,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		b: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vc0", input.which, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vc1", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
