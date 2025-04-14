export interface BankInfo {
    name: string;
    code: string;
}

const bankDatabase: Record<string, BankInfo> = {
    "603799": { name: "بانک ملی", code: "Melli" },
    "589210": { name: "بانک سپه", code: "Sepah" },
    "627648": { name: "بانک توسعه صادرات", code: "ToseeSaderat" },
    "627961": { name: "بانک صنعت و معدن", code: "SanatOMadan" },
    "603770": { name: "بانک کشاورزی", code: "Keshavarzi" },
    "628023": { name: "بانک مسکن", code: "Maskan" },
    "627760": { name: "پست بانک", code: "PostBank" },
    "502908": { name: "بانک توسعه تعاون", code: "ToseeTaavon" },
    "627412": { name: "بانک اقتصاد نوین", code: "EghtesadNovin" },
    "622106": { name: "بانک پارسیان", code: "Parsian" },
    "502229": { name: "بانک پاسارگاد", code: "Pasargad" },
    "639347": { name: "بانک سینا", code: "Sina" },
    "627488": { name: "بانک کارآفرین", code: "Karafarin" },
    "621986": { name: "بانک سامان", code: "Saman" },
    "639607": { name: "بانک سرمایه", code: "Sarmaye" },
    "636214": { name: "بانک آینده", code: "Ayandeh" },
    "502806": { name: "بانک شهر", code: "Shahr" },
    "505416": { name: "بانک گردشگری", code: "Gardeshgari" },
    "636795": { name: "بانک مرکزی", code: "Markazi" },
    "505785": { name: "بانک ایران زمین", code: "IranZamin" },
};

export function detectBankByCardNumber(cardNumber: string): BankInfo | null {
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');
    const bankIdentifier = cleanedCardNumber.substring(0, 6);
    return bankDatabase[bankIdentifier] || null;
}
