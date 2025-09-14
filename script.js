 function toggleDetails(element) {
      element.classList.toggle("active-expand");
    }

    
    function revealOnScroll() {
      let items = document.querySelectorAll(".timeline-item");
      let windowHeight = window.innerHeight;
      items.forEach(item => {
        let position = item.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
          item.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    // Search function
    document.getElementById("searchInput").addEventListener("keyup", function() {
      let filter = this.value.toLowerCase();
      let items = document.querySelectorAll(".timeline-item");

      items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });


    function checkAnswer(ans) {
    let result = document.getElementById("quizResult");
    if(ans === "b"){
      result.textContent = "✅ Correct! Tim Berners-Lee invented the World Wide Web in 1989.";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Oops! Try again.";
      result.style.color = "red";
    }
  }