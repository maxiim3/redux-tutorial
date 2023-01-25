export function removeAccentsAndSpecialChars(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export function checkLettersInText(text, letters) {
    return text.includes(letters);
}

export function filterItems(items, letters) {
    return items.filter((t) => {
        const text = removeAccentsAndSpecialChars(t.text);
        return checkLettersInText(text, letters);
    });
}