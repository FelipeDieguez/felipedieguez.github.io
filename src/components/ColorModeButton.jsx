import { useState } from 'react'
import styles from "./ColorModeButton.module.css"

import sun from '../assets/images/sun.png'
import moon from '../assets/images/moon.png'

function ColorModeButton( { t } ) {
  const [colorMode, setColorMode] = useState('light')

  const handleChangeColorMode = () => {
    const currentColorMode = document.querySelector("body").getAttribute('data-theme')
    const newMode = currentColorMode === 'light' ? 'dark' : 'light'
    document.querySelector("body").setAttribute('data-theme', newMode)
    setColorMode(newMode)
  }

  return (
    <div className={styles.colorMode}>
      <span className={styles.colorModeText}>{t("color-mode")}</span>
      <button className={styles.colorModeButton} onClick={handleChangeColorMode}>
        <img
          src={colorMode === 'light' ? moon : sun}
          alt={colorMode}
          className={styles.colorModeImage}
        />
      </button>
    </div>
  )
}

export default ColorModeButton
