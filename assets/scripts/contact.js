function submitHandler() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name === "") {
    return alert("Please Enter Your Name");
  } else if (email === "") {
    return alert("Please Enter Your Email");
  } else if (phone === "") {
    return alert("Please Enter Your Phone Number");
  } else if (subject === "") {
    return alert("Please Enter Your Subject");
  } else if (message === "") {
    return alert("Please Enter Your Message");
  } else {
    alert("Message Sent Successfully, Thank You For Contacting Me");
  }

  window.location.href = `mailto:${email}?subject=${subject}&body=From ${name} - ${phone}, %0D%0A%0D%0A${message}.`;
}
