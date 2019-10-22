if (!window._MICRO_APP_CONFIG || !window._MICRO_APP_CONFIG.current) {
  throw new Error('_MICRO_APP_CONFIG or config.current is not exist!')
}

var dev = location.port !== '' && location.port !== '80' && location.port !== '443'
window._MICRO_APP_CONFIG.appendAssets(
  dev ? window._MICRO_APP_CONFIG.localOrigin : window._MICRO_APP_CONFIG.origin,
  {{ assetsArr }}
)

