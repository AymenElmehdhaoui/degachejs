import { COUNTRY_CODE } from "../constants";

/**
 * Formats a Tunisian phone number
 * @param phoneNumber - The phone number to format
 * @returns formatted phone number with country code and proper spacing
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  if (cleaned.length !== 8) return phoneNumber;
  return `${COUNTRY_CODE} ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
};
