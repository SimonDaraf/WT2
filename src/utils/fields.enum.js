export class Fields {
  static POPULATION = new Fields("population", "Population")
  static GDP = new Fields("gdp", "Gdp")
  static BIOFUEL_CONS_PER_CAPITA = new Fields("biofuel_cons_per_capita", "Biofuel Consumption Per Capita")
  static COAL_CONS_PER_CAPITA = new Fields("coal_cons_per_capita", "Coal Consumption Per Capita")
  static ENERGY_PER_CAPITA = new Fields("energy_per_capita", "Energy Per Capita")
  static FOSSIL_ENERGY_PER_CAPITA = new Fields("fossil_energy_per_capita", "Fossil Energy Per Capita")
  static GAS_ENERGY_PER_CAPITA = new Fields("gas_energy_per_capita", "Gas Energy Per Capita")
  static HYDRO_ENERGY_PER_CAPITA = new Fields("hydro_energy_per_capita", "Hydro Energy Per Capita")
  static LOW_CARBON_ENERGY_PER_CAPITA = new Fields("low_carbon_energy_per_capita", "Low Carbon Energy Per Capita")
  static NUCLEAR_ENERGY_PER_CAPITA = new Fields("nuclear_energy_per_capita", "Nuclear Energy Per Capita")
  static OIL_ENERGY_PER_CAPITA = new Fields("oil_energy_per_capita", "Oil Energy Per Capita")
  static OTHER_RENEWABLE_ENERGY_PER_CAPITA = new Fields("other_renewables_energy_per_capita", "Other Renewables Energy Per Capita")
  static RENEWABLES_ENERGY_PER_CAPITA = new Fields("renewables_energy_per_capita", "Renewables Energy Per Capita")
  static SOLAR_ENERGY_PER_CAPITA = new Fields("solar_energy_per_capita", "Solar Energy Per Capita")
  static WIND_ENERGY_PER_CAPITA = new Fields("wind_energy_per_capita", "Wind Energy Per Capita")

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

  #value
  #title

  constructor(value, title) {
    this.#value = value
    this.#title = title
  }

  get value() {
    return this.#value
  }

  get title() {
    return this.#title
  }
}