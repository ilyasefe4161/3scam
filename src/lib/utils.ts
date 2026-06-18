export function stringToSlug(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[öÖ]/g, 'o')
    .replace(/[üÜ]/g, 'u')
    .replace(/[ıİ]/g, 'i')
    .replace(/[şŞ]/g, 's')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ğĞ]/g, 'g')
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes
}
