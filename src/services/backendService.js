/**
 * Returns the lowest available year and highest available year.
 *
 * @returns {object} - An object containing "highest_year" and "lowest_year".
 */
export async function getYearRange () {
  return await fetchData('/api/stats')
}

/**
 * Fetches data based on year.
 *
 * @param {number} year - The year.
 * @param {string | undefined} [field=undefined] - Optional field to filter by.
 * @returns {Promise<object[]>} - The resulting array of country data.
 */
export async function getByYear (year, field = undefined) {
  return await fetchData(`/api/${year}${field ? `/${field}` : ''}`)
}

/**
 * Fetches data based on top result of given field.
 *
 * @param {number} year - The year.
 * @param {string} field - The field.
 * @returns {Promise<object[]>} - an array containing the top countries for any field.
 */
export async function getTopByField (year, field) {
  return await fetchData(`/api/${year}/${field}/top`)
}

/**
 * Returns the summary of a field with given year.
 *
 * @param {number} year - The year.
 * @param {string} field - The field.
 * @returns {Promise<object>} - The summary of a field with given year.
 */
export async function getSummaryOfField (year, field) {
  return await fetchData(`/api/${year}/${field}/summary`)
}

/**
 * Retrieves all datapoints for specified country within given year span.
 *
 * @param {string} field - The given field.
 * @param {number} lowestYear - The lowest year.
 * @param {number} highestYear - The highest year.
 * @param {string[]} countries - An array of countries to retrieve.
 * @returns {Promise<object[]>} - an array containing all specified countries and relevant data points.
 */
export async function getAllByField (field, lowestYear, highestYear, countries) {
  return await fetchData(`/api/${field}?lowest_year=${lowestYear}&highest_year=${highestYear}&countries=${JSON.stringify(countries)}`)
}

/**
 * Retrieves all available countries in api.
 *
 * @returns {Promise<object[]>} - All countries in api.
 */
export async function getAllCountries () {
  return await fetchData('/api/countries')
}

/**
 * Internal method to retrieve data using fetch.
 *
 * @param {string} url - The specified url.
 * @returns {Promise<*>} - The resulting request.
 */
async function fetchData (url) {
  const res = await fetch(url, {
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error(`Couldn't fetch data stats, server responded with a ${res.status}`)
  }

  return await res.json()
}
