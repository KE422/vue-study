<template>
  <div id="video">
    VIDEO TEST
    <br /> ** check console
  </div>
</template>

<script>
let txt = `
  <Period start="PT444806.040S" id="123586" duration="PT15.000S">
          <EventStream timescale="90000" schemeIdUri="urn:scte:scte35:2013:xml">
            <Event duration="1350000">
              <scte35:SpliceInfoSection protocolVersion="0" ptsAdjustment="180832" tier="4095">
                <scte35:SpliceInsert spliceEventId="4026531855" spliceEventCancelIndicator="false" outOfNetworkIndicator="true" spliceImmediateFlag="false" uniqueProgramId="1" availNum="1" availsExpected="1">
                  <scte35:Program><scte35:SpliceTime ptsTime="5672624400"/></scte35:Program>
                  <scte35:BreakDuration autoReturn="true" duration="1350000"/>
                </scte35:SpliceInsert>
              </scte35:SpliceInfoSection>
            </Event>`;

let parser = new DOMParser();
const parsedMPD = parser.parseFromString(txt, "text/xml");

export default {
  name: "VideoPage",
  data() {
    return {
    };
  },
  created() {
    this.printSample();
  },
  methods: {
    printSample() {
      console.log(parsedMPD.getElementsByTagName('EventStream')[0].children);
    }
  }  
};
</script>

<style>
#video {
  padding: 20px 0;
}
</style>
