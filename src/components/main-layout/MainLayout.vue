<template>
  <div class="app-area">
    <div id="main-layout">
      <div id="layout-area"></div>
    </div>
    <div class="setting">
    <Control v-if="appConfig != null" :app-config="appConfig" />
    <div></div>
    <TopNav v-if="appConfig != null" :app-config="appConfig"/>

    <div class="tab">
      <div class="item-icon" style="padding: 0 15px 20px 0;margin: 0;">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
      <div class="active">Configuration</div>
      <!-- <div>Properties</div> -->
      <!-- <div></div> -->
    </div>
      <AppProperties v-if="appConfig != null && appConfig.currentFocus != null" :shape="appConfig.currentFocus"></AppProperties>
    </div>
  </div>
</template>

<script>
import { Control, TopNav } from "../index";
import { AppConfig } from "../../models/app-config";
import AppProperties from "../app/AppProperties";

export default {
  name: "MainLayout",
  components: {
    Control,
    TopNav,
    AppProperties,
  },
  data() {
    return {
      stage: null,
      mainConfigs: {
        width: 1000,
        height: 1000,
      },
      appConfig: null,
      defaultConfig: {
        attrs: {
            width: 1440,
            height: 1080,
            color: "rgb(255, 255, 255)"
        },
        children: {
          attrs: {
            backgroundLayer: {
              attrs: {
                name: "Background",
                bgRect: {
                  draggable: false,
                },
                children: [],
              },
            },
          },
          children: [],
          className: "LayerList",
        },
        className: "AppConfig",
      },
    };
  },
  mounted() {
    this.appConfig = new AppConfig({
      projectInfo: JSON.stringify(this.defaultConfig),
    });
    this.appConfig.initStage("layout-area");
  },
  methods: {
    getIdContainer: function () {
      return "layout-area";
    },
  },
};
</script>

<style lang="less">
.app-area {
  display: flex;
  height: 100%;
  flex: 1;
  width: 100%;
  position: relative;
}
.tab {
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  &>*:last-child{
    width: 100%;
    pointer-events: none;
  }
  &>div {
    cursor: pointer;
    border-bottom: 2px solid #ddd ;
    padding: 0 15px 20px 15px;
    color: #969696;
    &:hover {
      border-bottom: 2px solid #0573c7;
    color: #000;

    }
  }
  .active {
    border-bottom: 2px solid #0573c7;
    color: #000;
  }
}
.app-area #main-layout {
  flex-grow: 7;
  height: 100%;
}
#layout-area {
  height: calc(100%);
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJElEQVQYV2NkYGDwZWBgOMvAwGAMoxkZGBikkAVAEiBBClQCAC9jCyH2BRU4AAAAAElFTkSuQmCC)
    repeat;
}
.setting {
  min-width: 200px;
  z-index: 1;
  background: #fff;
  padding: 20px;
  overflow: overlay;
}
</style>