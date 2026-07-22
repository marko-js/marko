// data.js
function getFeed(mode) {
	if (typeof window !== "undefined") {
		throw new Error("getFeed is server-only");
	}
	return mode === "broken" ? rejectAfter(new Error("feed unavailable"), 1) : resolveAfter(mode === "ok2" ? "still ok" : "all systems go", 1);
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", getFeed($global().mode), (feed) => {
			const $scope3_id = _scope_id();
			_html(`<p class=feed>${_escape(_hole_value($scope3_id, "PatchHole:#text/0", feed, _persisted_reason()))}${_el_resume($scope3_id, "#text/0", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "10:6");
		}, _persisted_reason(), "__tests__/template.marko_3_update");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<p class=failed>failed: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope2_id, "#text/0", $sg__err_message)}</p>`);
		$sg__err_message && writeScope($scope2_id, {}, "__tests__/template.marko", "7:6");
	}, $scope0_id) }) }, 0, "__tests__/template.marko_1_update");
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["<p class=feed> </p>", "D l"],
	"__tests__/template.marko_3_content": ["<p class=feed> </p>", "D l"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><section><!></section>", " Db%lD%l"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><section><!></section>", " Db%lD%l"]
});
