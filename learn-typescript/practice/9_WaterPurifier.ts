class WaterPurifier {
  waterAmount: number;

  constructor(waterAmount: number) {
    this.waterAmount = waterAmount;
  }

  wash() {
    if (this.waterAmount > 0) {
      console.log('정수기 동작 성공');
    }
  }
}

var purifier = new WaterPurifier(30);
purifier.wash();  // 정수기 동작 성공

purifier.waterAmount = 0;  // 의도치않은 오염
purifier.wash();  // 동작 x