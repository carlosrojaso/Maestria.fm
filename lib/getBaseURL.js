export default function getBaseURL(req) {
  /* eslint-disable no-nested-ternary */
  req = {
    url: '/index',
    protocol: 'https',
    headers: { host: 'maestriajs-app.carlosrojaso.now.sh'}
  };
  const protocol =
    req && req.headers.host.indexOf('maestriajs.com') > -1
      ? 'https'
      : req
        ? req.protocol
        : '';
  /* eslint-enable */
  const baseURL = req
    ? `${protocol}://${req.headers.host}`
    : window.location.origin;
  return baseURL;
}
