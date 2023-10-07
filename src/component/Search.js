// // getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;
// inputBox.onclick = () => {
//   //show autocomplete box
//   searchWrapper.classList.add("active");

//   if (suggestions.length > 0) {
//     showSuggestions(suggestions.slice(0, 3));
//   } else {
//     showSuggestions([]);
//   }
// };

// function showSuggestions(list) {
//   //clear innerHTML for autocomplete box
//   suggBox.innerHTML = "";

//   //add li tags to autocomplete box
//   for (let i = 0; i < list.length; i++) {
//     const li = document.createElement("li");
//     li.style.display = "block";
//     suggBox.appendChild(li);
//     li.textContent = list[i];
//   }
// }

// inputBox.onkeyup = (e) => {
//   let userData = e.target.value; //user enetered data
//   let emptyArray = [];
//   if (userData) {
//     icon.onclick = () => {
//       webLink = `https://www.google.com/search?q=${userData}`;
//       linkTag.setAttribute("href", webLink);
//       linkTag.click();
//     };
//     emptyArray = suggestions.filter((data) => {
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     });
//     emptyArray = emptyArray.map((data) => {
//       return (data = `<li>${data}</li>`);
//     });
//     searchWrapper.classList.add("active"); //show autocomplete box
//     showSuggestions(emptyArray);
//     let allList = suggBox.querySelectorAll("li");
//     for (let i = 0; i < allList.length; i++) {
//       allList[i].setAttribute("onclick", "select(this)");
//     }
//   } else {
//     searchWrapper.classList.remove("active"); //hide autocomplete box
//   }
// };

// function select(element) {
//   let selectData = element.textContent;
//   inputBox.value = selectData;
//   icon.onclick = () => {
//     webLink = `https://www.google.com/search?q=${selectData}`;
//     linkTag.setAttribute("href", webLink);
//     linkTag.click();
//   };
//   searchWrapper.classList.remove("active");
// }

// function showSuggestions(list) {
//   let listData;
//   if (!list.length) {
//     userValue = inputBox.value;
//     listData = `<li>${userValue}</li>`;
//   } else {
//     listData = list.join("");
//   }
//   suggBox.innerHTML = listData;
// }
