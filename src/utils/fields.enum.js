export class Fields {
  static POPULATION = new Fields("population", "Population", "Population by country, available from 10,000 BCE to 2100, based on data and estimates from different sources.", "", "Population based on various sources (2023)", "https://ourworldindata.org/population-sources")
  static GDP = new Fields("gdp", "Gdp", "This data is adjusted for inflation and differences in the cost of living between countries.", "$", "Bolt and van Zanden - Maddison Project Database 2023", "https://www.rug.nl/ggdc/historicaldevelopment/maddison/releases/maddison-project-database-2023", true)
  static BIOFUEL_CONS_PER_CAPITA = new Fields("biofuel_cons_per_capita", "Biofuel Consumption Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static COAL_CONS_PER_CAPITA = new Fields("coal_cons_per_capita", "Coal Consumption Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static ENERGY_PER_CAPITA = new Fields("energy_per_capita", "Energy Per Capita", "kWh", "U.S. Energy Information Administration - International Energy Data (2023)", "https://www.eia.gov/opendata/bulkfiles.php")
  static FOSSIL_ENERGY_PER_CAPITA = new Fields("fossil_energy_per_capita", "Fossil Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static GAS_ENERGY_PER_CAPITA = new Fields("gas_energy_per_capita", "Gas Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static HYDRO_ENERGY_PER_CAPITA = new Fields("hydro_energy_per_capita", "Hydro Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static LOW_CARBON_ENERGY_PER_CAPITA = new Fields("low_carbon_energy_per_capita", "Low Carbon Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static NUCLEAR_ENERGY_PER_CAPITA = new Fields("nuclear_energy_per_capita", "Nuclear Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static OIL_ENERGY_PER_CAPITA = new Fields("oil_energy_per_capita", "Oil Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static OTHER_RENEWABLE_ENERGY_PER_CAPITA = new Fields("other_renewables_energy_per_capita", "Other Renewables Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static RENEWABLES_ENERGY_PER_CAPITA = new Fields("renewables_energy_per_capita", "Renewables Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static SOLAR_ENERGY_PER_CAPITA = new Fields("solar_energy_per_capita", "Solar Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")
  static WIND_ENERGY_PER_CAPITA = new Fields("wind_energy_per_capita", "Wind Energy Per Capita", "Measured in kilowatt-hours per person.", "kWh", "Energy Institute - Statistical Review of World Energy (2024)", "https://www.energyinst.org/statistical-review/")

  /**
   * Returns an array of all defined static fields.
   */
  static toArray() {
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
   * @param {string} value 
   */
  static fromValue(value) {
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

  constructor(value, title, description, unit, source, sourceLink, isDollar = false) {
    this.#value = value
    this.#title = title
    this.#description = description,
    this.#unit = unit
    this.#source = source
    this.#sourceLink = sourceLink
    this.#isDollar = isDollar
  }

  get value() {
    return this.#value
  }

  get title() {
    return this.#title
  }

  get description() {
    return this.#description
  }

  get unit() {
    return this.#unit
  }

  get source() {
    return this.#source
  }

  get sourceLink() {
    return this.#sourceLink
  }

  /**
   * Formats the value with the fields unit.
   * 
   * @param {*} value 
   */
  format(value) {
    if (!value || value === null) return ''
    return this.#isDollar ? `${this.#unit}${value}` : `${value} ${this.#unit}`
  }
}