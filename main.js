const deviceAPI =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const usersAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
const NewUsers = [];
const avatarArray = [
  "images/avatar1.png",
  "images/avatar2.png",
  "images/avatar3.png",
  "images/avatar4.png",
  "images/avatar5.png",
  "images/avatar6.png",
];
const colorArray = [
  "#6060ce",
  "#f64a4a",
  "#50bf50",
  "#d9d965",
  "#7a3e7a",
  "#eba72b",
];
class Device {
  constructor(id, brand, date, ram, price, color, available) {
    this.id = id;
    switch (brand) {
      case "apple":
        this.brand = "images/apple.png";
        this.picture = "images/apple_device.png";
        break;
      case "mi":
        this.brand = "images/mi.png";
        this.picture = "images/mi_device.png";
        break;
      case "samsung":
        this.brand = "images/samsung.png";
        this.picture = "images/samsung_device.png";
        break;
      case "sony":
        this.brand = "images/sony.png";
        this.picture = "images/sony_device.png";
        break;
      case "google":
        this.brand = "images/google.png";
        this.picture = "images/google_device.png";
        break;
    }
    this.date = date;
    this.ram = ram;
    this.price = price;
    this.color = color;
    if (available) {
      this.available = `<h2>Available <i class="bi bi-check-lg text-success"></i></h2>`;
    } else {
      this.available = `<h2>Not Available <i class="bi bi-x text-danger"></i></i></h2>`;
    }
  }
}
class User {
  constructor(name, age, email, phone, picture, color) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    if (picture == null) {
      this.picture = avatarArray[Math.floor(Math.random() * 6)];
    } else {
      this.picture = picture;
    }
    if (color == null) {
      this.color = colorArray[Math.floor(Math.random() * 6)];
    } else {
      this.color = color;
    }
  }
}
function loadMainPage() {
  changer_main.innerHTML = `
  <div id="myCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/into_pic1.jpeg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="images/intro_pic2.jpeg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="images/intro_pic3.jpeg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="images/into_pic4.jpeg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#myCarousel"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#myCarousel"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container-fluid bg-white my-5">
  <div class="row d-flex justify-content-between">
    <div
      class="col-8 p-4 text-center"
    >
      <h1 class="display-1 my-5">Welcome</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Dolorem
        voluptate sint dolorum provident ea iusto tempore minus.</br> Deserunt
        excepturi natus quisquam blanditiis cumque impedit unde.
      </h3>
    </div>
    <img class="col-4 p-0" src="https://picsum.photos/200" alt="" />
  </div>
  <div class="row d-flex justify-content-between">
    <img class="col-4 p-0" src="https://picsum.photos/200" alt="" />
    <div
      class="col-8 p-4 text-center"
    >
      <h1 class="display-1 my-5">Welcome</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.</br> Dolorem
        voluptate sint dolorum provident ea iusto tempore minus.</br> Deserunt
        excepturi natus quisquam blanditiis cumque impedit unde.
      </h3>
    </div>
  </div>
</div>
<div class="container-fluid mb-3">
  <hr class="hr-text" data-content="New Arrivals" />
</div>
<div class="container-fluid pt-4 mb-5">
  <div class="row">
    <img class="col-4 pb-3" src="https://picsum.photos/200" alt="">
    <video class="col-8 pb-3" autoplay muted loop src="videos/google_pixel.webm"></video>
    <video class="col-8 pb-3" autoplay muted loop src="videos/samsung_galaxy.webm"></video>
    <img class="col-4 pb-3" src="https://picsum.photos/200" alt="">
    <img class="col-4 pb-3" src="https://picsum.photos/200" alt="">
    <video class="col-8" autoplay muted loop src="videos/apple_iphone.webm"></video>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <button type="button" class="btn btn-outline-primary btn-lg">For All Available Product</button>
  </div>
</div>
<div class="container-fluid mb-3">
  <hr class="hr-text" data-content="Top Reviews" />
</div>
<div id="reviewCarousel" class="carousel carousel-dark slide mt-5 mb-5" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <div class="container-fluid d-flex justify-content-center">
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Or Gadamo</h3>
            <h4 class="card-subtitle mb-2 text-muted">Software Developer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Batel Hayialo</h3>
            <h4 class="card-subtitle mb-2 text-muted">Sofrware Developer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Dalia Zegaya</h3>
            <h4 class="card-subtitle mb-2 text-muted">Software Developer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Dan Tavor</h3>
            <h4 class="card-subtitle mb-2 text-muted">UI/UX</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>KSI</h3>
            <h4 class="card-subtitle mb-2 text-muted">Youtube Influencer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
      </div>
   
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div class="container-fluid d-flex justify-content-center">
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Bill Gates</h3>
            <h4 class="card-subtitle mb-2 text-muted"></h4>Bill Gates
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Joun Doe</h3>
            <h4 class="card-subtitle mb-2 text-muted">UI/UX</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Mark Zuki</h3>
            <h4 class="card-subtitle mb-2 text-muted">Designer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Shalom Levi </h3>
            <h4 class="card-subtitle mb-2 text-muted">Influencer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Yosi Belacho</h3>
            <h4 class="card-subtitle mb-2 text-muted">Software Developer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="container-fluid d-flex justify-content-center">
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Daniel Melada</h3>
            <h4 class="card-subtitle mb-2 text-muted">Software Developer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Yonatan Izhak</h3>
            <h4 class="card-subtitle mb-2 text-muted">Engineer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Chen Semu</h3>
            <h4 class="card-subtitle mb-2 text-muted">Playboy business</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Lior David</h3>
            <h4 class="card-subtitle mb-2 text-muted">Engineer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
        <div class="card col-2 mx-2">
          <div class="card-body">
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <i class="bi bi-star-fill" style="color:yellow"></i>
            <h3>Natanel Tesfay</h3>
            <h4 class="card-subtitle mb-2 text-muted">Producer</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo pariatur repudiandae est sit dignissimos ducimus omnis, provident deserunt sequi!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container-fluid mb-5">
  <hr class="hr-text" data-content="Our Collaborators" />
</div>
<div class="container">
  <img src="images/companies.png" alt="" class="col-12">
</div>
  `;
}
async function getDevices() {
  try {
    return await fetch(deviceAPI).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
function loadProductPage() {
  changer_main.innerHTML = `
  <div class="container-fluid px-0 mb-5">
  <img src="images/product_pic.jpeg" class="w-100" alt="" />
  <h1 class="px-5 display-1">Beta-Products</h1>
  <h3 class="px-5 display-4">Here you can find all the available Beta Products to test.</br>If you are intested in testing please click on the product.</h3>
</div>
    <div class="container-fluid pt-5"> 
        <div id="card_display" class="row">
        </div>
      </div>`;
  getDevices().then((data) => displayCards(getClassArray(data)));
}
function getClassArray(array) {
  const classArray = [];
  array.forEach((entry) =>
    classArray.push(
      new Device(
        entry["id"],
        entry["brand"],
        entry["createdAt"],
        entry["ram"],
        entry["price"],
        entry["color"],
        entry["isAvailable"]
      )
    )
  );
  return classArray;
}
function displayCards(array) {
  array.forEach((entry) => {
    card_display.innerHTML += buildCard(entry);
  });
  console.log(array);
}
function buildCard(object) {
  return `  
    <div id="${object["id"]}" class="card col-12 col-md-6 col-lg-4 position-relative">
    <i onclick="deleteCard(${object["id"]})"class="bi bi-x delete_btn"></i>
    <div class="d-flex justify-content-center">
      <img src=${object["picture"]} class="p-3 text-center device_pic" alt="..." />
    </div>
    <div class="card-body d-flex flex-column">
      <img src=${object["brand"]} alt="" class="brand_logo align-self-center"/>
      <div class="py-3">
      ${object["available"]}
        <h2>Date: ${object["date"]}</h2>
        <h2>RAM: ${object["ram"]}</h2>
        <h2>Price:${object["price"]}</h2>
        <div class="color_circle" style="background-color:${object["color"]};"></div>
      </div>
    </div>
  </div>`;
}
function deleteCard(id) {
  document.getElementById(id).style.display = "none";
  deleteDeviceFromAPI(id);
}
async function deleteDeviceFromAPI(id) {
  try {
    await fetch(deviceAPI + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
}
function loadAboutPage() {
  changer_main.innerHTML = `
    <h1 class="display-1 p-5 about_opener">About Us</h1>
    <div class="container-fluid bg-white">
      <div class="row">
        <img class="col-12 col-lg-6" src="images/team_about.jpg" alt="" />
        <div
          class="col-12 col-lg-6 d-flex flex-column justify-content-between"
        >
          <h3 class="display-3">Our Company</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            atque quaerat ipsam ea minus, accusantium nobis nemo quod, alias,
            suscipit aliquid ex nesciunt amet? Quaerat numquam sint quia eaque
            mollitia, fugit quae error amet laborum repellat, officiis optio
            beatae natus?
          </p>
          <h3 class="display-3">Our Goal</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            atque quaerat ipsam ea minus, accusantium nobis nemo quod, alias,
            suscipit aliquid ex nesciunt amet? Quaerat numquam sint quia eaque
            mollitia, fugit quae error amet laborum repellat, officiis optio
            beatae natus?
          </p>
          <h3 class="display-3">Our Principles</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            atque quaerat ipsam ea minus, accusantium nobis nemo quod, alias,
            suscipit aliquid ex nesciunt amet? Quaerat numquam sint quia eaque
            mollitia, fugit quae error amet laborum repellat, officiis optio
            beatae natus?
          </p>
          <h3 class="display-3">Our Team</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            atque quaerat ipsam ea minus, accusantium nobis nemo quod, alias,
            suscipit aliquid ex nesciunt amet? Quaerat numquam sint quia eaque
            mollitia, fugit quae error amet laborum repellat, officiis optio
            beatae natus?
          </p>
        </div>
      </div>
    </div>
    <h1 class="display-2 about_opener p-3">We Are Looking For New Talents</h1>
    <div class="container-fluid bg-white">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h3 class="display-3">Join Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            saepe cupiditate officiis maiores similique minus eveniet repellat
            veniam, accusantium mollitia?
          </p>
        </div>
        <img class="col-12 col-lg-6" src="images/join_about.jpg" alt="" />
      </div>
    </div>
    `;
}
function loadContactPage() {
  changer_main.innerHTML = `
    <div class="container card mt-5">
    <div class="row bg-white card-body">
      <div class="col-12 text-center" id="txtimg">
        <img
          src="images/black_icon.png"
          alt=""
          id="iconlogo"
          class="col-12"
        />
        <div>
          <h2 class="display-2">Contact Us</h2>
        </div>
      </div>
      <form
        class="col-12"
        action="https://formsubmit.co/brber223@gmail.com"
        method="POST"
      >
        <div class="p-2 form-group boxinput">
          <label for="name">FULL NAME*</label>
          <input
            required
            name="name"
            class="p-2 form-control textbar"
            type="text"
            id="name"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div class="p-2 form-group boxinput">
          <label for="email">EMAIL*</label>
          <input
            required
            name="email"
            type="email"
            class="form-control textbar"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div class="p-2 form-group boxinput">
          <label for="number">PHONE*</label>
          <input
            type="tel"
            class="form-control textbar"
            id="number"
            placeholder="Enter Your Phone-Number"
          />
        </div>
        <div class="p-2 form-group boxinput">
          <label for="Message">MESSAGE</label>
          <textarea
          name="_subject"
            required
            class="form-control textbar"
            id="Message"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>
        <div class="container">
          <div class="row d-flex justify-content-center">
            <button type="submit" class="btn btn-dark col-7">Submit</button>
          </div>
        </div>
      </form>
    </div>
    <div class="text-center">
      <p>contact our call center 24/7:<span> +9728-6409024</span></p>
    </div>
  </div>
    `;
}
async function getUsersArray() {
  try {
    return await fetch(usersAPI).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
function loadUsersPage() {
  changer_main.innerHTML = `
  <div class="container-fluid p-0">
        <img src="images/into_pic4.jpeg" class="col-12" alt="" />
      </div>
      <div class="cotainer p-5 text-center">
        <h1 class="display-1">Our Beta Testers</h1>
        <h3>Here you can find all the information you need on our users, our Beta Testers.</br>
        This page is for you, the companies to select the beta tester you desire.</br>
      And for you new users just click on the sign in button on top to register and enter our user list</h3>
      </div>
      <div class="container-fluid d-none d-md-block">
        <table class="table table-dark table-hover">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Avatar</th>
          </thead>
          <tbody id="table_body">

          </tbody>
        </table>
      </div>
      <div id="avatar_cards" class="container-fluid d-flex flex-column align-items-center d-md-none">
      </div>
  `;
  getUsersArray().then((data) => createUsersTable(getUsersClassArray(data)));
}
function getUsersClassArray(array) {
  const usersArray = [];
  array.forEach((entry) =>
    usersArray.push(
      new User(entry["name"], entry["age"], entry["email"], entry["phone"])
    )
  );
  return usersArray;
}
function createUsersTable(array) {
  console.log(array);
  const allUsers = array.concat(NewUsers);
  allUsers.forEach((entry) => addTableRow(entry));
}
function addTableRow(obj) {
  table_body.innerHTML += `
    <tr>
    <td>${obj["name"]["first"]}</td>
    <td>${obj["name"]["last"]}</td>
    <td>${obj["age"]}</td>
    <td>${obj["email"]}</td>
    <td>${obj["phone"]}</td>
    <td><div style="background-color:${obj["color"]};"class="avatar_div"><img class="avatar_img" src=${obj["picture"]}></div></td>
    </tr>

    `;
  avatar_cards.innerHTML += ` 
  <div style="  background-color:${obj["color"]};" class="container_avatar mb-3">
    <img src="${obj["picture"]}" alt="Avatar" class="image_avatar">
    <div class="overlay">
      <div class="text">
        <h3>First Name: ${obj["name"]["first"]}</h3>
        <h3>Last Name: ${obj["name"]["last"]}</h3>
        <h3>Age: ${obj["age"]}</h3>
        <h3>Email: ${obj["email"]}</h3>
        <h3>Phone: ${obj["phone"]}</h3>
      </div>
    </div>
  </div>
    `;
}
function changePage(location, event) {
  event.preventDefault();
  switch (location) {
    case "Home":
      loadMainPage();
      break;
    case "Products":
      loadProductPage();
      break;
    case "About":
      loadAboutPage();
      break;
    case "Users":
      loadUsersPage();
      break;
    case "Contact":
      loadContactPage();
      break;
  }
}
window.onload = () => {
  loadMainPage();
};
