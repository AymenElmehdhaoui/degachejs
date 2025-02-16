# 🌴 degache.js

Tunisian Developer's Essential Utility Library

## Why degache.js? 🤔

Tired of rewriting validation code for Tunisian CIN, phone numbers, and tax IDs? `degache.js` is your go-to utility library for all things Tunisian! Named after the beautiful oasis city of Degache, this library brings the same refreshing relief to your development workflow.

## 🚀 Features

### CIN (Carte d'Identité Nationale) 🆔
```typescript
import { validateCIN } from 'degachejs';

// Simple validation
const isValid = validateCIN('12345678'); // true
```

### Phone Numbers 📱
- ✅ Support for all Tunisian carriers (Ooredoo, Orange, Tunisie Telecom)
- 🔄 International format conversion
- 📞 Smart formatting with country code

```typescript
import { formatPhoneNumber } from 'degachejs';

const formatted = formatPhoneNumber('20123456');
console.log(formatted); // +216 20 123 456
```

### Tax ID (Matricule Fiscal) 💼
```typescript
import { validateTaxID } from 'degachejs';

const isValid = validateTaxID('1234567A/P/M/000');
```

### Currency Formatting 💰
```typescript
import { formatCurrency } from 'degachejs';

const amount = formatCurrency(1234.56);
console.log(amount); // 1.234,560 دينار تونسي
```

### Postal Codes 📮
```typescript
import { validatePostalCode } from 'degachejs';

const isValid = validatePostalCode('1000'); // true for Tunis
```

## 📦 Installation

```bash
npm install degachejs
# or
yarn add degachejs
# or
pnpm add degachejs
```

## 🛠️ Usage

```typescript
import { 
  validateCIN,
  formatPhoneNumber,
  validateTaxID,
  formatCurrency
} from 'degachejs';

// Validate CIN
const isCINValid = validateCIN('12345678');

// Format phone number
const phoneNumber = formatPhoneNumber('20123456');

// Validate Tax ID
const isTaxIDValid = validateTaxID('1234567A/P/M/000');

// Format currency
const price = formatCurrency(1234.56, { symbol: true });
```

## 🌟 Features Coming Soon

- 📍 Governorate and delegation utilities
- 🏢 Company registry validation
- 🏦 Bank account validation (RIB)
- 📅 Hijri calendar conversion
- 🗺️ Postal code to region mapping

## 🤝 Contributing

We welcome contributions from the Tunisian developer community! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🧪 Test cases
- 💡 Feature suggestions

Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

## 🔒 Security

All validation and formatting functions are designed with security in mind, following best practices for handling sensitive data.

## 📄 License

degache.js is MIT licensed. See the [LICENSE](LICENSE) file for details.

## 🏆 Production Ready

- ✅ Comprehensive input validation
- ⚡ Optimized performance
- 🧪 High test coverage
- 📚 Detailed documentation
- 🔒 Type-safe APIs

---

Built with ❤️ for the Tunisian developer community 🇹🇳 
