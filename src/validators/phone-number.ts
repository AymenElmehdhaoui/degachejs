import { CARRIERS, VALID_PREFIXES } from "../constants";

/**
 * Regular expressions for phone number validation
 */
const REGEX = {
  PHONE: /^[2-9]\d{7}$/,
  INTERNATIONAL: /^\+216[2-9]\d{7}$/,
} as const;

/**
 * Validates a Tunisian phone number
 * @param phoneNumber - The phone number to validate
 * @returns boolean indicating if the phone number is valid
 */
export const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (!phoneNumber) return false;

  // Remove international prefix if present
  const normalizedNumber = phoneNumber.replace(/^\+216/, "");

  if (!REGEX.PHONE.test(normalizedNumber)) return false;
  return VALID_PREFIXES.includes(normalizedNumber[0]);
};

/**
 * Gets carrier information from a phone number
 * @param phoneNumber - The phone number to check
 * @returns carrier information or null if invalid
 */
export const getCarrierInfo = (phoneNumber: string) => {
  if (!validatePhoneNumber(phoneNumber)) return null;

  const normalizedNumber = phoneNumber.replace(/^\+216/, "");
  const prefix = normalizedNumber[0];

  return (
    Object.entries(CARRIERS).find(([_, carrier]) =>
      carrier.prefixes.includes(prefix as never),
    )?.[1] || null
  );
};
