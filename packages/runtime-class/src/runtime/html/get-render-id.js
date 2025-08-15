module.exports = function getRenderId($global) {
  if (!("renderId" in $global)) {
    $global.renderId =
      $global.componentIdPrefix || $global.widgetIdPrefix || "s";

    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      if ($global.renderId !== "s") {
        require("complain")(
          "$global.componentIdPrefix and $global.widgetIdPrefix are deprecated. Use $global.renderId instead.",
          { location: false },
        );
      }
    }
  }

  if ($global.renderId !== "s") {
    return $global.renderId;
  }
};
