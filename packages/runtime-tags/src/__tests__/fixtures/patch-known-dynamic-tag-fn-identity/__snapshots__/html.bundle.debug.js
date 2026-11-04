// tags/reader.marko
const $template$1 = "<button class=call>call</button><pre></pre>";
const $walks$1 = " b b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/reader.marko": "__tests__/tags/reader.marko; b ;<button class=call>call</button><pre></pre>" });
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_mark($scope0_id, "#button/0")}<pre></pre>${_el_mark($scope0_id, "#pre/1")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_input_fn#4", 1, $fg__input_fn);
	_scope($scope0_id, { input_fn: input.fn }, "__tests__/tags/reader.marko", 0, { input_fn: ["input.fn"] }) || $fg__input_fn && _patch_write($scope0_id, "PatchMarkedWrite:input_fn", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<output id=out></output><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;b%;<output id=out></output><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_hide__OR__input_title = _write_guard($scope0_reason, 0), $fg__input_hide = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2));
	_html("<output id=out></output>");
	_dynamic_tag($scope0_id, "#text/0", input.hide ? null : reader_default, { fn: _bind_resume(function() {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "__tests__/template.marko_0/fn", $scope0_id, 1) }, 1, 0, 0, $wg__input_hide__OR__input_title, $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_hide#3_input_title#4/setup", (($fg__input_hide ? " input_hide" : "") + ($fg__input_title ? " input_title" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_hide: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 0) && input.hide,
		input_title: input.title
	}, "__tests__/template.marko", 0, {
		input_hide: ["input.hide"],
		input_title: ["input.title"]
	}) || $fg__input_hide && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_hide", input.hide, !_server_guard($scope0_reason, 1));
}, 1);
