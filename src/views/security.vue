<tempalte>
<div v-if="menuErr">
    <span> 菜单加载失败：没有返回任何菜单数据  </span>
</div>
<div v-else style="height: 100vh">
    <a-layout style="height: 100%">
        <a-layout-sider v-model:collapsed="collapse" class="sider">
        
        </a-layout-sider>
        <a-layout-content>
            <router-tab-content/>
        </a-layout-content>
    </a-layout>
</div>


</tempalte>
<script lang="ts" setup>
import {ref} from "vue";

const menuErr = ref<Boolean>(false);
const collapse = ref<Boolean>(false);
</script>

<style lang="less" scoped>
.sider {
    height: 100%;
    max-height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
}
</style>