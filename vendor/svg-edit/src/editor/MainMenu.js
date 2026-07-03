/* globals seAlert */
import SvgCanvas from '@svgedit/svgcanvas'
import { isChrome } from '@svgedit/svgcanvas/common/browser.js'
import { pikazoScenes } from './pikazoScenes.js'

const { $id, $click, convertUnit, isValidUnit } = SvgCanvas
const homePage = 'https://github.com/chillingway/Pikazo'

/**
 *
 */
class MainMenu {
  /**
   * @param {PlainObject} editor svgedit handler
   */
  constructor (editor) {
    this.editor = editor
    /**
     * @type {Integer}
     */
    this.editor.exportWindowCt = 0
  }

  /**
   *
   * @returns {void}
   */
  hideDocProperties () {
    const $imgDialog = $id('se-img-prop')
    $imgDialog.setAttribute('dialog', 'close')
    $imgDialog.setAttribute('save', this.editor.configObj.pref('img_save'))
    this.editor.docprops = false
  }

  /**
   *
   * @returns {void}
   */
  hidePreferences () {
    const $editDialog = $id('se-edit-prefs')
    $editDialog.setAttribute('dialog', 'close')
    this.editor.configObj.preferences = false
  }

  /**
   * @param {Event} e
   * @returns {boolean} Whether there were problems saving the document properties
   */
  saveDocProperties (e) {
    // set title
    const { title, w, h, save } = e.detail
    // set document title
    this.editor.svgCanvas.setDocumentTitle(title)

    if (w !== 'fit' && !isValidUnit('width', w)) {
      seAlert(this.editor.i18next.t('notification.invalidAttrValGiven'))
      return false
    }
    if (h !== 'fit' && !isValidUnit('height', h)) {
      seAlert(this.editor.i18next.t('notification.invalidAttrValGiven'))
      return false
    }
    if (!this.editor.svgCanvas.setResolution(w, h)) {
      seAlert(this.editor.i18next.t('notification.noContentToFitTo'))
      return false
    }
    // Set image save option
    this.editor.configObj.pref('img_save', save)
    this.editor.updateCanvas()
    this.hideDocProperties()
    return true
  }

  /**
   * Save user preferences based on current values in the UI.
   * @param {Event} e
   * @function module:SVGthis.savePreferences
   * @returns {Promise<void>}
   */
  async savePreferences (e) {
    const {
      lang,
      bgcolor,
      bgurl,
      gridsnappingon,
      gridsnappingstep,
      gridcolor,
      showrulers,
      baseunit
    } = e.detail
    // Set background
    this.editor.setBackground(bgcolor, bgurl)

    // set language
    if (lang && lang !== this.editor.configObj.pref('lang')) {
      this.editor.configObj.pref('lang', lang)
      seAlert('Changing the language needs reload')
    }

    // set grid setting
    this.editor.configObj.curConfig.gridSnapping = gridsnappingon
    this.editor.configObj.curConfig.snappingStep = gridsnappingstep
    this.editor.configObj.curConfig.gridColor = gridcolor
    this.editor.configObj.curConfig.showRulers = showrulers
    if (this.editor.configObj.curConfig.showRulers) {
      this.editor.rulers.updateRulers()
    }
    this.editor.configObj.curConfig.baseUnit = baseunit
    this.editor.svgCanvas.setConfig(this.editor.configObj.curConfig)
    this.editor.updateCanvas()
    this.hidePreferences()
  }

  /**
   *
   * @param e
   * @returns {Promise<void>} Resolves to `undefined`
   */
  async clickExport (e) {
    if (e?.detail?.trigger !== 'ok' || e?.detail?.imgType === undefined) {
      return
    }
    const imgType = e?.detail?.imgType
    const quality = e?.detail?.quality ? e?.detail?.quality / 100 : 1
    // Open placeholder window (prevents popup)
    let exportWindowName

    /**
     *
     * @returns {void}
     */
    const openExportWindow = () => {
      if (this.editor.configObj.curConfig.exportWindowType === 'new') {
        this.editor.exportWindowCt++
      }
      this.editor.exportWindowName =
        this.editor.configObj.curConfig.canvasName + this.editor.exportWindowCt
    }
    const chrome = isChrome()
    if (imgType === 'PDF') {
      if (!this.editor.customExportPDF && !chrome) {
        openExportWindow()
      }
      this.editor.svgCanvas.exportPDF(exportWindowName)
    } else {
      if (!this.editor.customExportImage) {
        openExportWindow()
      }
      /* const results = */ await this.editor.svgCanvas.rasterExport(
        imgType,
        quality,
        this.editor.exportWindowName
      )
    }
  }

  /**
   *
   * @returns {void}
   */
  showDocProperties () {
    if (this.editor.docprops) {
      return
    }
    this.editor.docprops = true
    const $imgDialog = $id('se-img-prop')

    // update resolution option with actual resolution
    const resolution = this.editor.svgCanvas.getResolution()
    if (this.editor.configObj.curConfig.baseUnit !== 'px') {
      resolution.w =
        convertUnit(resolution.w) + this.editor.configObj.curConfig.baseUnit
      resolution.h =
        convertUnit(resolution.h) + this.editor.configObj.curConfig.baseUnit
    }
    $imgDialog.setAttribute('save', this.editor.configObj.pref('img_save'))
    $imgDialog.setAttribute('width', resolution.w)
    $imgDialog.setAttribute('height', resolution.h)
    $imgDialog.setAttribute('title', this.editor.svgCanvas.getDocumentTitle())
    $imgDialog.setAttribute('dialog', 'open')
  }

  /**
   *
   * @returns {void}
   */
  showPreferences () {
    if (this.editor.configObj.preferences) {
      return
    }
    this.editor.configObj.preferences = true
    const $editDialog = $id('se-edit-prefs')
    // Update background color with current one
    const canvasBg = this.editor.configObj.curPrefs.bkgd_color
    const url = this.editor.configObj.pref('bkgd_url')
    if (url) {
      $editDialog.setAttribute('bgurl', url)
    }
    $editDialog.setAttribute(
      'gridsnappingon',
      this.editor.configObj.curConfig.gridSnapping
    )
    $editDialog.setAttribute(
      'gridsnappingstep',
      this.editor.configObj.curConfig.snappingStep
    )
    $editDialog.setAttribute(
      'gridcolor',
      this.editor.configObj.curConfig.gridColor
    )
    $editDialog.setAttribute('canvasbg', canvasBg)
    $editDialog.setAttribute('dialog', 'open')
  }

  /**
   *
   * @returns {void}
   */
  openHomePage () {
    window.open(homePage, '_blank')
  }

  /**
   * @param {'house'|'bridge'|'garden'} sceneName
   * @returns {void}
   */
  loadPikazoScene (sceneName) {
    const scene = pikazoScenes[sceneName]
    if (!scene) return
    this.editor.loadSvgString(scene)
    this.editor.svgCanvas.setMode('select')
  }

  /**
   * @returns {void}
   */
  calculateMaterialAreas () {
    const svg = this.editor.svgCanvas.getSvgContent()
    const materialAreas = new Map()
    for (const elem of svg.querySelectorAll('[data-material][data-area-m2]')) {
      const material = elem.getAttribute('data-material')
      const area = Number.parseFloat(elem.getAttribute('data-area-m2'))
      if (!material || Number.isNaN(area)) continue
      materialAreas.set(material, (materialAreas.get(material) || 0) + area)
    }

    if (materialAreas.size === 0) {
      this.calculateApproximateShapeAreas(svg, materialAreas)
    }

    if (materialAreas.size === 0) {
      seAlert('No measurable template materials found.')
      return
    }

    const rows = [...materialAreas.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([material, area]) => `${material}: ${area.toFixed(2)} m2`)
    const total = [...materialAreas.values()].reduce((sum, area) => sum + area, 0)
    seAlert(`Material square meters:\n${rows.join('\n')}\nTotal: ${total.toFixed(2)} m2`)
  }

  /**
   * @param {SVGElement} svg
   * @param {Map<string, number>} materialAreas
   * @returns {void}
   */
  calculateApproximateShapeAreas (svg, materialAreas) {
    const scale = 0.01
    for (const rect of svg.querySelectorAll('rect')) {
      const width = Number.parseFloat(rect.getAttribute('width'))
      const height = Number.parseFloat(rect.getAttribute('height'))
      if (Number.isNaN(width) || Number.isNaN(height)) continue
      materialAreas.set('Unspecified rectangles', (materialAreas.get('Unspecified rectangles') || 0) + width * height * scale * scale)
    }
    for (const circle of svg.querySelectorAll('circle')) {
      const r = Number.parseFloat(circle.getAttribute('r'))
      if (Number.isNaN(r)) continue
      materialAreas.set('Unspecified circles', (materialAreas.get('Unspecified circles') || 0) + Math.PI * r * r * scale * scale)
    }
    for (const ellipse of svg.querySelectorAll('ellipse')) {
      const rx = Number.parseFloat(ellipse.getAttribute('rx'))
      const ry = Number.parseFloat(ellipse.getAttribute('ry'))
      if (Number.isNaN(rx) || Number.isNaN(ry)) continue
      materialAreas.set('Unspecified ellipses', (materialAreas.get('Unspecified ellipses') || 0) + Math.PI * rx * ry * scale * scale)
    }
  }

  /**
   * @type {module}
   */
  init () {
    // add Top panel
    const template = document.createElement('template')
    template.innerHTML = `
    <div id="pikazo_header_tools" class="pikazo-header-tools">
        <se-menu id="main_button" label="Pikazo" src="logo.svg" alt="logo">
            <se-menu-item id="tool_export" label="tools.export_img" src="export.svg"></se-menu-item>
            <se-menu-item id="tool_docprops" label="tools.docprops" shortcut="shift+D" src="docprop.svg"></se-menu-item>
            <se-menu-item id="tool_editor_prefs" label="config.editor_prefs" src="editPref.svg"></se-menu-item>
            <se-menu-item id="tool_editor_homepage" label="tools.editor_homepage" src="logo.svg"></se-menu-item>
        </se-menu>
        <se-menu id="template_button" label="Use template" src="shapelib.svg" alt="templates" style="min-width: 122px;">
            <se-menu-item id="tool_create_house" label="tools.create_house" src="new.svg"></se-menu-item>
            <se-menu-item id="tool_create_bridge" label="tools.create_bridge" src="new.svg"></se-menu-item>
            <se-menu-item id="tool_create_garden_plan" label="tools.create_garden_plan" src="new.svg"></se-menu-item>
        </se-menu>
        <button id="tool_calculate_materials" class="pikazo-header-button" type="button">Calculate m2</button>
    </div>`
    this.editor.$svgEditor.append(template.content.cloneNode(true))

    // register action to main menu entries
    /**
     * Associate all button actions as well as non-button keyboard shortcuts.
     */
    $click($id('tool_export'), function () {
      document
        .getElementById('se-export-dialog')
        .setAttribute('dialog', 'open')
    })
    $id('tool_create_house').addEventListener(
      'click',
      () => this.loadPikazoScene('house')
    )
    $id('tool_create_bridge').addEventListener(
      'click',
      () => this.loadPikazoScene('bridge')
    )
    $id('tool_create_garden_plan').addEventListener(
      'click',
      () => this.loadPikazoScene('garden')
    )
    $id('tool_calculate_materials').addEventListener(
      'click',
      this.calculateMaterialAreas.bind(this)
    )
    $id('se-export-dialog').addEventListener(
      'change',
      this.clickExport.bind(this)
    )
    $id('tool_docprops').addEventListener(
      'click',
      this.showDocProperties.bind(this)
    )
    $id('tool_editor_prefs').addEventListener(
      'click',
      this.showPreferences.bind(this)
    )
    $id('tool_editor_homepage').addEventListener(
      'click',
      this.openHomePage.bind(this)
    )
    $id('se-img-prop').addEventListener(
      'change',
      function (e) {
        if (e.detail.dialog === 'closed') {
          this.hideDocProperties()
        } else {
          this.saveDocProperties(e)
        }
      }.bind(this)
    )
    $id('se-edit-prefs').addEventListener(
      'change',
      function (e) {
        if (e.detail.dialog === 'closed') {
          this.hidePreferences()
        } else {
          this.savePreferences(e)
        }
      }.bind(this)
    )
  }
}

export default MainMenu
