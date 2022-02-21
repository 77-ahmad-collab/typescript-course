class Vehicle {
  constructor(public color: string) {}
  private rank(): number {
    return 23;
  }
  public drive(): string {
    return `a driver with having a rank of ${this.rank()}`;
  }
}
class Car extends Vehicle {
  constructor(public model: number, color: string) {
    super(color);
  }
  carModel(): string {
    const model = this.drive();
    return `${model} `;
  }
}
const vehicleInstance = new Vehicle("Red");
const carInstance = new Car(1001, "green");
console.log(vehicleInstance.color);
console.log(carInstance.color);
console.log(carInstance.carModel());
