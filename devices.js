class Device {
  constructor() {
    this.id = id;
    this.price = price;
    this.isAvailiable = isAvailiable;
    this.createdAt = createdAt;
    this.color = color;
    this.brand = brand;
    this.ram = ram;
  }
}
const devicesAPI =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
async function getDeviceList() {
  try {
    return await fetch(devicesAPI).then((res) => res.json());
  } catch (error) {
    console.log(error);
  } finally {
  }
}
getDeviceList().then((data) => next(data));
function next(arr) {
  console.log(arr);
  arr.forEach((entry) => {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
      }
    }
  });
}
function createDeviceCard(device) {
  return `<div class="card">
    <h1></h1>
    </div>`;
}
