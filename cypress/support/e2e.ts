/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const API_CONFIG = {
  BASE_URL: 'https://9772-186-205-17-174.ngrok.io/fulfillment/site',
  ENDPOINTS: {
    GET_FREIGHTS: {
      METHOD: 'GET',
      PATH: '/freight',
    },
    POST_FREIGHT: {
      METHOD: 'POST',
      PATH: '/freight',
    },
  },
}

function getApiEndpointConfig(ENDPOINT_CONFIG) {
  return {
    method: ENDPOINT_CONFIG.METHOD,
    url: `${API_CONFIG.BASE_URL}${ENDPOINT_CONFIG.PATH}`,
  }
}

beforeEach(() => {
  if (Cypress.env('mode') === 'e2e') {
    return null
  }

  const getFreightsConfig = getApiEndpointConfig(
    API_CONFIG.ENDPOINTS.GET_FREIGHTS,
  )
  const postFreightConfig = getApiEndpointConfig(
    API_CONFIG.ENDPOINTS.POST_FREIGHT,
  )
  cy.intercept(getFreightsConfig, {
    fixture: 'api-mock/get-freight',
  })
  cy.intercept(postFreightConfig, {
    fixture: 'api-mock/post-freight',
  })
})
