import { Router } from '@layer0/core/router'
import { starterRoutes } from '@layer0/starter'
import { CACHE_ASSETS } from './cache'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'
import noCacheHandler from './noCacheHandler'

export default new Router()
  .use(starterRoutes)
  // uncomment following line to enable no-cache-proxy handler
  .get('/no-cache-proxy/:path*', noCacheHandler)

  // Home page
  .match('/', shoppingFlowRouteHandler)
  .match('/home', shoppingFlowRouteHandler)

  // PLP pages
  .match('/new/:path*', shoppingFlowRouteHandler) // e.g. https://www.lushusa.com/new/new-products/

  // PDP pages
  //Set up a path for PDP pages (only for Hair and its subcategories items) and cache them like Home and PLP;
  .match('/hair', shoppingFlowRouteHandler)
  .match('/hair/:path*', shoppingFlowRouteHandler)


  // example route for cacheable assets:
  .match('/images/:path*', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })

  //Add caching for all static images served from the `/dw/image/v2` path like it was done for other assets.
  .match('/dw/image/v2/:path*', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })

  .match('/service-worker.js', ({ serviceWorker }) => serviceWorker('dist/service-worker.js'))
  .match('/main.js', ({ serveStatic, cache }) => {
    cache(CACHE_ASSETS)
    return serveStatic('dist/browser.js')
  })

  // fallback route for all other requests:
  .fallback(({ proxy }) => {
    proxy('origin')
  })
