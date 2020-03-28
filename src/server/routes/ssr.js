import React from 'react'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import { serverRoutes } from '../../client/routes/serverRoutes'
import { Layout } from '../../client/containers/Layout'
import { ServerStyleSheet } from 'styled-components'

const setResponse = (html, styles, manifest) => {
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js'
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js'
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Activities</title>
        ${styles}
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="${mainBuild}" type="text/javascript"></script>
        <script src="${vendorBuild}" type="text/javascript"></script>
      </body>
    </html>
  `)
}

export const renderApp = (req, res) => {
  const stylesSheet = new ServerStyleSheet()
  const html = renderToString(
    stylesSheet.collectStyles(
      <StaticRouter location={req.url} context={{}}>
        <Layout>
          {renderRoutes(serverRoutes)}
        </Layout>
      </StaticRouter>
    )
  )
  const styles = stylesSheet.getStyleTags()

  res.send(setResponse(html, styles, req.hashManifest))
}

