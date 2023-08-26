// Work with the json for projects data, this is using jquery

function showAllProjects() {
    jQuery.fn.reverse = [].reverse;
    $.getJSON('JSON/projects.json', function(data) {
        let projects = data.projects;
        $.each(projects.reverse(), function(i, data) {
            $('#project-list').append('<div class="col-md-6 mb-3" id="project-img"><a href="img/project/'+ data.img +'"data-lightbox="myproject" data-title="'+ data.caption +'"><img src="img/project/'+ data.img +'" alt="'+ data.caption +'" class="img-fluid"><br><br><a id="button2" href="'+ data.linkProject +'"><span>Open This Project ></span></a><a id="button2" href="'+ data.linkDocumentation +'" target="_blank"><span>Open Documentation ></span></a></a></div>')
        });
    });
}

showAllProjects();

// Create sort of category of the project
$('#projects .nav-link').on('click', function() {
    $('#projects .nav-link').removeClass('active-sort');
    $(this).addClass('active-sort');

    let category = $(this).html();
    if (category == 'All') {
        showAllProjects();
        location.reload();
    }
    
    
    $.getJSON('JSON/projects.json', function(data) {
        let projects = data.projects;
        let content = '';
        jQuery.fn.reverse = [].reverse;
        $.each(projects.reverse(), function(i, data) {
            if (data.category == category.toLowerCase()) {
                content += '<div class="col-md-6 mb-3 d-flex align-items-center" id="project-img"><a href="img/project/'+ data.img +'"data-lightbox="myproject" data-title="'+ data.caption +'"><img src="img/project/'+ data.img +'" alt="'+ data.caption +'" class="img-fluid"></div><div class="text-center"><a id="button2" href="'+ data.linkProject +'" target="_blank"><span>Open This Project ></span></a><a id="button2" href="'+ data.linkDocumentation +'" target="_blank"><span>Open Documentation ></span></a></div>';
            }
        });

        $('#project-list').html(content);
    });
});