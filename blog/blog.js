class BlogEntry {
  constructor(text, name) {
    this.text = text;
    this.name = name;
  }

  getBlogText() {
    return this.text;
  }

  getBlogName() {
    return this.name;
  }

  getBlogFooter() {
    return '- by ' + this.name + ' on ' + Date();
  }
}

function addEntryToBlog() {
  var blogEntryTextarea = document.getElementById('blogEntryText');
  var blogNameTextarea = document.getElementById('blogEntryName')
  var blogEntry = new BlogEntry(blogEntryTextarea.value, blogNameTextarea.value);

  createBlogEntryElement(blogEntry);
  createFooterElement(blogEntry);

  blogEntryTextarea.value = '';
  blogNameTextarea.value = '';
}

function createBlogEntryElement(blogEntry) {
  var blogEntryElement = document.createElement('div');
  blogEntryElement.className = 'blogEntry'
  blogEntryElement.innerText = blogEntry.getBlogText();
  document.getElementById('blogDetails').appendChild(blogEntryElement);
}

function createFooterElement(blogEntry) {
  var blogDateElement = document.createElement('div');
  blogDateElement.className = 'blogDate'
  blogDateElement.innerText = blogEntry.getBlogFooter();
  document.getElementById('blogDetails').appendChild(blogDateElement);
}
