// tags/make.marko
const $setup$2 = [[], []];
_shells({ b: "b," });
var make_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.title, !_server_guard($scope0_reason, 0));
	const $return = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "b0", $scope0_id);
	_scope($scope0_id, { c: input.title });
	return $return;
});

// tags/reader.marko
const $template = "<button class=call>call</button><pre></pre>";
const $walks = " b b";
const $setup$1 = [[], []];
_shells({ c: "c; b ;<button class=call>call</button><pre></pre>" });
var reader_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0", 1, _filled_guard($scope0_reason, 0), "e");
	_scope($scope0_id, { e: input.fn }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$2], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&b/${_w1}& b`)("", $walks)};${((_w0, _w1) => `<output id=out></output>${_w0}${_w1}<button class=other>o</button>`)("", $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0, $cg__input_title && 1);
	let fn = make_default({ title: input.title });
	$cg__input_title && _var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	reader_default({ fn });
	_patch_child_end();
	_html(`<button class=other>o</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
