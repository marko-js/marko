// tags/frame-doc.marko
var frame_doc_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<html lang=en><head><title>frame</title>${_flush_head()}</head><body><header class=frame>STATIC FRAME</header><button class=frame-count>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`), _trailers("</body></html>");
	_script($scope0_id, "b1");
	writeScope($scope0_id, { c: _seed_fill(_state_reason() && n) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"b0": ["<html lang=en><head><title>frame</title></head><body><header class=frame>STATIC FRAME</header><button class=frame-count> </button></body></html>", "DbDb D n"],
	"b": ["<html lang=en><head><title>frame</title></head><body><header class=frame>STATIC FRAME</header><button class=frame-count> </button></body></html>", "DbDb D n"]
});

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_show = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_if(() => input.show ? 0 : void 0, $scope0_id, "a", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "a0", [() => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		frame_doc_default({});
		_html("<span class=sibling>VISIBLE</span>");
		$sg__input_show | _persisted_reason() && writeScope($scope1_id, { a: _persisted_reason() && _existing_scope($childScope) });
	}], ["a2"], "a3");
	$sg__input_show && writeScope($scope0_id, {});
}, 1);
_renderer_shells({
	"a2": [[["b"], "<!><span class=sibling>VISIBLE</span>"], [
		"/",
		["b"],
		"&%c"
	]],
	"a4": [[["b"], "<!><span class=sibling>VISIBLE</span>"], [
		"/",
		["b"],
		"&%c"
	]],
	"a1": ["<!><!><!>", "b%c"],
	"a": ["<!><!><!>", "b%c"]
});
