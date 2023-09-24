

// for some reason this doesn't work
export function makeKeySafe(name: string): string {
    // Emoji patterns
    const emojiPattern = new RegExp(
        "["
        + "\u{1F600}-\u{1F64F}"  // Emoticons
        + "\u{1F300}-\u{1F5FF}"  // Symbols & Pictographs
        + "\u{1F680}-\u{1F6FF}"  // Transport & Map Symbols
        + "\u{1F700}-\u{1F77F}"  // Alchemical Symbols
        + "\u{1F780}-\u{1F7FF}"  // Geometric Shapes Extended
        + "\u{1F800}-\u{1F8FF}"  // Supplemental Arrows-C
        + "\u{1F900}-\u{1F9FF}"  // Supplemental Symbols and Pictographs
        + "\u{1FA00}-\u{1FA6F}"  // Chess Symbols
        + "\u{1FA70}-\u{1FAFF}"  // Symbols and Pictographs Extended-A
        + "\u{2702}-\u{27B0}"    // Dingbats
        + "\u{24C2}-\u{1F251}"
        + "]+", "gu"
    );

    // Remove emojis
    name = name.replace(emojiPattern, '');

    const removeChars = "!\"#$%&'()*“+,./:;<=>?@[\\]^_`{|}~";  // All punctuation except "-"

    const interim = name.toLowerCase().trim()
        .replace(/ /g, "-")
        .replace(/\//g, "-")
        .replace(/---/g, "-");

    return Array.from(interim).filter(c => !removeChars.includes(c)).join('');
}

export function getIdFromUrl(url_name: string): number {
    const id = url_name.split('-').slice(-1)[0]
    return parseInt(id)
}
export function log(message: string): void {
    console.log(message)
}