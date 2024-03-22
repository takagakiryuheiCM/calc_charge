type TChange = {
  value: number;
  count: number;
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