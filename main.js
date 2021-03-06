const deviceAPI =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const usersAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
const newUsers = [];
let devicesArray = [];
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
  constructor(name, age, email, phone, id, picture, color) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.id = id;
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
  document.body.style.background = ``;
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
  class="col-12 col-lg-7 p-5  "
>
  <h1 class="display-1 my-5 text-center">Welcome To BetaShop</h1>
    <h2> BetaShop is a site that connects companies with a product that needs testing to Beta-Testers worldwide.</h2>
    <h2>
    Here a company can upload a request for testing a product and testers from all around the world with a variety of occupations and talents can apply to test that product.
    Then the company can screen testers and search for specific requirements such as country, occupation, age and more to find their desired beta-testers.</h2>
    <h2> Beta-Testers are obligated to write a review of the product by the standard that the company demanded, companies can rate the reviews written by testers and that rating will be saved on the tester information for future uses, such as screening testers by rating score average for quality reviews and testing.   
    Another feature on our platform  is promotion and advertising, here at BetaShop companies can interact with influencers worldwide to promote their products.</h2>
  <h2>
   <strong> BetaShop is a site that Designed to find a unique way of testing products, save time in the testing stage , customize the products to a wider variety of users and improve end products for all our customers. </strong>
  </h2>
    </div>
    <img class="col-12 col-lg-5 p-0 " src="images/test_ad.jpeg" alt="" />
  </div>
</div>
<div class="container-fluid bg-white my-5 d-lg-flex">
<div class="row w-100 d-flex justify-content-between">
  <img class="col-12 col-lg-5 p-0" src="images/user_ad.jpeg" alt="" />
  <div
    class="col-12 col-lg-7 p-4 order-first order-lg-last d-flex flex-column align-items-center "
  >
    <h1 class="display-1 my-5 text-center">For You Future Beta-Testers</h1>
    <h2 class="mt-5"> Here in our site you can apply to test new cutting age technology<h2>
    <h2>Take a part of the producing process</h2>
   <h2> Make a diffrence on your favorite tech</h2>
    <h2>Get a new beta device before anybody else and expirience it first</h2>
    <h2><strong>SOO WHAT ARE YOU WAITING FOR? Join Now</strong></h2>
  </div>
</div>

</div>
<div class="container-fluid mb-3">
  <hr class="hr-text" data-content="New Arrivals" />
</div>
<div class="container-fluid pt-4 mb-5">
  <div class="row">
    <img class="col-4 pb-3" src="images/pixel_ad.jpg" alt="">
    <video class="col-8 pb-3" autoplay muted loop src="videos/google_pixel.webm"></video>
    <video class="col-8 pb-3" autoplay muted loop src="videos/samsung_galaxy.webm"></video>
    <img class="col-4 pb-3" src="images/galaxy_ad.png" alt="">
    <img class="col-4 pb-3" src="images/iphone_ad.jpg" alt="">
    <video class="col-8" autoplay muted loop src="videos/apple_iphone.webm"></video>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <button type="button" onclick="changePage('Products',event)" class="btn btn-outline-primary btn-lg">For All Available Product</button>
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 d-none d-lg-block mx-2">
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
        <div class="card col-lg-2 col-4 d-none d-lg-block mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 d-none d-lg-block mx-2">
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
        <div class="card col-lg-2 col-4 d-none d-lg-block mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 mx-2">
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
        <div class="card col-lg-2 col-4 d-none d-lg-block mx-2">
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
        <div class="card col-lg-2 col-4 d-none d-lg-block mx-2">
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
    card_display.innerHTML = `<img src="videos/loading_icon.gif" id="loading_gif" alt="">`;
    return await fetch(deviceAPI).then((res) => res.json());
  } catch (error) {
    console.log(error);
  } finally {
    loading_gif.style.display = "none";
  }
}
function loadProductPage() {
  document.body.style.background = ``;
  changer_main.innerHTML = `
  <div class="container-fluid px-0 mb-5">
  <img src="images/product_pic.jpeg" class="w-100" alt="" />
  <h1 class="px-5 display-1">Beta-Products</h1>
  <h3 class="px-5 display-4">Here you can find all the available Beta Products to test.</br>If you are intested in testing please click on the product.</h3>
  <div class="container p-5">
  <nav
    class="navbar navbar-expand bg-info p-3 rounded d-flex flex-column"
  >
    <div class="container-fluid">
      <div class="row w-100">
        <div class="d-flex col-12">
          <select
            class="form-select form-select-lg"
            aria-label="Default select example"
            onchange="loadSearchTopicOption()"
            id="topic_select"
          >
            <option selected>Search Category</option>
            <option value="ram">RAM</option>
            <option value="brand">Brand</option>
          </select>
          <button type="submit" onclick="startSearch()" class="btn btn-primary btn-lg">
            Search
          </button>
        </div>
        <div id="option_div"></div>
      </div>
    </div>
  </nav>
</div>
</div>
    <div class="container-fluid pt-5"> 
        <div id="card_display" class="row">
        </div>
      </div>
      <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Request Message
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h1>Are you Sure?</h1>
            <h4>Press submit to send your request</h4>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
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
  devicesArray = classArray;
  return classArray;
}
function displayCards(array) {
  array.forEach((entry) => {
    card_display.innerHTML += buildCard(entry);
  });
}
function buildCard(object) {
  return `  
  <div id="${object["id"]}" class="col-12 col-md-6 col-lg-4 pb-5" >
    <div class="card position-relative h-100">
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
        <button type="button" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop" class="btn btn-info position-absolute request_btn">Request Beta</button>
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
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
function loadAboutPage() {
  // document.body.style.background = `linear-gradient(
  //   270deg,
  //   rgba(66, 55, 143, 1) 0%,
  //   rgba(245, 56, 68, 1) 100%
  // // )`;
  changer_main.innerHTML = `
    <h1 class="display-1 p-5 ">About Us</h1>
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
    <h1 class="display-2 p-3">We Are Looking For New Talents</h1>
    <div class="container-fluid bg-white mb-5">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex flex-column align-items-center ">
        <div class="container">
          <h3 class="display-3 my-5 text-center">Join Us</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            saepe cupiditate officiis maiores similique minus eveniet repellat
            veniam, accusantium mollitia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          saepe cupiditate officiis maiores similique minus eveniet repellat
          veniam, accusantium mollitia?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        saepe cupiditate officiis maiores similique minus eveniet repellat
        veniam, accusantium mollitia?
      </h5>
      </div>
        </div>
        <img class="col-12 col-lg-6" src="images/join_about.jpg" alt="" />
      </div>
    </div>
    <div class="container-fluid my-5">
    <div class="row">
      <img class="col-12 col-lg-6" src="images/office.jpg" alt="" />
      <div
        class="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center"
      >
      <h1 class="text-danger">Our offices are located at Lod,Israel</h1>
      <h2 class="pb-5">Press the map for direction </h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.092145418002!2d34.892845006026214!3d31.95487871978377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502ca5931ac739f%3A0xdc4b1580616c867f!2sMagalcom%20Ltd.!5e0!3m2!1siw!2sil!4v1658264419855!5m2!1siw!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    `;
}
function loadContactPage() {
  document.body.style.background = ``;
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
      <input type="hidden" name="_next" value="https://orgadamo.github.io/Betashop/pages/form.html">
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
    changer_main.innerHTML += `<img src="videos/loading_icon.gif" id="loading_gif" alt="">`;
    return await fetch(usersAPI).then((res) => res.json());
  } catch (error) {
    console.log(error);
  } finally {
    loading_gif.style.display = "none";
  }
}
function loadUsersPage() {
  document.body.style.background = ``;
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
      <div id=""usertable_con" class="container-fluid d-none d-md-block">
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
      new User(
        entry["name"],
        entry["age"],
        entry["email"],
        entry["phone"],
        entry["_id"]
      )
    )
  );
  return usersArray;
}
function createUsersTable(array) {
  const allUsers = array.concat(newUsers);
  allUsers.forEach((entry) => addTableRow(entry));
}
function addTableRow(obj) {
  table_body.innerHTML += `
    <tr id="${obj["id"]}" >
    <td>${obj["name"]["first"]}</td>
    <td>${obj["name"]["last"]}</td>
    <td>${obj["age"]}</td>
    <td>${obj["email"]}</td>
    <td>${obj["phone"]}</td>
    <td class="position-relative">
    <button type="button" onclick="deleteUser('${obj["id"]}')" class="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
    <div style="background-color:${obj["color"]};"class="avatar_div"><img class="avatar_img" src=${obj["picture"]}></div>
    </td>
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
function deleteRowTable(id) {
  document.getElementById(id).style.display = "none";
}
async function deleteUserFromAPI(id) {
  try {
    return await fetch(`${usersAPI}/${id}`, { method: "DELETE" }).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
}
function deleteUser(id) {
  deleteRowTable(id);
  deleteUserFromAPI(id);
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
function displaySignUp() {
  overlay_signup.style.display = "block";
}
function hideSignUp() {
  overlay_signup.style.display = "none";
}
function signUserUp(e) {
  e.preventDefault();
  const newUser = new User(
    {
      first: document.forms["signup_form"]["first_name"].value,
      last: document.forms["signup_form"]["last_name"].value,
    },
    document.forms["signup_form"]["age"].value,
    document.forms["signup_form"]["email"].value,
    document.forms["signup_form"]["phone"].value
  );
  MessageUserHeader(newUser["name"]["first"], newUser["name"]["last"]);
  newUsers.push(newUser);
  addUserToAPI(newUser);
  endSignUp();
}
function endSignUp() {
  first_name.value = "";
  last_name.value = "";
  age.value = "";
  email.value = "";
  phone.value = "";
  hideSignUp();
}
function MessageUserHeader(userFirstName, userLastName) {
  signup_btn_div.innerHTML = `
  <h5>Hello ${userFirstName} ${userLastName} </h5>
  <button onclick="logUserOut()" class="btn btn-danger btn-lg mx-2">
  Log-Out
</button>
  `;
}
function logUserOut() {
  signup_btn_div.innerHTML = `
  <button onclick="displaySignUp()" class="btn btn-danger btn-lg">
  Sign-Up
</button>
  `;
}
async function addUserToAPI(obj) {
  try {
    await fetch(usersAPI, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-type": "appliction/json;" },
    });
  } catch (error) {
    console.log(error);
  }
}
function loadBrandSearchOption() {
  option_div.innerHTML = `
  
  <div class="container-fluid">
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="samsung"
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      SAMSUNG
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="apple"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      Apple
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="mi"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      Mi
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="google"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      Google
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="sony"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      Sony
    </label>
  </div>
</div>
  
  `;
}
function loadRamSearchOption() {
  option_div.innerHTML = `
  <div class="container-fluid">
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="4"
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      4GB
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="6"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      6GB
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="8"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      8GB
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="16"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      16GB
    </label>
  </div>
  <div class="form-check col-3">
    <input
      class="form-check-input"
      type="checkbox"
      value="32"
      id="flexCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexCheckChecked">
      32GB
    </label>
  </div>
</div>

  `;
}
function resetSearchOption() {
  option_div.innerHTML = "";
}
function loadSearchTopicOption() {
  switch (topic_select.value) {
    case "ram":
      loadRamSearchOption();
      break;
    case "brand":
      loadBrandSearchOption();
      break;
    default:
      resetSearchOption();
  }
}
function sortDeviceArrayByRam(optionsArr) {
  const searchArray = devicesArray.filter((device) => {
    for (let i = 0; i < optionsArr.length; i++) {
      if (device.ram === optionsArr[i]) return true;
    }
  });
  return searchArray;
}
function sortDeviceArrayByBrand(optionsArr) {
  const searchArray = devicesArray.filter((device) => {
    for (let i = 0; i < optionsArr.length; i++) {
      if (device.brand === optionsArr[i]) return true;
    }
  });
  return searchArray;
}
function startSearch() {
  let checkBoxs = document.getElementsByClassName("form-check-input");
  switch (topic_select.value) {
    case "ram":
      card_display.innerHTML = "";
      displayCards(sortDeviceArrayByRam(getRamOptionArray(checkBoxs)));
      break;
    case "brand":
      card_display.innerHTML = "";
      displayCards(sortDeviceArrayByBrand(getBrandOptionArray(checkBoxs)));
      break;
  }
  if (card_display.innerHTML == "")
    card_display.innerHTML = "<h1>NO RESULTS</h1>";
}
function getBrandOptionArray(checkBoxsArr) {
  let searchOption = [];
  for (let input of checkBoxsArr) {
    if (input.checked) {
      switch (input.value) {
        case "apple":
          searchOption.push("images/apple.png");
          break;
        case "mi":
          searchOption.push("images/mi.png");
          break;
        case "samsung":
          searchOption.push("images/samsung.png");
          break;
        case "sony":
          searchOption.push("images/sony.png");
          break;
        case "google":
          searchOption.push("images/google.png");
          break;
      }
    }
  }
  return searchOption;
}
function getRamOptionArray(checkBoxsArr) {
  let searchOption = [];
  for (let input of checkBoxsArr) {
    if (input.checked) searchOption.push(input.value);
  }
  return searchOption;
}
window.onload = () => {
  loadMainPage();
};
