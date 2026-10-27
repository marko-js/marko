// tags/reader.marko
const $template = "<button class=call>call</button><pre></pre>";
const $walks = " b b";
const $setup$1 = [[], []];
_shells({ b: "b; b ;<button class=call>call</button><pre></pre>" });
var reader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "e");
	$scope0_page ? _scope($scope0_id, { e: input.fn }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<output id=out></output>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
	const fn = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "a0", $scope0_id);
	_html("<output id=out></output>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	reader_default({ fn });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, {
		d: input.title,
		a: _existing_scope($childScope)
	});
}, 1);
