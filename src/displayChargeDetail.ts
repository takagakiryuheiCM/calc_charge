import { calcChange } from "./calcChange"

type TDisplayChargeDetail = {
  price: number;
  paid: number
}

// 最終的なアウトプットを出力する関数
export const displayChargeDetail = ({ price, paid }: TDisplayChargeDetail) => {
  const change = paid - price
  const changeResultArray: Change[] = calcChange(change)

  // 最終的なアウトプット
  console.log(`お釣りは、${change}円です`)
  changeResultArray.forEach((value: Change) => {
    console.log(value.displayDetail())
  })
}