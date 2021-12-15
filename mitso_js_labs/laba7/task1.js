function removeHtmlTags(source) {
    return source.replace(/<[^>]*>/g, '');
}

console.log(removeHtmlTags('<div>test</div>')); // --> test
console.log(removeHtmlTags('<a href="#">go to <b>start</b> page</a>')); // --> go to start page
