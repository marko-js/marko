// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<title>${_escape(_hole_value($scope0_id, "PatchAttr:textContent:#title/2", `App — ${_to_text($global().docTitle)}`, _persisted_reason()))}</title>${_el_resume($scope0_id, "#title/2", _persisted_reason())}<meta name=description${_attr("content", _hole_value($scope0_id, "PatchAttr:content:#meta/3", `${$global().docTitle} overview`, _persisted_reason()))}>${_el_resume($scope0_id, "#meta/3", _persisted_reason())}<link rel=canonical${_attr("href", _hole_value($scope0_id, "PatchAttr:href:#link/4", `https://example.test${$global().docPath}`, _persisted_reason()))}>${_el_resume($scope0_id, "#link/4", _persisted_reason())}<p>${_escape(_hole_value($scope0_id, "PatchHole:#text/5", $global().docTitle, _persisted_reason()))}${_el_resume($scope0_id, "#text/5", _persisted_reason())}</p><output></output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button> </button><title></title><meta name=description><link rel=canonical><p> </p><output></output>", " D l b b bD lb"],
	"__tests__/template.marko": ["<button> </button><title></title><meta name=description><link rel=canonical><p> </p><output></output>", " D l b b bD lb"]
});
