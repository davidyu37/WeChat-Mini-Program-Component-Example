// components/NewComponent/NewComponent.js
import MyBehavior from "../../behaviors/MyBehavior";

Component({
  /**
   * Component properties
   */
  properties: {
    dataFromParent: {
      type: String,
      value: ""
    }
  },
  options: {
    multipleSlots: true
  },

  /**
   * Component initial data
   */
  data: {
    localData: ""
  },
  behaviors: [MyBehavior],
  /**
   * Listen to this.data changes
   */
  observers: {
    'dataFromParent': function (field) {
      // field is the new value of dataFromParent
      if(field !== this.data.localData) {
        console.log('new data', field)
        // Data changed, do something here
      }

      this.setData({
        localData: field
      })
    },
  },
  /**
   * Component life cycle
   */
  lifetimes: {
    created() {
      // When component is initialized
      console.log("new component created", new Date().getMilliseconds());
      console.log(this.data);
    },
    attached() {
      // When component is attached to parent and this.setData is available
      console.log("new component attached", new Date().getMilliseconds());
      console.log(this.data);
    },
    ready() {
      // When component is rendered
      console.log("new component ready", new Date().getMilliseconds());
      console.log(this.data);
    },
    moved() {
      console.log("new component moved", new Date().getMilliseconds());
    },
    detached() {
      // When page is removed on page stack
      console.log("new component detached", new Date().getMilliseconds());
    },
    error(e) {
      console.log("new component error", e);
    }
  },

  /**
   * Component methods
   */
  methods: {
    triggerParent() {
      this.triggerEvent("parentmethod", { dataForParent: "hello" });
    }
  }
});
