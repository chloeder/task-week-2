class Testimonial {
  constructor(image, name, message, rating) {
    this.image = image;
    this.name = name;
    this.message = message;
    this.rating = rating;
  }

  html() {
    throw new Error("You should use one of the sub classes");
  }
}

class AuthorTestimonial extends Testimonial {
  html() {
    return `
    <div class="card">
      <img
        src="${this.image}"
        alt="people"
      />
      <p>
        "${this.message}"
      </p>
      <h3>- ${this.name}</h3>
      <p class="rate">
        Rating : <i class="fa-solid fa-star"></i> ${this.rating}/5
      </p>
    </div>`;
  }
}

class CompanyTestimonial extends Testimonial {
  html() {
    return `
    <div class="card">
      <img
        src="${this.image}"
        alt="people"
      />
      <p>
        "${this.message}"
      </p>
      <h3>- ${this.name} Company</h3>
      <p class="rate">
        Rating : <i class="fa-solid fa-star"></i> ${this.rating}/5
      </p>
    </div>`;
  }
}

const testimonial1 = new AuthorTestimonial(
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Angelina",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur delectus, sunt nemo dolorum voluptates corporis ab reiciendis repellat ex.",
  1
);
const testimonial2 = new AuthorTestimonial(
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Jolie",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur delectus, sunt nemo dolorum voluptates corporis ab reiciendis repellat ex.",
  2
);

const testimonial3 = new CompanyTestimonial(
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Mantap",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur delectus, sunt nemo dolorum voluptates corporis ab reiciendis repellat ex.",
  3
);
const testimonial4 = new CompanyTestimonial(
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Keren",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur delectus, sunt nemo dolorum voluptates corporis ab reiciendis repellat ex.",
  3
);
const testimonial5 = new CompanyTestimonial(
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Gokil",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur delectus, sunt nemo dolorum voluptates corporis ab reiciendis repellat ex.",
  5
);

const listTestimonial = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
];

let testimonialHtml = "";

for (const testimonial of listTestimonial) {
  testimonialHtml += testimonial.html();
}

document.querySelector(".testimonial-card").innerHTML = testimonialHtml;

const allTestimonial = () => {
  document.querySelector(".testimonial-card").innerHTML = testimonialHtml;
};

const filterRating = (rating) => {
  const filteredTestimonial = listTestimonial.filter(
    (testimonial) => testimonial.rating === rating
  );

  if (!filteredTestimonial.length) {
    return (document.querySelector(".testimonial-card").innerHTML =
      "<h1>Sorry, We Don't Have Testimonial with this rating 🙁😭</h1>");
  }

  const listedTestimonial = filteredTestimonial.map((testimonial) => {
    return testimonial.html();
  });
  document.querySelector(".testimonial-card").innerHTML = listedTestimonial;
};
