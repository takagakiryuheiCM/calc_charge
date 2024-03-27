// 課題：https://www.notion.so/2f74984a49554d5f8c985d132b9ea9d5


type ChargeDetailType = { value: number, count: number }

// 大元お釣りクラスを定義
abstract class Change {
  change: number
  constructor(
    change: number
  ) {
    this.change = change
  }

  abstract get denominations(): { value: number, isCoin: boolean }[];

  getCalcDetail(): ChargeDetailType[] {
    //　ここにビジネスロジックを書いて、お釣りの内訳を取得する
    // ex) お釣りが155円の時
    // return [{value: 5, count: 1}, {value: 50, count: 1}, {value: 100, count: 1} ]
  }

  getMoneyTypeString(value: number): string {
    const denomination = this.denominations.find((d) => d.value === value);
    return denomination ? (denomination.isCoin ? "硬貨" : "紙幣") : "";
  }
}

// 日本円のお釣りクラス。
class yenChange extends Change {
  constructor(change: number) {
    super(change)
  }

  get denominations() {
    return [
      { value: 1, isCoin: true },
      { value: 5, isCoin: true },
      { value: 10, isCoin: true },
      { value: 50, isCoin: true },
      { value: 100, isCoin: true },
      { value: 500, isCoin: true },
      { value: 1000, isCoin: false },
      { value: 2000, isCoin: false },
      { value: 5000, isCoin: false },
      { value: 10000, isCoin: false },
    ]
  }
}

// ドルのお釣りクラス。
class dollarChange extends Change {
  constructor(change: number) {
    super(change)
  }

  get denominations() {
    return [
      { value: 0.01, isCoin: true },
      { value: 0.05, isCoin: true },
      // ...
    ];
  }
}


const displayDetail = (result: ChargeDetailType[], change: Change) => {
  result.forEach((r) => {
    const moneyType = change.getMoneyTypeString(r.value);
    const outputString = `${r.value} ${moneyType}: ${r.count}`;
    console.log(outputString);
  });
};

const displayChangeDetail = (price: number, paid: number, changeClass: typeof Change) => {
  const change = paid - price;
  if (change < 0) throw new Error("Paid amount is insufficient");

  console.log(`お釣り: ${change}`);
  if (change > 0) {
    // switch文で硬貨お釣りクラスを分類する
    const changeInstance = new 
    const calcDetail = changeInstance.getCalcDetail();
    displayDetail(calcDetail, changeInstance);
  }
};

// 実行例
displayChangeDetail(345, 500, JapaneseChange);
displayChangeDetail(3.45, 5.00, AmericanChange);
// => 
// お釣りは、155円です。
// 100円が硬貨1枚
// 50円が硬貨1枚
// 5円硬貨が1枚