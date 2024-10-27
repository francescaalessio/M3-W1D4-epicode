function toggleMobile() {
    const articleContainer = document.querySelector('.article-container');
    const article = document.querySelector('.blog-article');
    const image = document.querySelector('.image-article');
    const textContent = document.querySelector('.text-content');
    const button = document.querySelector('.mobile-version');
    
    if (article.style.flexDirection === 'column') {
        // Versione Desktop
        articleContainer.style.width = '70%';
        article.style.flexDirection = 'row';
        image.style.width = '47%';
        textContent.style.width = 'auto';
        button.textContent = 'Mobile';
    } else {
        // Versione Mobile
        articleContainer.style.width = '90%';
        article.style.flexDirection = 'column';
        image.style.width = '100%';
        textContent.style.width = '100%';
        button.textContent = 'Web';
    }
}