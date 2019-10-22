if (!window._MICRO_APP_CONFIG || !window._MICRO_APP_CONFIG.current) {
  throw new Error('_MICRO_APP_CONFIG or config.current is not exist!')
}

window._MICRO_APP_CONFIG.appendAssets(
  {{ projectName }}
  window._MICRO_APP_CONFIG.origin,
  {{ assetsArr }}
)

