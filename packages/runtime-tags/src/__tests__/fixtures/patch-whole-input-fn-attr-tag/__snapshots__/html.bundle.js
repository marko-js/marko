// tags/reader.marko
const $template = "<button>read</button>";
_shells({ b: "b !b0; ;<button>read</button>" });
var reader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>read</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, { c: input }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wc", input, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `/${_w0}&D l`)(" b")};${((_w0) => `${_w0}<p> </p>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let shown = "";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	reader_default({
		read: _resume(() => input.label, "a0", $scope0_id),
		onRead: _resume(function(v) {
			shown = v;
		}, "a1", $scope0_id),
		opt: attrTag({ v: input.label })
	});
	_html(`<p>${_text_resume($scope0_id, "b", shown)}</p>`);
	_patch_value($scope0_id, "va2", shown, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.label,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.label, !_server_guard($scope0_reason, 0));
}, 1);
