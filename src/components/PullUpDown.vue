<template>

    <scroller  lock-x scrollbar-y :use-pulldown="usePullDown" :use-pullup="usePullUp" @on-pulldown-loading="pullDownFresh"
              @on-pullup-loading="pullUpLoad" ref="scroller"
              :value="status"  @on-scroll="onScroll">

        <div id="vux-scroller-content-index">
            <slot></slot>
        </div>

        <!--pulldown slot-->
        <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down">
            <span v-show="status.pulldownStatus === 'default'"></span>
            <span class="pulldown-arrow pull-arrow"
                  v-show="status.pulldownStatus === 'down' || status.pulldownStatus === 'up'"
                  :class="{'rotate': status.pulldownStatus === 'up'}">↓</span>
            <span v-show="status.pulldownStatus === 'loading'"
                  :class="{'rotate': status.pulldownStatus === 'up'}"><spinner type="ios-small"></spinner></span>
        </div>

        <!--pullup slot-->
        <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up">
            <span v-show="status.pullupStatus === 'default'"></span>
            <span class="pullup-arrow pull-arrow"
                  v-show="status.pullupStatus === 'default' || status.pullupStatus === 'up' || status.pullupStatus === 'down'"
                  :class="{'rotate': status.pullupStatus === 'down'}">↑</span>
            <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
            <span v-show="status.pullupStatus === 'none'">暂无数据</span>
        </div>

    </scroller>

</template>

<script>

    import {Scroller, Spinner, LoadMore} from 'vux'

    export default {
        name: 'pull-up-down',
        props: {
            status: {
                type:Object,
                default(){
                    return {
                        pulldownStatus: 'default',
                        pullupStatus: 'default'
                    }
                }
            },
            usePullDown:{
                type:Boolean,
                default:true
            },
            usePullUp:{
                type:Boolean,
                default:true
            }
        },
        components: {
            Scroller,
            Spinner,
            LoadMore,
        },
        methods: {
            pullDownFresh() {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$refs.scroller.donePulldown()
                        this.status.pulldownStatus = 'default'
                    }, 2000)
                })
            },

            pullUpLoad() {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$refs.scroller.donePullup()
                        this.status.pullupStatus = 'default'
                    }, 2000)
                })
            },

            onScroll(msg){
                this.$emit('on-scroll',msg);
            }
        }
    }
</script>

<style>
    body, html {
        background-color: #e7ecf0;
    }

    div[id^="vux-scroller-content-"] {
        background-color: #ffffff;
        padding: 8px;
    }

    .xs-plugin-pulldown-down {
        position: absolute;
        width: 100%;
        height: 40px;
        line-height: 40px;
        top: -53px;
        text-align: center;
        background-color: transparent;
    }

    .xs-plugin-pullup-up {
        position: absolute;
        width: 100%;
        height: 40px;
        bottom: -53px;
        text-align: center;
        background-color: transparent;
    }

    .pull-arrow {
        line-height: 40px;
        height: 40px;
    }
</style>