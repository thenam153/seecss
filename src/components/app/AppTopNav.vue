<template>

    <div class="top-area">
        <div class="item">
                <div class="item-icon"  @click="appConfig.currentFocus.moveUp(); appConfig.currentFocus.getLayer().batchDraw();">
                <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                    <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                </svg>
                </div>
                <div class="item-icon option"  @click="appConfig.currentFocus.moveDown(); appConfig.currentFocus.getLayer().batchDraw();">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div class="item-icon option"  @click="duplicateObject()">
                <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                    <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                </svg>
                </div>
                <div class="item-icon option"  @click="removeObject()">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
             
        </div>
        <div class="item">
                 <div class="item-icon ">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div class="item-icon option"  @click="rotationLeft()">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <!-- <input v-if="appConfig.currentFocus" type="number" step="1" v-model="rotation" style="max-width: 4em; padding: .5em; border: 1px solid rgba(0,0,0,0.54); border-radius: .25em;"> -->
                <div class="item-icon option"  @click="rotationRight()">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div v-if="appConfig.currentFocus">
                    <div>
                        <div class="item-icon">
                            <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                                <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                            </svg>
                        </div>
                        <div>
                            <input class="inputSmall" placeholder="100%" type="text" v-model="opacity">
                        </div>
                    </div>
                </div>
        </div>
        <div class="item">
                 <div class="item-icon ">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div class="item-icon option"  @click="renameProject">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div class="item-icon option"  @click="openProject">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div class="item-icon option"  @click="saveProject">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div class="item-icon option"  @click="closeProject">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
                <div class="item-icon option"  @click="exportProject">
                    <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
                        <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
                    </svg>
                </div>
        </div>
       
            
        
    </div>
</template>

<script>
import Vue from 'vue'
import { Shape } from 'konva'
import { removeAllTransformer, setCurrentFocusedObject } from '../../services/utils'
export default {
    name: 'TopNav',
    props: {
        appConfig: Object
    },
    created() {
        this.dialog = Vue.dialog
    },
    methods: {
        removeObject() {
            const _layer = this.appConfig.currentFocus.getLayer()
            this.appConfig.currentFocus.remove()
            this.appConfig.currentFocus = null
            _layer.batchDraw()
            removeAllTransformer(this.appConfig.stage)
        },
        duplicateObject() {
            const _layer = this.appConfig.currentFocus.getLayer()
            const _object  = this.appConfig.currentFocus.toObject()
            _object.attrs.x = 0
            _object.attrs.y = 0
            _object.attrs.name += "(Copy)"
            
            if(_object.className == 'Image') {
                this.appConfig.listLayer.currentLayer.addImage(_object.src, _object.attrs)
            }else {
                this.appConfig.listLayer.currentLayer.addObject(_object.className, _object.attrs)
            }
        },
        shouldDisableMoveUp() {
            if(!this.appConfig.currentFocus) return true
            if(this.appConfig.listLayer.currentLayer == this.appConfig.listLayer.backgroundLayer) {
                const _shapes = this.appConfig.listLayer.currentLayer.getShapes()
                const _zIndex = this.appConfig.currentFocus.getZIndex()
                if(_zIndex == _shapes.length) return true
                return false
            }else {
                const _shapes = this.appConfig.listLayer.currentLayer.getShapes()
                const _zIndex = this.appConfig.currentFocus.getZIndex()
                if(_zIndex == _shapes.length - 1) return true
                return false
            }
        },
        shouldDisableMoveDown() {
            if(!this.appConfig.currentFocus) return true
            if(this.appConfig.listLayer.currentLayer == this.appConfig.listLayer.backgroundLayer) {
                if(this.appConfig.currentFocus.getZIndex() == 1) return true
                return false
            }else {
                if(this.appConfig.currentFocus.getZIndex() == 0) return true
                return false
            }
        },
        rotationLeft() {
            this.appConfig.currentFocus.rotation(this.appConfig.currentFocus.rotation() - 1)
            this.appConfig.currentFocus.getLayer().batchDraw()
        },
        rotationRight() {
            this.appConfig.currentFocus.rotation(this.appConfig.currentFocus.rotation() + 1)
            this.appConfig.currentFocus.getLayer().batchDraw()
        },
        renameProject() {
            this.dialog.alert("", {
                view: "Rename"
            })
        },
        openProject() {
            this.dialog.alert("", {
                    view: 'SelectProject'
                })
            .then((dialog) => {
            })
            .catch((res) => {
            })
        },
        closeProject() {
            
        },
        saveProject() {

        },
        exportProject() {
            this.dialog.alert("", {
                    view: 'ExportProject'
                })
            .then((dialog) => {
            })
            .catch((res) => {
            })
        }
    },
    computed: {
        rotation: {
            get() {
                return this.appConfig.currentFocus.rotation()
            },
            set(value) {
                console.log(value)
                this.appConfig.currentFocus.rotation(this.appConfig.currentFocus.rotation() + Number(value))
                this.appConfig.currentFocus.getLayer().batchDraw()
            }
        },
        opacity: {
            get() {
                return this.appConfig.currentFocus.opacity()
            },
            set(value) {
                console.log(value)
                this.appConfig.currentFocus.opacity(Number(value))
                this.appConfig.currentFocus.getLayer().batchDraw()
            }
        }
    }
}
</script>

<style lang="less">
    .top-area {
        display: flex;
        flex-direction: column;
    }
    .inputSmall {
        width: 80px !important;
    }
</style>