'use strict';

// O12N - Alphascape 4.0
[{
  zoneRegex: /^(Alphascape \(V4.0\)|Alphascape V4.0)$/,
  timelineFile: 'o12n.txt',
  timelineTriggers: [
    {
      id: 'O12N Knockback',
      regex: /Discharger/,
      beforeSeconds: 5,
      alertText: {
        en: 'Knockback',
      },
    },
  ],
  triggers: [
    {
      id: 'O12N Solar Ray',
      regex: / 14:(?:330F|3310):(?:Omega|Omega-M) starts using (?:Unknown_330F|Unknown_3310|Solar Ray) on (\y{Name})/,
      regexDe: / 14:(?:330F|3310):(?:Omega|Omega-M) starts using (?:Unknown_330F|Unknown_3310|Sonnenstrahl) on (\y{Name})/,
      regexFr: / 14:(?:330F|3310):(?:Oméga|Oméga-M) starts using (?:Unknown_330F|Unknown_3310|Rayon solaire) on (\y{Name})/,
      regexJa: / 14:(?:330F|3310):(?:オメガ|オメガM) starts using (?:Unknown_330F|Unknown_3310|ソーラレイ) on (\y{Name})/,
      condition: function(data, matches) {
        return data.me == matches[1] || data.role == 'healer';
      },
      suppressSeconds: 1,
      alertText: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tenkbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Tank Busters',
            de: 'Tenkbuster',
            fr: 'Tankbuster',
          };
        }
      },
      tts: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'buster',
            de: 'basta',
            fr: 'tankbuster',
          };
        }
      },
    },
    {
      id: 'O12N Optimized Blade Dance',
      regex: / 14:(?:3321|3322):(?:Omega|Omega-M) starts using (?:Unknown_3321|Unknown_3322|Optimized Blade Dance) on (\y{Name})/,
      regexDe: / 14:(?:3321|3322):(?:Omega|Omega-M) starts using (?:Unknown_3321|Unknown_3322|Omega-Schwertertanz) on (\y{Name})/,
      regexFr: / 14:(?:3321|3322):(?:Oméga|Oméga-M) starts using (?:Unknown_3321|Unknown_3322|Danse de la lame Oméga) on (\y{Name})/,
      regexJa: / 14:(?:3321|3322):(?:オメガ|オメガM) starts using (?:Unknown_3321|Unknown_3322|ブレードダンス・オメガ) on (\y{Name})/,
      condition: function(data, matches) {
        return data.me == matches[1] || data.role == 'healer';
      },
      suppressSeconds: 1,
      alertText: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tenkbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Tank Busters',
            de: 'Tenkbuster',
            fr: 'Tankbuster',
          };
        }
      },
      tts: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'buster',
            de: 'basta',
            fr: 'tankbuster',
          };
        }
      },
    },
    {
      id: 'O12N Local Resonance',
      regex: / 1A:Omega gains the effect of (?:Unknown_67E|Local Resonance) from/,
      regexDe: / 1A:Omega gains the effect of (?:Unknown_67E|Resonanzprogramm: Nah) from/,
      regexFr: / 1A:Oméga gains the effect of (?:Unknown_67E|Programme de résonance: proximité) from/,
      regexJa: / 1A:オメガ gains the effect of (?:Unknown_67E|レゾナンスプログラム：ニアー) from/,
      condition: function(data) {
        return data.role == 'tank';
      },
      alertText: {
        en: 'Move bosses apart',
      },
    },
    {
      id: 'O12N Optimized Meteor',
      regex: /1B:........:(\y{Name}):....:....:0057:0000:0000:0000:/,
      condition: function(data, matches) {
        return data.me == matches[1];
      },
      infoText: {
        en: 'Meteor on YOU',
      },
    },
    {
      id: 'O12N Stack Spread Markers',
      regex: /1B:........:(\y{Name}):....:....:008B:0000:0000:0000:/,
      alertText: function(data, matches) {
        if (data.me != matches[1])
          return;
        return {
          en: 'Get Out',
        };
      },
      infoText: function(data, matches) {
        if (data.me == matches[1])
          return;
        return {
          en: 'Stack',
        };
      },
    },
    {
      id: 'O12N Packet Filter F',
      regex: / 1A:(\y{Name}) gains the effect of (?:Unknown_67D|Packet Filter F) from/,
      regexDe: / 1A:(\y{Name}) gains the effect of (?:Unknown_67D|Sicherungssystem F) from/,
      regexFr: / 1A:(\y{Name}) gains the effect of (?:Unknown_67D|Programme protecteur F) from/,
      regexJa: / 1A:(\y{Name}) gains the effect of (?:Unknown_67D|ガードプログラムF) from/,
      condition: function(data, matches) {
        return data.me == matches[1];
      },
      infoText: {
        en: 'Attack Omega-M',
      },
    },
    {
      id: 'O12N Packet Filter M',
      regex: / 1A:(\y{Name}) gains the effect of (?:Unknown_67C|Packet Filter M) from/,
      regexDe: / 1A:(\y{Name}) gains the effect of (?:Unknown_67C|Sicherungssystem M) from/,
      regexFr: / 1A:(\y{Name}) gains the effect of (?:Unknown_67C|Programme protecteur M) from/,
      regexJa: / 1A:(\y{Name}) gains the effect of (?:Unknown_67C|ガードプログラムM) from/,
      condition: function(data, matches) {
        return data.me == matches[1];
      },
      infoText: {
        en: 'Attack Omega-F',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Engage!': 'Start!',
        'Omega': 'Omega',
        'Omega-F': 'Omega-W',
        'Omega-M': 'Omega-M',
        'Optical Unit': 'Optikmodul',

        // FIXME
        'Progress to party combat': 'Progress to party combat',
      },
      'replaceText': {
        '--targetable--': '--anvisierbar--',
        '--untargetable--': '--nich anvisierbar--',
        'Beyond Strength': 'Schildkombo G',
        'Cosmo Memory': 'Kosmospeicher',
        'Discharger': 'Entlader',
        'Efficient Bladework': 'Effiziente Klingenführung',
        'Electric Slide': 'Elektrosturz',
        'Enrage': 'Finalangriff',
        'Firewall': 'Sicherungssystem',
        'Floodlight': 'Flutlicht',
        'Ground Zero': 'Explosionszentrum',
        'Laser Shower': 'Laserschauer',
        'Optical Laser': 'Optischer Laser F',
        'Optimized Blade Dance': 'Omega-Schwertertanz',
        'Optimized Blizzard III': 'Omega-Eisga',
        'Optimized Fire III': 'Omega-Feuga',
        'Optimized Meteor': 'Omega-Meteor',
        'Optimized Passage of Arms': 'Optimierter Waffengang',
        'Optimized Sagittarius Arrow': 'Omega-Choral der Pfeile',
        'Program Alpha': 'Alpha-Programm',
        'Resonance': 'Resonanz',
        'Solar Ray': 'Sonnenstrahl',
        'Spotlight': 'Scheinwerfer',
        'Subject Simulation F': 'Transformation F',
        'Subject Simulation M': 'Transformation M',
        'Superliminal Steel': 'Klingenkombo B',
        'Suppression': 'Hilfsprogramm F',
        'Synthetic Blades': 'Synthetische Klinge',
        'Synthetic Shield': 'Synthetischer Schild',
      },
      '~effectNames': {
        'Invincibility': 'Unverwundbar',
        'Local Resonance': 'Resonanzprogramm: Nah',
        'Omega': 'Omega',
        'Packet Filter F': 'Sicherungssystem F',
        'Packet Filter M': 'Sicherungssystem M',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Engage!': 'À l\'attaque',
        'Omega': 'Oméga',
        'Omega-F': 'Oméga-F',
        'Omega-M': 'Oméga-M',
        'Optical Unit': 'unité optique',

        // FIXME
        'Progress to party combat': 'Progress to party combat',
      },
      'replaceText': {
        '--Reset--': '--Réinitialisation--',
        '--sync--': '--Synchronisation--',
        '--targetable--': '--Ciblable--',
        '--untargetable--': '--Impossible à cibler--',
        'Beyond Strength': 'Combo bouclier G',
        'Cosmo Memory': 'Cosmomémoire',
        'Discharger': 'Déchargeur',
        'Efficient Bladework': 'Lame active',
        'Electric Slide': 'Glissement Oméga',
        'Enrage': 'Enrage',
        'Firewall': 'Programme protecteur',
        'Floodlight': 'Projecteur',
        'Ground Zero': 'Ruée féroce',
        'Laser Shower': 'Pluie de lasers',
        'Optical Laser': 'Laser optique F',
        'Optimized Blade Dance': 'Danse de la lame Oméga',
        'Optimized Blizzard III': 'Méga Glace Oméga',
        'Optimized Fire III': 'Méga Feu Oméga',
        'Optimized Meteor': 'Météore Oméga',
        'Optimized Passage of Arms': 'Passe d\'armes Oméga',
        'Optimized Sagittarius Arrow': 'Flèche du sagittaire Oméga',
        'Program Alpha': 'Programme Alpha',
        'Resonance': 'Résonance',
        'Solar Ray': 'Rayon solaire',
        'Spotlight': 'Phare',
        'Subject Simulation F': 'Transformation F',
        'Subject Simulation M': 'Simulation de sujet M',
        'Superliminal Steel': 'Combo lame B',
        'Suppression': 'Programme d\'assistance F',
        'Synthetic Blades': 'Lame optionnelle',
        'Synthetic Shield': 'Bouclier optionnel',
      },
      '~effectNames': {
        'Invincibility': 'Invulnérable',
        'Local Resonance': 'Programme de résonance: proximité',
        'Omega': 'Oméga',
        'Packet Filter F': 'Programme protecteur F',
        'Packet Filter M': 'Programme protecteur M',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Engage!': '戦闘開始！',
        'Omega': 'オメガ',
        'Omega-F': 'オメガF',
        'Omega-M': 'オメガM',
        'Optical Unit': 'オプチカルユニット',

        // FIXME
        'Progress to party combat': 'Progress to party combat',
      },
      'replaceText': {
        'Beyond Strength': 'シールドコンボG',
        'Cosmo Memory': 'コスモメモリー',
        'Discharger': 'ディスチャージャー',
        'Efficient Bladework': 'ソードアクション',
        'Electric Slide': 'オメガスライド',
        'Firewall': 'ガードプログラム',
        'Floodlight': 'フラッドライト',
        'Ground Zero': '急襲',
        'Laser Shower': 'レーザーシャワー',
        'Optical Laser': 'オプチカルレーザーF',
        'Optimized Blade Dance': 'ブレードダンス・オメガ',
        'Optimized Blizzard III': 'ブリザガ・オメガ',
        'Optimized Fire III': 'ファイラ・オメガ',
        'Optimized Meteor': 'メテオ・オメガ',
        'Optimized Passage of Arms': 'パッセージ・オブ・オメガ',
        'Optimized Sagittarius Arrow': 'サジタリウスアロー・オメガ',
        'Program Alpha': 'プログラム・アルファ',
        'Resonance': 'レゾナンス',
        'Solar Ray': 'ソーラレイ',
        'Spotlight': 'スポットライト',
        'Subject Simulation F': 'トランスフォームF',
        'Subject Simulation M': 'トランスフォームM',
        'Superliminal Steel': 'ブレードコンボB',
        'Suppression': '援護プログラムF',
        'Synthetic Blades': 'ブレードオプション',
        'Synthetic Shield': 'シールドオプション',
      },
      '~effectNames': {
        'Invincibility': '無敵',
        'Local Resonance': 'レゾナンスプログラム：ニアー',
        'Omega': 'オメガ',
        'Packet Filter F': 'ガードプログラムF',
        'Packet Filter M': 'ガードプログラムM',
      },
    },
  ],
}];