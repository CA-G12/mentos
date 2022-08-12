function search(array, string, title) {
    return array.filter(e => e.title.toLowerCase().includes(string.toLowerCase().trim()))
}

// module.exports = search;