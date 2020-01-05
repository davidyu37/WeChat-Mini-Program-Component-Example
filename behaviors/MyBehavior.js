export default Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {
      sharedData: "hi"
    }
  },
  attached: function() {},
  methods: {
    myBehaviorMethod: function() {}
  }
});
