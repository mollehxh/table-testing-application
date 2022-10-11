const db = require('../db');

class CarController {
  async getCars(req, res) {
    const cars = await db.query(`SELECT * FROM car`);

    res.json(cars.rows);
  }
}

module.exports = new CarController();
