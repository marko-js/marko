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
			const $scope4_id = _scope_id();
			_html(`<p class=feed>${_escape(_hole_value($scope4_id, "PatchHole:#text/0", feed, _persisted_reason()))}${_el_resume($scope4_id, "#text/0", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope4_id, {}, "__tests__/template.marko", "13:6");
		}, _persisted_reason(), "__tests__/template.marko_4_update");
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3_content", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`<p class=failed>failed: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope3_id, "#text/0", $sg__err_message)}</p>`);
			$sg__err_message && writeScope($scope3_id, {}, "__tests__/template.marko", "10:6");
		}, $scope0_id) })
	}, "__tests__/template.marko_0/update_boundary_#text/2", "__tests__/template.marko_1_update");
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_4_update": ["<p class=feed> </p>", "D l"],
	"__tests__/template.marko_4_content": ["<p class=feed> </p>", "D l"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><section><!></section>", " Db%lD%l"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><section><!></section>", " Db%lD%l"]
});
