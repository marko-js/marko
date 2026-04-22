// size: 682 (min) 393 (brotli)
//#region packages/runtime-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/tags/comments.marko
const $template$1 = "<ul></ul>";
const $if_content__comment_comments = /* @__PURE__ */ _if_closure(
  4,
  0,
  ($scope) => $input_comments$1($scope.a, $scope._.i),
);
const $if_content__setup = ($scope) => {
  $if_content__comment_comments._($scope);
  $if_content__id._($scope);
  $scope.a;
};
const $if_content__id = /* @__PURE__ */ _if_closure(4, 0, ($scope) =>
  $input_path$1($scope.a, $scope._.l),
);
const $for_content__id = /* @__PURE__ */ _const(11, ($scope) => {
  _attr($scope.a, "id", $scope.l);
  $if_content__id($scope);
});
const $for_content__input_path = /* @__PURE__ */ _for_closure(0, ($scope) =>
  $for_content__id($scope, `${$scope._.e || "c"}-${$scope.M}`),
);
const $for_content__open__script = _script("a0", ($scope) =>
  _on($scope.c, "click", function () {
    $for_content__open($scope, !$scope.m);
  }),
);
const $for_content__open = /* @__PURE__ */ _let(12, ($scope) => {
  _attr($scope.a, "hidden", !$scope.m);
  _text($scope.d, $scope.m ? "[-]" : "[+]");
  $for_content__open__script($scope);
});
const $for_content__setup = ($scope) => {
  $for_content__input_path._($scope);
  $for_content__open($scope, true);
};
const $for_content__comment_text = ($scope, comment_text) =>
  _text($scope.b, comment_text);
const $for_content__if = /* @__PURE__ */ _if(
  4,
  $template$1,
  /* @__PURE__ */ ((_w0) => `/${_w0}&`)(" b"),
  $if_content__setup,
);
const $for_content__comment_comments = /* @__PURE__ */ _const(8, ($scope) => {
  $for_content__if($scope, $scope.i ? 0 : 1);
  $if_content__comment_comments($scope);
});
const $for_content__$params = ($scope, $params2) =>
  $for_content__comment($scope, $params2[0]);
const $for_content__comment = ($scope, comment) => {
  $for_content__comment_text($scope, comment?.text);
  $for_content__comment_comments($scope, comment?.comments);
};
const $for = /* @__PURE__ */ _for_of(
  0,
  "<li><span> </span><button> </button><!></li>",
  " E l D l%l",
  $for_content__setup,
  $for_content__$params,
);
const $input_comments$1 = ($scope, input_comments) =>
  $for($scope, [input_comments]);
const $input_path$1 = /* @__PURE__ */ _const(4, $for_content__input_path);
//#endregion
//#region packages/runtime-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)(" b");
function $setup($scope) {
  $scope.a;
}
const $input_comments = ($scope, input_comments) =>
  $input_comments$1($scope.a, input_comments);
const $input_path = ($scope, input_path) => $input_path$1($scope.a, input_path);
const $input = ($scope, input) => {
  $input_comments($scope, input.comments);
  $input_path($scope, input.path);
};
//#endregion
//#region entry
/* @__PURE__ */ _template("b", $template, $walks, $setup, $input).mount();
//#endregion
