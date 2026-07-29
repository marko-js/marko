// tags/frame-doc.marko
var frame_doc_default = _template("__tests__/tags/frame-doc.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<html lang=en><head><title>frame</title>${_flush_head()}</head><body><header class=frame>STATIC FRAME</header><button class=frame-count>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`), _trailers("</body></html>");
	_script($scope0_id, "__tests__/tags/frame-doc.marko_0");
	writeScope($scope0_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/tags/frame-doc.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/tags/frame-doc.marko_0_update": ["<html lang=en><head><title>frame</title></head><body><header class=frame>STATIC FRAME</header><button class=frame-count> </button></body></html>", "DbDb D n"],
	"__tests__/tags/frame-doc.marko": ["<html lang=en><head><title>frame</title></head><body><header class=frame>STATIC FRAME</header><button class=frame-count> </button></body></html>", "DbDb D n"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "__tests__/template.marko_0/update_if_#text/0", [() => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		frame_doc_default({});
		_html("<span class=sibling>VISIBLE</span>");
		$sg__input_show | _persisted_reason() && writeScope($scope1_id, { "#childScope/0": _persisted_reason() && _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}], ["__tests__/template.marko_1_update"], "__tests__/template.marko_r0");
	$sg__input_show && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": [[["__tests__/tags/frame-doc.marko"], "<!><span class=sibling>VISIBLE</span>"], [
		"/",
		["__tests__/tags/frame-doc.marko"],
		"&%c"
	]],
	"__tests__/template.marko_1_content": [[["__tests__/tags/frame-doc.marko"], "<!><span class=sibling>VISIBLE</span>"], [
		"/",
		["__tests__/tags/frame-doc.marko"],
		"&%c"
	]],
	"__tests__/template.marko_0_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko": ["<!><!><!>", "b%c"]
});
