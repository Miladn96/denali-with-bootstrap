function loadDoc(URL, callBack) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this.responseText);
    }
  };
  xhttp.open("GET", URL, true);
  xhttp.send();
}

//* Create posts */
if(window.location.pathname == "/index.html")
{
var createElement2 = [] ,
  createElement = [],
  createTitle = [],
  createMain = [],
  createTag = [],
  createPhoto = [],
  mainSection = document.querySelector("main section:first-child");
var titlePosts = [],
  mainPosts = [],
  tagPosts = [],
  photoUrls = []; //** variables */
loadDoc("../Data/titlePost.txt", function (data) {
  titlePosts = data.split(";");
  loadDoc("../Data/tagPost.txt", function (data) {
    tagPosts = data.split(";");
    loadDoc("../Data/mainPost.txt", function (data) {
      mainPosts = data.split(";");
      loadDoc("../Data/photoUrl.txt", function (data) {
        photoUrls = data.split(";");
        // for (j in photoUrls) {
        //   photoUrls[j] = 'url("' + photoUrls[j] + '")';
        // }
        for (i in titlePosts) {
          createElement[i] = document.createElement("article");
          createElement2[i] = document.createElement("div");
          createElement[i].setAttribute("class", "article-posts");
          createElement2[i].setAttribute(
            "class",
            ""
          );
          //**Add Image to Element */
          createPhoto[i] = document.createElement("img");
          createPhoto[i].setAttribute("class", "img-posts clearfix col-lg-4");
          createPhoto[i].setAttribute("src", photoUrls[i]);
          createElement[i].appendChild(createPhoto[i]);
          //**Add Titles to Element */
          createTitle[i] = document.createElement("h3");
          createTitle[i].setAttribute("class", "title-posts");
          createTitle[i].innerHTML = titlePosts[i];
          createElement2[i].appendChild(createTitle[i]);
          //**Add Tags to Element */
          createTag[i] = document.createElement("h6");
          createTag[i].setAttribute("class", "tag-posts");
          createTag[i].innerHTML = tagPosts[i];
          createElement2[i].appendChild(createTag[i]);
          //**Add Titles to Element */
          createMain[i] = document.createElement("p");
          createMain[i].setAttribute("class", "main-posts");
          createMain[i].innerHTML =
            mainPosts[i] + "...<a href='#'> Read More</a>";
          createElement2[i].appendChild(createMain[i]);

          // //** Add element to page */
          createElement[i].appendChild(createElement2[i]);
          mainSection.appendChild(createElement[i]);
        }
      });
    });
  });
});
}
