// data.js
function getFeed(mode) {
	if (typeof window !== "undefined") throw new Error("getFeed is server-only");
	return mode === "broken" ? rejectAfter(/* @__PURE__ */ new Error("feed unavailable"), 1) : resolveAfter(mode === "ok2" ? "still ok" : "all systems go", 1);
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<section>`);
	_try($scope0_id, "c", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", getFeed($global().mode), (feed) => {
			const $scope4_id = _scope_id();
			_html(`<p class=feed>${_escape(_hole_value($scope4_id, "Qa", feed, _persisted_reason()))}${_el_resume($scope4_id, "a", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope4_id, {});
		}, _persisted_reason());
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("a3", (err) => {
			const $sg__err_message = _serialize_guard(_scope_reason(), 0);
			const $scope3_id = _scope_id();
			_html(`<p class=failed>failed: ${_sep($sg__err_message)}${_escape(_hole_value($scope3_id, "Qa", err.message, _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__err_message)}</p>`);
			$sg__err_message && writeScope($scope3_id, {});
		}, $scope0_id) })
	}, "a0");
	_html("</section>");
	_script($scope0_id, "a6");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
