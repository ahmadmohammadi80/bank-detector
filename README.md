# Let's create a full README.md content in a single file and save it.
readme_content = """
# bank-detector

A lightweight TypeScript utility to detect Iranian banks based on card numbers.

## ✨ Features

- Detect bank name and code from Iranian card number
- TypeScript typings included
- Simple and fast

## 📦 Installation

```bash
npm install bank-detector
Usage
import { detectBankByCardNumber } from "bank-detector";

const bank = detectBankByCardNumber("6037-9912-3456-7890");

if (bank) {
  console.log(`Bank: ${bank.name} (${bank.code})`);
} else {
  console.log("Bank not detected!");
}
License
MIT
Developed by Ahmad Mohammadi
 نحوه Build و استفاده لوکال
وارد پوشه پکیج شو:
cd bank-detector
نصب وابستگی‌ها:
npm install
build پروژه:
npm run build
استفاده در پروژه دیگر:
npm link
# سپس در پروژه مقصد:
npm link bank-detector