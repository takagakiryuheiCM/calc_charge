// 課題：https://www.notion.so/2f74984a49554d5f8c985d132b9ea9d5

type TChange = {
  value: number;
  count: number;
}

type TDisplayChargeDetail = {
  price: number;
  paid: number
}

// お釣りクラスを定義
class Change {
  value: number;
  count: number;
  type: "硬貨" | "紙幣"

  constructor(
    { value, count }: TChange
  ) {
    this.value = value;
    this.count = count

    if ([1, 10, 50, 100, 500].includes(this.value)) {
      this.type = "硬貨";
    } else if ([1000, 2000, 5000, 10000].includes(this.value)) {
      this.type = "紙幣";
    } else {
      throw new Error("不正な値です");
    }
  }

  displayDetail() {
    return `${this.value}円${this.type}が${this.count}枚`
  }
}


// ビジネスロジック
const calcChange = (change: number): Change[] => {

  // お釣りからそれぞれのお金が何枚かを洗い出して、お釣りクラスのオブジェクトの配列を返却する

}



// 最終的なアウトプットを出力する関数
const displayChargeDetail = ({ price, paid }: TDisplayChargeDetail) => {
  const change = paid - price
  const changeResultArray: Change[] = calcChange(change)

  // 最終的なアウトプット
  console.log(`お釣りは、${change}円です`)
  changeResultArray.forEach((value: Change) => {
    console.log(value.displayDetail())
  })
}

// 実行
displayChargeDetail({ price: 345, paid: 500 })
// => 
// お釣りは、155円です。
// 100円硬貨 1枚
// 50円硬貨 1枚
// 5円硬貨 1枚