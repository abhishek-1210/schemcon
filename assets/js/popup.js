window.addEventListener('load', () => {
    console.log('hello world');
    const button = document.getElementsByClassName('hide')[0];
    if (button) {
        button?.click();
    }
});