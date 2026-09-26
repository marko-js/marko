// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=child>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
});

// other.marko
var other_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=other>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
const $Other_withLoadAssets = withLoadAssets(other_default, "_b");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Other_withLoadAssets({});
	_try($scope0_id, "c", _content_resume("c2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		$Child_withLoadAssets({});
		_await($scope1_id, "c", rejectAfter(/* @__PURE__ */ new Error("caught"), 1), (v) => {
			_scope_id();
			_html(`<p>${_escape(v)}</p>`);
		}, 0);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("c0", () => {
			_scope_reason();
			_scope_id();
			_html("loading");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("c1", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(_text_resume($scope3_id, "a", err.message, $sg__err_message));
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, $scope0_id) })
	});
	_await($scope0_id, "d", resolveAfter("done", 2), (v) => {
		_scope_id();
		_html(`<p>${_escape(v)}</p>`);
	}, 0);
}, 1);
