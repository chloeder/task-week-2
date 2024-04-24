const getTestimonials = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.send();
  });
};

const allTestimonial = async () => {
  const response = await getTestimonials(
    "https://api.npoint.io/58435cef2dd335cd93a6"
  );

  if (!response.length) {
    return (document.querySelector(".testimonial-card").innerHTML =
      "<h1>Sorry, We Don't Have Testimonial 🙁😭</h1>");
  }

  const listedTestimonial = response.map((testimonial) => {
    return `
    <div class="card">
      <img
        src="${testimonial.image}"
        alt="people"
      />
      <p>
        "${testimonial.message}"
      </p>
      <h3>- ${testimonial.name}</h3>
      <p class="rate">
        Rating : <i class="fa-solid fa-star"></i> ${testimonial.rating}/5
      </p>
    </div>`;
  });

  document.querySelector(".testimonial-card").innerHTML =
    listedTestimonial.join("");
};

const filterRating = async (rating) => {
  const response = await getTestimonials(
    "https://api.npoint.io/58435cef2dd335cd93a6"
  );

  const filteredTestimonial = response.filter(
    (testimonial) => testimonial.rating === rating
  );

  if (!filteredTestimonial.length) {
    return (document.querySelector(".testimonial-card").innerHTML =
      "<h1>Sorry, We Don't Have Testimonial with this rating 🙁😭</h1>");
  }

  const listedTestimonial = filteredTestimonial.map((testimonial) => {
    return `
    <div class="card">
      <img
        src="${testimonial.image}"
        alt="people"
      />
      <p>
        "${testimonial.message}"
      </p>
      <h3>- ${testimonial.name}</h3>
      <p class="rate">
        Rating : <i class="fa-solid fa-star"></i> ${testimonial.rating}/5
      </p>
    </div>`;
  });
  document.querySelector(".testimonial-card").innerHTML =
    listedTestimonial.join("");
};

allTestimonial();
