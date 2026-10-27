// tags/make.marko
const $setup$2 = [[], []];
_shells({ c: "c," });
var make_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.title, !_server_guard($scope0_reason, 0));
	const $return = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "c0", $scope0_id);
	_scope($scope0_id, { c: input.title });
	return $return;
});

// tags/holder.marko
const $template = "<button class=call>call</button><pre></pre>";
const $walks = " b b";
const $setup$1 = [[], []];
_shells({ b: "b; b ;<button class=call>call</button><pre></pre>" });
var holder_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "e");
	_scope($scope0_id, { e: input.fn }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$2], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&b/${_w1}&`)("", $walks)};${((_w0, _w1) => `<output id=out></output>${_w0}${_w1}`)("", $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0, $cg__input_title && 1);
	let fn = make_default({ title: input.title });
	$cg__input_title && _var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "c", 1);
	holder_default({ fn });
	_patch_child_end();
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
