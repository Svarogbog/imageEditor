<template>
  <div class="imageEditorApp">
    <image-editor ref="tuiImageEditor"
                  :include-ui="useDefaultUI"
                  :options="options"
    />
  </div>
</template>
<script>

// To use the basic UI, the svg files for the icons is required.
import 'tui-image-editor/dist/svg/icon-a.svg'
import 'tui-image-editor/dist/svg/icon-b.svg'
import 'tui-image-editor/dist/svg/icon-c.svg'
import 'tui-image-editor/dist/svg/icon-d.svg'

// Load Style Code
import 'tui-image-editor/dist/tui-image-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'

import { ImageEditor } from '@toast-ui/vue-image-editor'
// import { ImageEditor } from 'tui-image-editor'

export default {
  components: {
    ImageEditor
  },
  data () {
    return {
      useDefaultUI: true,
      options: {
        includeUI: {
          initMenu: 'filter'
        },
        cssMaxWidth: 700,
        cssMaxHeight: 500
      }
    }
  },
  mounted () {
    // document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-download-btn').addEventListener('click', saveImage)
    document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-download-btn').innerText = 'Save Image'
    document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-download-btn').addEventListener('click', this.rot)
  },
  methods: {
    rot () {
      console.log('Is rot btn')
    }
  }
}
</script>

<style>
.imageEditorApp {
  width: 850px;
  height: 650px;
}

.tui-image-editor-container .tui-image-editor-header-logo,
.tui-image-editor-container .tui-image-editor-controls-logo  {
  display: none !important;
}
.tui-image-editor-container .tui-image-editor-help-menu.top {
  -webkit-transform: translateX(-70%);
  transform: translateX(-70%);
}
</style>
