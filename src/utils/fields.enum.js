export class Fields {
  static POPULATION = new Fields("population")
  static GDP = new Fields("gdp")
  static BIOFUEL_CONS_PER_CAPITA = new Fields("biofuel_cons_per_capita")
  static COAL_CONS_PER_CAPITA = new Fields("coal_cons_per_capita")
  static ENERGY_PER_CAPITA = new Fields("energy_per_capita")
  static FOSSIL_ENERGY_PER_CAPITA = new Fields("fossil_energy_per_capita")
  static GAS_ENERGY_PER_CAPITA = new Fields("gas_energy_per_capita")
  static HYDRO_ENERGY_PER_CAPITA = new Fields("hydro_energy_per_capita")
  static LOW_CARBON_ENERGY_PER_CAPITA = new Fields("low_carbon_energy_per_capita")
  static NUCLEAR_ENERGY_PER_CAPITA = new Fields("nuclear_energy_per_capita")
  static OIL_ENERGY_PER_CAPITA = new Fields("oil_energy_per_capita")
  static OTHER_RENEWABLE_ENERGY_PER_CAPITA = new Fields("other_renewables_energy_per_capita")
  static RENEWABLES_ENERGY_PER_CAPITA = new Fields("renewables_energy_per_capita")
  static SOLAR_ENERGY_PER_CAPITA = new Fields("solar_energy_per_capita")
  static WIND_ENERGY_PER_CAPITA = new Fields("wind_energy_per_capita")

  #value

  constructor(value) {
    this.#value = value
  }

  get value() {
    return this.#value
  }
}