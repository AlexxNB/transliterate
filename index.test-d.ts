import {expectType} from 'tsd';
import transliterate = require('.');

expectType<string>(transliterate('Я люблю единорогов'));
expectType<string>(
	transliterate('Я люблю единорогов', {customReplacements: [['единорогов', '🦄']]})
);
