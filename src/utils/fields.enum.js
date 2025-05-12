/**
 * Represents an enum like class of fields.
 */
export class Fields {
  static POPULATION = new Fields('population', 'Population', 'Population by country, available from 10,000 BCE to 2100, based on data and estimates from different sources.', '', 'Population based on various sources (2023)', 'https://ourworldindata.org/population-sources')
  static GDP = new Fields('gdp', 'Gdp', 'This data is adjusted for inflation and differences in the cost of living between countries.', '$', 'Bolt and van Zanden - Maddison Project Database 2023', 'https://www.rug.nl/ggdc/historicaldevelopment/maddison/releases/maddison-project-database-2023', true)
  static BIOFUEL_CONS_PER_CAPITA = new Fields('biofuel_cons_per_capita', 'Biofuel Consumption Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static COAL_CONS_PER_CAPITA = new Fields('coal_cons_per_capita', 'Coal Consumption Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static ENERGY_PER_CAPITA = new Fields('energy_per_capita', 'Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'U.S. Energy Information Administration - International Energy Data (2023)', 'https://www.eia.gov/opendata/bulkfiles.php')
  static FOSSIL_ENERGY_PER_CAPITA = new Fields('fossil_energy_per_capita', 'Fossil Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static GAS_ENERGY_PER_CAPITA = new Fields('gas_energy_per_capita', 'Gas Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static HYDRO_ENERGY_PER_CAPITA = new Fields('hydro_energy_per_capita', 'Hydro Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static LOW_CARBON_ENERGY_PER_CAPITA = new Fields('low_carbon_energy_per_capita', 'Low Carbon Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static NUCLEAR_ENERGY_PER_CAPITA = new Fields('nuclear_energy_per_capita', 'Nuclear Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static OIL_ENERGY_PER_CAPITA = new Fields('oil_energy_per_capita', 'Oil Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static OTHER_RENEWABLE_ENERGY_PER_CAPITA = new Fields('other_renewables_energy_per_capita', 'Other Renewables Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static RENEWABLES_ENERGY_PER_CAPITA = new Fields('renewables_energy_per_capita', 'Renewables Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static SOLAR_ENERGY_PER_CAPITA = new Fields('solar_energy_per_capita', 'Solar Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')
  static WIND_ENERGY_PER_CAPITA = new Fields('wind_energy_per_capita', 'Wind Energy Per Capita', 'Measured in kilowatt-hours per person.', 'kWh', 'Energy Institute - Statistical Review of World Energy (2024)', 'https://www.energyinst.org/statistical-review/')

  /**
   * Returns an array of all defined static fields.
   *
   * @returns {Fields[]} - An array of every static field instance.
   */
  static toArray () {
    return [
      Fields.POPULATION,
      Fields.GDP,
      Fields.BIOFUEL_CONS_PER_CAPITA,
      Fields.COAL_CONS_PER_CAPITA,
      Fields.ENERGY_PER_CAPITA,
      Fields.FOSSIL_ENERGY_PER_CAPITA,
      Fields.GAS_ENERGY_PER_CAPITA,
      Fields.HYDRO_ENERGY_PER_CAPITA,
      Fields.LOW_CARBON_ENERGY_PER_CAPITA,
      Fields.OIL_ENERGY_PER_CAPITA,
      Fields.OTHER_RENEWABLE_ENERGY_PER_CAPITA,
      Fields.RENEWABLES_ENERGY_PER_CAPITA,
      Fields.SOLAR_ENERGY_PER_CAPITA,
      Fields.WIND_ENERGY_PER_CAPITA
    ]
  }

  /**
   * Returns an instance based on field value.
   *
   * @param {string} value - The fields underlying string value.
   * @returns {Fields | undefined} - The matching field, if any.
   */
  static fromValue (value) {
    switch (value) {
      case Fields.POPULATION.value: return Fields.POPULATION
      case Fields.GDP.value: return Fields.GDP
      case Fields.BIOFUEL_CONS_PER_CAPITA.value: return Fields.BIOFUEL_CONS_PER_CAPITA
      case Fields.COAL_CONS_PER_CAPITA.value: return Fields.COAL_CONS_PER_CAPITA
      case Fields.ENERGY_PER_CAPITA.value: return Fields.ENERGY_PER_CAPITA
      case Fields.FOSSIL_ENERGY_PER_CAPITA.value: return Fields.FOSSIL_ENERGY_PER_CAPITA
      case Fields.GAS_ENERGY_PER_CAPITA.value: return Fields.GAS_ENERGY_PER_CAPITA
      case Fields.HYDRO_ENERGY_PER_CAPITA.value: return Fields.HYDRO_ENERGY_PER_CAPITA
      case Fields.LOW_CARBON_ENERGY_PER_CAPITA.value: return Fields.LOW_CARBON_ENERGY_PER_CAPITA
      case Fields.OIL_ENERGY_PER_CAPITA.value: return Fields.OIL_ENERGY_PER_CAPITA
      case Fields.OTHER_RENEWABLE_ENERGY_PER_CAPITA.value: return Fields.OTHER_RENEWABLE_ENERGY_PER_CAPITA
      case Fields.RENEWABLES_ENERGY_PER_CAPITA.value: return Fields.RENEWABLES_ENERGY_PER_CAPITA
      case Fields.SOLAR_ENERGY_PER_CAPITA.value: return Fields.SOLAR_ENERGY_PER_CAPITA
      case Fields.WIND_ENERGY_PER_CAPITA.value: return Fields.WIND_ENERGY_PER_CAPITA
      default: return undefined
    }
  }

  #value
  #title
  #description
  #unit
  #source
  #sourceLink
  #isDollar

  /**
   * Constructs a new field.
   *
   * @param {string} value - The udnerlying value.
   * @param {string} title - The readable field title.
   * @param {string} description - Any additional information on the field.
   * @param {string} unit - The unit.
   * @param {string} source - The field source title.
   * @param {string} sourceLink - The field source url.
   * @param {boolean} isDollar - If the unit is dollar, used to format.
   */
  constructor (value, title, description, unit, source, sourceLink, isDollar = false) {
    this.#value = value
    this.#title = title
    this.#description = description
    this.#unit = unit
    this.#source = source
    this.#sourceLink = sourceLink
    this.#isDollar = isDollar
  }

  /**
   * The value.
   *
   * @returns {string} - The value.
   */
  get value () {
    return this.#value
  }

  /**
   * The title.
   *
   * @returns {string} - The title.
   */
  get title () {
    return this.#title
  }

  /**
   * The description.
   *
   * @returns {string} - The description.
   */
  get description () {
    return this.#description
  }

  /**
   * The unit.
   *
   * @returns {string} - The unit.
   */
  get unit () {
    return this.#unit
  }

  /**
   * The source.
   *
   * @returns {string} - The source.
   */
  get source () {
    return this.#source
  }

  /**
   * The source link.
   *
   * @returns {string} - The source link.
   */
  get sourceLink () {
    return this.#sourceLink
  }

  /**
   * Formats the value with the fields unit.
   *
   * @param {*} value - The value to apply the format to.
   * @returns {string} - A formated string.
   */
  format (value) {
    if (!value || value === null) return ''
    return this.#isDollar ? `${this.#unit}${value}` : `${value} ${this.#unit}`
  }
}
