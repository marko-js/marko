// child-s.marko
var child_s_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const isShared = input.isShared;
	let holder = input.holder;
	_html(`<button class=s>s:<!>${_escape("?")}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		g: isShared,
		h: holder
	});
	_resume_branch($scope0_id);
});

// child-b.marko
var child_b_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const isInner = input.isInner;
	let inner = input.inner;
	_html(`<button class=b>b:<!>${_escape("?")}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: isInner,
		h: inner
	});
	_resume_branch($scope0_id);
});

// template.marko
const $ChildS_withLoadAssets = withLoadAssets(child_s_default, "_b");
const $ChildB_withLoadAssets = withLoadAssets(child_b_default, "_a");
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shared = { inner: { value: 1 } };
	let count = 0;
	_html(`<button class=main>main:<!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	$ChildS_withLoadAssets({
		holder: shared,
		isShared: _resume(function(o) {
			return o === shared;
		}, "c0", $scope0_id)
	});
	$ChildB_withLoadAssets({
		inner: shared.inner,
		isInner: _resume(function(o) {
			return o === Object.values(shared)[0];
		}, "c1", $scope0_id)
	});
	_script($scope0_id, "c2");
	writeScope($scope0_id, {
		g: shared,
		i: count
	});
	_resume_branch($scope0_id);
}, 1);
