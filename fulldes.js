document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const description = this.previousElementSibling;
            description.classList.toggle('full-view');
            if (description.classList.contains('full-view')) {
                this.innerText = 'Read Less';
            } else {
                this.innerText = 'Read More';
            }
        });
    });
});