<template>
<div>
    <div class="item">
        <div class="item-icon">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <Input type="number" :label="'W'" input-id="width" :get-value="getValue" :set-value="setValue"/>
        <Input type="number" :label="'H'" input-id="height" :get-value="getValue" :set-value="setValue"/>
    </div>
    <div class="item">
        <div class="item-icon">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="focusObject(appConfig.listLayer.currentLayer.addObject('Rect'))">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="focusObject(appConfig.listLayer.currentLayer.addObject('Ellipse'))">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="focusObject(appConfig.listLayer.currentLayer.addObject('Circle'))">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="focusObject(appConfig.listLayer.currentLayer.addObject('Wedge'))">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="focusObject(appConfig.listLayer.currentLayer.addObject('Star'))">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="focusObject(appConfig.listLayer.currentLayer.addObject('RegularPolygon'))">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
    </div>
      <div class="item">
        <div class="item-icon">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="drawLine()">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="drawPolygon()" v-if="appConfig && appConfig.mode != 'draw-polygon'">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
       <div class="item-icon option" @click="stopDrawPolygon()" v-if="appConfig && appConfig.mode == 'draw-polygon'">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
    </div>
    <div class="item">
        <div class="item-icon">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="loadImage()">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div class="item-icon option" @click="loadImageFromCollection()">
            <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
            </svg>
        </div>
        <div style="width: 100%">
            <div style="width: 100%">
                <div></div>
                <div style="width: 100%">
                    <input class="inputUpload" type="text" v-model="urlImage">
                </div>
                <div class="item-icon" @click="loadImage(urlImage)">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
            </div>
        </div>
        
        
        
    </div>
    <div class="item" style="border: none;">
        <div class="item-icon">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        <div style="width: 100%">
            <div style="width: 100%">
                <div></div>
                <div style="width: 100%">
                    <input class="inputUpload" type="text" v-model="newText">
                </div>
                <div class="item-icon" @click="focusObject(appConfig.listLayer.currentLayer.addObject('Text', {text: newText || 'Default Text'}));newText=''">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
            </div>
        </div>
        
        
        
    </div>
    <!-- Phần này k hiểu -->
    <div style="display: none;">
        <div>
                    layer
                    <input type="text" v-model="newLayerName">
                    <button @click="appConfig.listLayer.addLayer(newLayerName);newLayerName=''">Add layer</button>
                    <div v-for="(layer, key) in _getListOfLayers" :key="layer.attrs.name + key">
                        {{layer.attrs.name}} {{key}} <button>set current layer</button>
                    </div>
                    <div>
                        Background Layer
                        <button>Set current layer</button>
                    </div>
                </div>
                <div>
                    multiple Select
                    <button @click="multipleSelect">Select</button>
                </div>
        
    </div>
    <!-- Hết phần không hiểu -->
</div>
    
    
</template>

<script>
import { Shape } from 'konva'
import { setCurrentFocusedObject } from '../../services/utils'
import AppProperties from './AppProperties'
import Input from '../misc-component/input'

export default {
    name: 'Control',
    components: {
        AppProperties,
        Input
    },
    props: {
        appConfig: {
            type: Object,
            default() {
                return {
                        mainConfig: {
                            width: 0,
                            height: 0
                        },
                        listLayer: []
                    }
            }
        }
    },
    data() {
        return {
            urlImage: null,
            newLayerName: null,
            newText: ""
        }
    },
    methods: {
        getLayerDataSource() {
            return this.appConfig.listLayer.layerList
        },
        removeLayer(layer) {
            this.appConfig.listLayer.removeLayer
            this.appConfig.currentFocus = null
        },
        isShape(object) {
            return object instanceof Shape
        },
        onCurrentLayerChange(newLayer = null) {
            setCurrentFocusedObject(this.appConfig, newLayer)
        },
        focusObject(object) {
            setCurrentFocusedObject(this.appConfig, object)
        },
        drawLine() {
            const _newLine = this.appConfig.listLayer.currentLayer.addObject( "Line", {
                    strokeEnabled: true,
                    stroke: "black",
                    fillEnabled: false,
                    strokeWidth: 5,
                    width: 1,
                    height: 1
                }
            );
            this.appConfig.mode = "draw-line";
            setCurrentFocusedObject(this.appConfig, _newLine);
        },
        drawPolygon() {
            const _newLine = this.appConfig.listLayer.currentLayer.addObject("Line", {
                    strokeEnabled: true,
                    stroke: "black",
                    fillEnabled: true,
                    strokeWidth: 10,
                    closed: true,
                    width: 1,
                    height: 1,
                    draggable: false
                }
            );
            this.appConfig.mode = "draw-polygon";
            setCurrentFocusedObject(this.appConfig, _newLine);
        },
        stopDrawPolygon() {
            this.appConfig.mode = null;
            this.appConfig.stage.draggable(true);
            this.appConfig.stage.container().style.cursor = "auto";
            const _currObj = this.appConfig.currentFocus;
            if(_currObj && _currObj.getClassName() == "Line") {
                _currObj.points(_currObj.tempPoints);
                _currObj.draggable(true);
                this.focusObject(_currObj);
            }
        },
        loadImage(imageURL, imageName) {
            let self = this;
            if(imageURL) {
                console.log(imageURL)
                this.appConfig.listLayer.currentLayer.addImage(imageURL, {name: imageName});
            } else {
            const inputEle = document.createElement("input");
            inputEle.type = "file";
            inputEle.accept = "image/*";

            inputEle.addEventListener('change', () => {
                const file = inputEle.files[0];
                if (!file) return;
                if (!self.appConfig.listLayer.currentLayer) return;
                
                const payload = new FormData();
                payload.append("file", file, file.name);
                
                // this.simApiService.createImage(payload)
                // .subscribe(res => {
                //     this.appConfig.listLayer.currentLayer.addImage(res.content.path, { name: res.content.name});
                //     this.spinner.hide();
                // })
                self.appConfig.listLayer.currentLayer.addImage("data:image/jpeg;base64,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", { name: "boy"});
            })
            inputEle.click();
            }
        },
        layerMoveDown(event) {
            const layer = event.item.data;
            if(layer) {
                const _length = this.appConfig.listLayer.layerList.length;
                const _newZIndex = _length - event.currentIndex;
                layer.setZIndex(_newZIndex);
                this.appConfig.stage.batchDraw();
            }
        },
        // loadImageFromCollection() {
        //     const dialogRef = this.dialog.open(SimLoadImageDialogComponent);
        //     dialogRef.afterClosed().subscribe((imgs) => {
        //     if(imgs && imgs.length) {
        //         imgs.forEach(img => (this.loadImage(img.path, img.name)));
        //     }
        //     })
        // },
        getListOfLayers() {
            // if(!this.appConfig) return []
            return this.appConfig.listLayer.layerList.sort((la, lb) => -la.getZIndex() + lb.getZIndex());
        },
        multipleSelect() {
            this.appConfig.mode = "multiple-select"
        },
        getValue(param, inputId) {
            return this.appConfig.mainConfig[param || inputId]
        },
        setValue(param, value, inputId) {
            // if(value < 1080) return
            this.appConfig.mainConfig[param || inputId] = value
            this.appConfig.updateMainConfig()
        }
    },
    computed: {
        _getListOfLayers() {
            // if(!this.appConfig) return []
            return this.appConfig.listLayer.layerList
        }
    }
}
</script>
<style lang="less">
.item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    margin: 0 -20px 15px -20px;
    height: 40px;
    &>div>div {
        display: flex;
        position: relative;
        &>*:nth-child(1)
        {
           position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 15px;
            margin: 0;
            opacity: 0.5;
        }
        &>*:nth-child(3)
        {
           position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            margin: 0;
            opacity: 0.5;
        }
    }
}
.item-icon {
    width: 18px;
    min-width: 18px;
    height: 18px;
    min-height: 18px;
    margin: 0 15px 0 20px;
    transition: all ease-in-out 0.2s;
    box-shadow: 0 0 0 10px #fff;
    background: #fff;
    cursor: pointer;
    &.option {
        opacity: 0.5;
        margin-left: 15px;
    }
    &:hover {
        color: #0573c7;
    opacity: 1;
    box-shadow: 0 0 0 10px #0573c715;
    background: #0573c715;
    border-radius: 1px;
    transition: all ease-in-out 0.2s;
    }
}
.inputUpload {
    padding-right: 42px !important;
    padding-left: 15px  !important;
    width: 100% !important;
}

input[type='text'], input[type='search'], input[type='password'], input[type='email'], input[type='url'], input[type='tel'], .selectize-input, .ql-container .ql-editor, select, .input-with-prefix {
    font-weight: 400;
    width: 120px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-height: 40px;
    min-height: 40px;
    padding: 11px 16px 11px 40px;
    outline: none;
    border-radius: 5px;
    -webkit-transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
    transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
    transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease;
    transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid transparent !important;
    background: transparent;
}
input:hover[type='text'], input:hover[type='search'], input:hover[type='password'], input:hover[type='email'], input:hover[type='url'], input:hover[type='tel'], .selectize-input:hover, .ql-container .ql-editor:hover, select:hover, .input-with-prefix:hover {
    background-color: #fff !important;
    border-color: #0573c7 !important;
    box-shadow: 0 0 0 4px #0573c738 !important;
}
</style>