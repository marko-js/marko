rm -rf node_modules/.dev && mkdir -p node_modules/.dev &&
(
  cd .. &&
    npm run build &&
    node scripts/pkg-toggle &&
    npm -ws pack --pack-destination website/node_modules/.dev &&
    node scripts/pkg-toggle
) &&
find node_modules/.dev -type f -name "*-[0-9]*.[0-9]*.[0-9]*.tgz" -exec sh -c 'mv "$0" "${0/-[0-9]*.[0-9]*.[0-9]*/}.tgz"' {} \; &&
npm i
