document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { imgSrc: 'livro.png', title: 'Título do Livro2 ', author: 'Autor do Livro2 ', detailLink: 'pagina_do_livro2.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro3 ', author: 'Autor do Livro3 ', detailLink: 'pagina_do_livro3.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro4 ', author: 'Autor do Livro4 ', detailLink: 'pagina_do_livro4.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro5 ', author: 'Autor do Livro5 ', detailLink: 'pagina_do_livro5.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro6 ', author: 'Autor do Livro6 ', detailLink: 'pagina_do_livro6.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro7 ', author: 'Autor do Livro7 ', detailLink: 'pagina_do_livro7.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro8 ', author: 'Autor do Livro8 ', detailLink: 'pagina_do_livro8.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro9 ', author: 'Autor do Livro9 ', detailLink: 'pagina_do_livro9.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro10 ', author: 'Autor do Livro10 ', detailLink: 'pagina_do_livro10.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro11 ', author: 'Autor do Livro11 ', detailLink: 'pagina_do_livro11.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro12 ', author: 'Autor do Livro12', detailLink: 'pagina_do_livro12.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro13 ', author: 'Autor do Livro13 ', detailLink: 'pagina_do_livro12.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro14 ', author: 'Autor do Livro14 ', detailLink: 'pagina_do_livro14.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro15 ', author: 'Autor do Livro15 ', detailLink: 'pagina_do_livro15.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro16 ', author: 'Autor do Livro16 ', detailLink: 'pagina_do_livro16.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro17 ', author: 'Autor do Livro17 ', detailLink: 'pagina_do_livro17.html' },
        { imgSrc: 'livro.png', title: 'Título do Livro18 ', author: 'Autor do Livro18 ', detailLink: 'pagina_do_livro18.html' },
    ];  

    const section = document.querySelector('.vitrine');
    books.forEach(book => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <img src="${book.imgSrc}" alt="Capa do ${book.title}">
            <h3>${book.title}</h3>
            <h4>${book.author}</h4>
            <a href="${book.detailLink}" class="btn">Saiba Mais</a>
        `;
        section.appendChild(item);
    });
});
