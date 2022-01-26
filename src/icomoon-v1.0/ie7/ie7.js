/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ic-mobie-pay': '&#xe96a;',
		'ic-account': '&#xe900;',
		'ic-money': '&#xe901;',
		'ic-plane': '&#xe902;',
		'ic-qa': '&#xe903;',
		'ic-qr-code': '&#xe904;',
		'ic-transaction': '&#xe905;',
		'ic-bank': '&#xe906;',
		'ic-currency': '&#xe907;',
		'ic-hand': '&#xe908;',
		'ic-mobile-banking': '&#xe909;',
		'ic-smartphone': '&#xe90a;',
		'ic-tax': '&#xe90b;',
		'ic-admin': '&#xe96b;',
		'ic-app': '&#xe96c;',
		'ic-arrow-down-a': '&#xe96d;',
		'ic-arrow-left-a': '&#xe96e;',
		'ic-arrow-right-a': '&#xe96f;',
		'ic-arrow-up-a': '&#xe970;',
		'ic-atm': '&#xe971;',
		'ic-bank1': '&#xe972;',
		'ic-bottom-left-arrow': '&#xe973;',
		'ic-bottom-right-arrow': '&#xe974;',
		'ic-chevron-down': '&#xe975;',
		'ic-chevron-left': '&#xe976;',
		'ic-chevron-right': '&#xe977;',
		'ic-chevron-up': '&#xe978;',
		'ic-email': '&#xe979;',
		'ic-faq': '&#xe97a;',
		'ic-fax': '&#xe97b;',
		'ic-health-insurance': '&#xe97c;',
		'ic-human-resource': '&#xe97d;',
		'ic-loan': '&#xe97e;',
		'ic-marketing': '&#xe97f;',
		'ic-microfinance': '&#xe980;',
		'ic-mobile-banking1': '&#xe981;',
		'ic-non-financial': '&#xe982;',
		'ic-online-payment': '&#xe983;',
		'ic-other-services': '&#xe984;',
		'ic-phone': '&#xe985;',
		'ic-qr-payment': '&#xe986;',
		'ic-remittance': '&#xe987;',
		'ic-saving-deposit': '&#xe988;',
		'ic-security-settings': '&#xe989;',
		'ic-send-money': '&#xe98a;',
		'ic-sms-banking': '&#xe98b;',
		'ic-top-left-arrow': '&#xe98c;',
		'ic-top-right-arrow': '&#xe98d;',
		'ic-topup': '&#xe98e;',
		'ic-view-account': '&#xe98f;',
		'ic-add': '&#xe90c;',
		'ic-alert': '&#xe90d;',
		'ic-arrow-down': '&#xe90e;',
		'ic-arrow-left': '&#xe90f;',
		'ic-arrow-pointer': '&#xe910;',
		'ic-arrow-right': '&#xe911;',
		'ic-arrow-up': '&#xe912;',
		'ic-attach': '&#xe913;',
		'ic-bag': '&#xe914;',
		'ic-behance': '&#xe915;',
		'ic-bell': '&#xe916;',
		'ic-book': '&#xe917;',
		'ic-bookmark': '&#xe918;',
		'ic-box-2': '&#xe919;',
		'ic-boxline-arrow-down': '&#xe91a;',
		'ic-boxline-arrow-up': '&#xe91b;',
		'ic-briefcase': '&#xe91c;',
		'ic-calendar': '&#xe91d;',
		'ic-calendar-event': '&#xe91e;',
		'ic-call': '&#xe91f;',
		'ic-cart': '&#xe920;',
		'ic-center-meeting': '&#xe921;',
		'ic-chat': '&#xe922;',
		'ic-checkmark': '&#xe923;',
		'ic-clock': '&#xe924;',
		'ic-close': '&#xe925;',
		'ic-credit-card': '&#xe926;',
		'ic-customer-rating': '&#xe927;',
		'ic-delete': '&#xe928;',
		'ic-diamond': '&#xe929;',
		'ic-document-edit': '&#xe92a;',
		'ic-download': '&#xe92b;',
		'ic-dribbble': '&#xe92c;',
		'ic-edit': '&#xe92d;',
		'ic-equalizer': '&#xe92e;',
		'ic-error': '&#xe92f;',
		'ic-excel': '&#xe930;',
		'ic-facebook': '&#xe931;',
		'ic-filter': '&#xe932;',
		'ic-filter-2': '&#xe933;',
		'ic-folder-closed': '&#xe934;',
		'ic-folder-opened': '&#xe935;',
		'ic-globe': '&#xe936;',
		'ic-graph': '&#xe937;',
		'ic-hand-pointer': '&#xe938;',
		'ic-heart': '&#xe939;',
		'ic-heart-line': '&#xe93a;',
		'ic-hidden': '&#xe93b;',
		'ic-home': '&#xe93c;',
		'ic-image': '&#xe93d;',
		'ic-info': '&#xe93e;',
		'ic-instagram': '&#xe93f;',
		'ic-issue-ticket': '&#xe940;',
		'ic-language': '&#xe941;',
		'ic-leaf': '&#xe942;',
		'ic-line-arrow-right': '&#xe943;',
		'ic-linked-in': '&#xe944;',
		'ic-loading': '&#xe945;',
		'ic-location': '&#xe946;',
		'ic-lock': '&#xe947;',
		'ic-login': '&#xe948;',
		'ic-logout': '&#xe949;',
		'ic-mail': '&#xe94a;',
		'ic-menu': '&#xe94b;',
		'ic-meter': '&#xe94c;',
		'ic-minus': '&#xe94d;',
		'ic-more': '&#xe94e;',
		'ic-newspaper': '&#xe94f;',
		'ic-question': '&#xe950;',
		'ic-question-2': '&#xe951;',
		'ic-refresh': '&#xe952;',
		'ic-repair': '&#xe953;',
		'ic-restrict': '&#xe954;',
		'ic-sad-face': '&#xe955;',
		'ic-save': '&#xe956;',
		'ic-search': '&#xe957;',
		'ic-settings': '&#xe958;',
		'ic-smiley': '&#xe959;',
		'ic-sms-credit': '&#xe95a;',
		'ic-sort': '&#xe95b;',
		'ic-sort-arrow': '&#xe95c;',
		'ic-star': '&#xe95d;',
		'ic-test': '&#xe95e;',
		'ic-top-up-request': '&#xe95f;',
		'ic-triangle-down': '&#xe960;',
		'ic-triangle-left': '&#xe961;',
		'ic-triangle-right': '&#xe962;',
		'ic-triangle-up': '&#xe963;',
		'ic-twitter': '&#xe964;',
		'ic-upload': '&#xe965;',
		'ic-user': '&#xe966;',
		'ic-visible': '&#xe967;',
		'ic-windows': '&#xe968;',
		'ic-play': '&#xe969;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ic-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
