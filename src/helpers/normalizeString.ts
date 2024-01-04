// non-English letters normalization

export const normalizeString = (string: string) => {
  return string.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
}
