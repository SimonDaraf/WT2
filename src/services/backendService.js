/**
 * Returns the lowest available year and highest available year.
 *
 * @return {object} - An object containing "highest_year" and "lowest_year".
 */
export async function getYearRange() {
  return await fetchData('/api/stats')
}

/**
 * Fetches data based on year.
 *
 * @param {number} year - The year. 
 * @param {undefined} [field=undefined] - Optional field to filter by.
 */
export async function getByYear(year, field = undefined) {
  return await fetchData(`/api/${year}${field ? `/${field}` : ''}`)
}

export async function getTopByField(year, field) {
  return await fetchData(`/api/${year}/${field}/top`)
}

export async function getSummaryOfField(year, field) {
  return await fetchData(`/api/${year}/${field}/summary`)
}

export async function getAllByField(field, lowest_year, highest_year, countries) {
  return await fetchData(`/api/${field}?lowest_year=${lowest_year}&highest_year=${highest_year}&countries=${JSON.stringify(countries)}`)
}

export async function getAllCountries() {
  return await fetchData('/api/countries')
}

async function fetchData(url) {
  const res = await fetch(url, {
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error(`Couldn't fetch data stats, server responded with a ${res.status}`)
  }

  return await res.json()
}