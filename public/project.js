


function toggleSyllabus(id) {
    const syllabus = document.getElementById(id);
    syllabus.classList.toggle("show");
  }
  
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Show confirmation message
      const resmessage = document.querySelector(".form-message");
      const formData = {
        name: name,
        email: email,
        message: message,
      };
      console.log(formData)
      axios
      .post("https://futurecompilers.onrender.com/send", formData).then((response) => {
        // resmessage.innerHTML = 'Message sent successfully!';
        console.log(response)
        showNotification('Message sent successfully!', 'success');
      })
      .catch((error) => {
        console.error(error);
        resmessage.textContent = 'Error sending message!';
      });
      // .then((response) => {
      //   console.log(response)
      //   document.getElementById('responseMessage').innerHTML = 'Message sent successfully!';
      //   // resmessage.document.innerHTML = "Message sent successfully!";
      // })
      // .catch((error) => {
      //   resmessage.innerHTML = "Error sending message!";
      // });
    });
    function showNotification(message, type) {
      const notification = document.getElementById('notification');
      notification.innerHTML = message;
      notification.className = 'notification show';
  
      // Set a timeout to hide the notification after 3 seconds
      setTimeout(() => {
          notification.className = 'notification hide';
          setTimeout(() => {
              notification.style.display = 'none'; // Hide the notification completely
          }, 500); // Wait for the fade-out transition to complete
      }, 3000); // Show for 3 seconds
  }
    
    
    
    
    //   fetch("http://localhost:3000/send", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   })
    //     .then((response) => response.text())
    //     .then((data) => {
    //       resmessage.innerText = "Message sent successfully!";
    //       document.getElementById("contact-form").reset();
    //     })
    //     .catch((error) => {
    //       resmessage.innerText = "Error sending message!";
    //     });



    // http://localhost:3000/send



































// function toggleSyllabus(id) {
// 	const syllabus = document.getElementById(id);
// 	syllabus.classList.toggle("show");
// 	window.alert("hello world");
// }
// document
// 	.getElementById("contact-form")
// 	.addEventListener("submit", function (e) {
// 		e.preventDefault();
// 		const name = document.getElementById("name").value;
// 		const email = document.getElementById("email").value;
// 		const message = document.getElementById("message").value;

// 		// Show confirmation message
// 		const resmessage = document.getElementById("responseMessage");
// 		const formData = {
// 			name: name,
// 			email: email,
// 			message: message,
// 		};
// 		fetch("http://localhost:3000/send", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(formData),
// 		})
// 			.then((response) => response.text())
// 			.then((data) => {
// 				document.getElementById("responseMessage").innerText =
// 					"Message sent successfully!";
// 				document.getElementById("contactForm").reset();
// 			})
// 			.catch((error) => {
// 				document.getElementById("responseMessage").innerText =
// 					"Error sending message!";
// 			});
// 		message.textContent =
// 			"Thank you for contacting us! We will get back to you soon.";
// 		message.style.display = 
//         "block";

// 		// Clear form fields
// 		document.getElementById("contact-form").reset();
// 	});
