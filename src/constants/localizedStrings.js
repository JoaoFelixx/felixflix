import LocalizedStrings from 'react-localization';
//import english from './en'
import portuguese from './pt'

const localizedStrings = new LocalizedStrings({
	pt: portuguese,
	//en: english,
})

const [userLang] = (navigator.language || navigator.userLanguage).split("-");

export {
	userLang,
	localizedStrings,
}