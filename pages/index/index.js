const app = getApp();

Page({
  data: {
    dynamicData: "hi"
  },
  parentMethod({detail}) {
    console.log("parentMethod");
    const { dataForParent } = detail;
    this.setData({
      dynamicData: dataForParent
    })
  },
  onInputChange({detail: {value}}) {
    this.setData({
      dynamicData: value
    })
  }
});
