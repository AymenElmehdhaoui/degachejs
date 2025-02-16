import { VALID_PREFIXES } from "../constants/phone-number";
import { POSTAL_CODES_MAP } from "../constants/regions";

/**
 * Regular expressions for validation
 */
const REGEX = {
  CIN: /^\d{8}$/,
  PHONE: /^[2-9]\d{7}$/,
  POSTAL_CODE: /^\d{4}$/,
  TAX_ID: /^\d{7}[A-Z]\/[A-Z]\/[A-Z]\/\d{3}$/,
  RIB: /^\d{20}$/,
} as const;

/**
 * Validates a Tunisian CIN (Carte d'Identité Nationale)
 * @param cin - The CIN number to validate
 * @returns boolean indicating if the CIN is valid
 */
export const validateCIN = (cin: string): boolean => {
  return REGEX.CIN.test(cin);
};

/**
 * Validates a Tunisian phone number
 * @param phoneNumber - The phone number to validate
 * @returns boolean indicating if the phone number is valid
 */
export const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (!REGEX.PHONE.test(phoneNumber)) return false;
  return VALID_PREFIXES.includes(phoneNumber[0]);
};

/**
 * Validates a Tunisian postal code
 * @param postalCode - The postal code to validate
 * @returns boolean indicating if the postal code is valid
 */
export const validatePostalCode = (postalCode: string): boolean => {
  if (!REGEX.POSTAL_CODE.test(postalCode)) return false;
  return postalCode in POSTAL_CODES_MAP;
};

/**
 * Validates a Tunisian company tax ID (Matricule Fiscal)
 * @param taxId - The tax ID to validate
 * @returns boolean indicating if the tax ID is valid
 */
export const validateTaxID = (taxId: string): boolean => {
  return REGEX.TAX_ID.test(taxId);
};

/**
 * Validates a Tunisian bank account RIB
 * @param rib - The RIB number to validate
 * @returns boolean indicating if the RIB is valid
 */
export const validateRIB = (rib: string): boolean => {
  if (!REGEX.RIB.test(rib)) return false;

  // Implement RIB validation algorithm
  // TODO: Add proper RIB validation logic
  return true;
};
