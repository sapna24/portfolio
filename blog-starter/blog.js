class BlogEntry {
  constructor(name, blogText) {
    this.name = name;
    this.blogText = blogText;
  }
}

function addEntryToBlog() {
  //Create new blog entry
  var authorName = document.getElementById("blogEntryName").value;
  var blogText = document.getElementById("blogEntryText").value;
  var blogEntry = new BlogEntry(authorName, blogText);

  //Add the new entry, name and date to the blog
  createBlogEntryElement(blogEntry);
  createFooterElement(blogEntry);

  //Clear the inputs
  document.getElementById("blogEntryName").value = "";
  document.getElementById("blogEntryText").value = "";
}

function createBlogEntryElement(blogEntry) {
  //Create a new element and add the blog text to it
  var blogEntryDiv = document.createElement("div");
  blogEntryDiv.className = "blogEntry";
  blogEntryDiv.innerText = blogEntry.blogText;

  //Append that element to blogDetails
  var blogDetails = document.getElementById("blogDetails");
  blogDetails.appendChild(blogEntryDiv);
}

function createFooterElement(blogEntry) {
  var blogFooter = document.createElement("div");
  blogFooter.className = "blogDate";
  blogFooter.innerText = "by " + blogEntry.name + " on " + Date();

  var blogDetails = document.getElementById("blogDetails");
  blogDetails.appendChild(blogFooter);
}
