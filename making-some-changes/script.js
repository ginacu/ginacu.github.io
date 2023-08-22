// Making active nav link indicator
// give us the current location of the page like index.html etc
const activePage = window.location.pathname;

// thinks function is says "we have this nav link and we gonna lop through 'em n then we gonna check the link href in it"
const navLinks = document.querySelectorAll('nav ul a').forEach(link => {
    // if the link href is include the same name in activePage then we add the class 'active'
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})

// Work with the json for projects data, this is using jquery
$.getJSON('JSON/projects.json', function(data) {
    let projects = data.projects;
    $.each(projects, function(i, data) {
        $('#project-list').append('<div class="col-lg-6 mb-3"><a href="img/project/'+ data.img +'"data-lightbox="myproject" data-title="'+ data.caption +'"><img src="img/project/'+ data.img +'" alt="'+ data.caption +'" class="img-fluid"><br><br><a id="button2" href="'+ data.linkProject +'">Open This Project ></a><a id="button2" href="'+ data.linkDocumentation +'">Open Documentation ></a></a></div>')
    });
});