if (!window._MICRO_APP_CONFIG || !window._MICRO_APP_CONFIG.current) {
  throw new Error('_MICRO_APP_CONFIG or config.current is not exist!')
}

if ({{ routerFromChild }}) {
  // window._MICRO_APP_CONFIG_MENU
  window._MICRO_APP_CONFIG.current.child = {{ routerFromChildContent }}
}

window._MICRO_APP_CONFIG.appendAssets(
  {{ projectName }}
  window._MICRO_APP_CONFIG.current.dir,
  {{ assetsArr }}
)

