const FR  = {
    "yes": "oui",
    "no": "non",
    "save": "sauver",
}

const EN  = {
    "yes": "yes",
    "no": "no",
    "save": "save",
}

const dictionaries = {
    "fr": FR,
    "en": EN,
}


const translate = (locale, key) => {
    return dictionaries[locale][key] || `missing translation [${locale}] : ${key}`
}


export default translate