/**
 * Regular expression for CIN validation
 */
const CIN_REGEX = /^\d{8}$/;

/**
 * Validates a Tunisian CIN (Carte d'Identité Nationale)
 * @param cin - The CIN number to validate
 * @returns boolean indicating if the CIN is valid
 */
export const validateCIN = (cin: string): boolean => {
  return CIN_REGEX.test(cin);
};
