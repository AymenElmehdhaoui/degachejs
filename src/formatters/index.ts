import { COUNTRY_CODE, CURRENCY } from "../constants";

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

/**
 * Formats a monetary amount in Tunisian Dinar
 * @param amount - The amount to format
 * @param options - Formatting options
 * @returns formatted amount with currency symbol
 */
export const formatCurrency = (
  amount: number,
  options: { symbol?: boolean; code?: boolean } = {},
): string => {
  const formatter = new Intl.NumberFormat("ar-TN", {
    style: "currency",
    currency: CURRENCY.CODE,
    currencyDisplay: options.code ? "code" : options.symbol ? "symbol" : "name",
  });

  return formatter.format(amount);
};

/**
 * Formats a date according to Tunisian locale
 * @param date - The date to format
 * @param options - Intl.DateTimeFormat options
 * @returns formatted date string
 */
export const formatDate = (
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string => {
  const formatter = new Intl.DateTimeFormat("ar-TN", options);
  return formatter.format(date);
};
