import { useState } from 'react'
import styles from "./LanguageButton.module.css"

function LanguageButton({ t, changeLanguage }) {
  const [flagUrl, setFlagUrl] = useState("https://flagcdn.com/w320/br.png");

  const handleChangeLanguage = (selectedLanguage) => {
    changeLanguage(selectedLanguage)
    if (selectedLanguage === 'pt') {
      setFlagUrl("https://flagcdn.com/w320/br.png");
    } else {
      setFlagUrl("https://flagcdn.com/w320/us.png");
    }
  }

  return (
    <div className={styles.language}>
      <input type="checkbox" id="toggle" className={styles.languageToggle}/>
      <label htmlFor="toggle" className={styles.languageSelected} style={{ backgroundImage: `url(${flagUrl})` }}>
        {t("change-language")}
      </label>
      <ul className={styles.languageList}>
        <li className={styles.languageItem} onClick={() => handleChangeLanguage('pt')}>
          <label for="toggle" className={styles.br} onclick="event.stopPropagation();">
            {t("language-pt")}
          </label>
        </li>
        <li className={styles.languageItem} onClick={() => handleChangeLanguage('en')}>
          <label for="toggle" className={styles.en} onclick="event.stopPropagation();">
            {t("language-en")}
          </label>
        </li>
      </ul>
    </div>
  )
}

export default LanguageButton
