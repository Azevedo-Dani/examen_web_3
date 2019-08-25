import React from "react";
import withContextConsumer from "react/utils/with_context_consumer.jsx";

/**
 * Create a context and a HOC which will "inject" 2 props in enhanced components :
 * - currentLocale : a two letter code representing the current locale of the ap. e.g. : "fr", "en", ...
 * - translate(key) : a function which will translate the provided key in the current locale.
 *      e.g. if currentLocale is "fr" then `translate("yes")` might return "oui"
 * 
 *  The actual translation will be provided by services/translation.js
 * 
 */

const LocaleContext = null;
const LocaleConsumer = null;
const LocaleProvider = null;

const withLocale = withContextConsumer(LocaleConsumer);

export { LocaleConsumer, LocaleProvider, withLocale };
