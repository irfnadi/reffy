/*


Bot List Diamon MR.057 STORE 
Buat Menu Extensi js (javascript)
Buat packge.json : npm init
Install Package : npm i whatsapp-web.js
=========================================
1. Siapin List Pulsa 
2. Siapin List Quota
3. List Di Dalam List 
4. ScriptHook To JS To QR CODE 
5. Api WhatsApp Enable
6. Mempertahankan Agar Bot Tidak Mati
7. if Offline = Freeze Script 
8. if Online = Script Jalan Mempertahankan Sesi


*/

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});
// LIST CVPULSA
client.on('message', msg => {
    if (msg.body == 'cvpulsa') {
        msg.reply(`
╔══✪〘 MENU CV PULSA 〙✪══
║
╠➥ *RATE CV PULSA*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 CV PULSA 〙✪══
║Untuk layanan convert pulsa
║saat ini hanya melayani dari 
║pulsa Telkomsel.
║rate saat ini 700
║Untuk menghitungnya:
║pulsa X 700 = saldo yg di dapat
║Contoh:
║100 X 700 = 70.000
║Jadi jika ingin mengconvert
║pulsa 100k berarti 
║mendapatkan saldo 
║sebesar 70k
║
║jika sudah paham dan ingin 
║melanjutkan, silahkan transfer 
║pulsanya ke nomor 
║081348421097
║Jangan lupa kirim bukti 
║transfernya 
║ya kak. ~Mr.057
║
╚═〘 *MR.057 STORE* 〙`);
    }
});
//LIST PUBG
client.on('message', msg => {
    if (msg.body == 'listpubg') {
        msg.reply(`
╔══✪〘 MENU UC PUBG 〙✪══
║
╠➥ *UC PUBG REG INDO*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 UC PUBG INDO A 〙✪══
║ 
╠➥ *FAST RESPON*
╠➥ 50 uc= 10.000
╠➥ 125 uc = 26.500
╠➥ 100 uc = 30.000
╠➥ 150 uc = 31.500
╠➥ 250 uc = 49.000
╠➥ 500 uc = 98.000
╠➥ 700 uc = 140.000
╠➥ 1250 uc = 253.000
╠➥ 2500 uc = 505.000
║
╠══✪〘 UC PUBG INDO B 〙✪══
║
╠➥ *LOW RESPON*
╠➥50 uc = 9.000
╠➥53 uc = 9.500
╠➥100 uc = 20.000
╠➥150 uc = 27.000
╠➥156 uc = 28.000
╠➥250 uc = 44.500
╠➥263 uc = 45.500
╠➥500 uc = 90.000
╠➥525 uc = 91.000
╠➥600 uc = 105.000
╠➥700 uc = 125.000
╠➥800 uc = 140.000
╠➥1000 uc = 172.000
╠➥1250 uc = 222.000
╠➥1350 uc = 235.000
╠➥1375 uc = 236.000
╠➥1500 uc = 262.000
╠➥1800 uc = 305.000
╠➥2000 uc = 340.000
║
╚═〘 *MR.057 STORE* 〙`);
    }
});
//LIST FF
client.on('message', msg => {
    if (msg.body == 'listff') {
        msg.reply(`
╔══✪〘 MENU DM FF 〙✪══
║
╠➥ *DIAMOND FF*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 DIAMOND FF 〙✪══
║ 
╠➥ 5 Dm = 850
╠➥ 20 Dm = 2.770
╠➥ 50 Dm = 6.648
╠➥ 70 Dm = 9.141
╠➥ 100 Dm = 13.296
╠➥ 140 Dm = 18.282
╠➥ 150 Dm = 19.944
╠➥ 210 Dm = 27.423
╠➥ 355 Dm = 45.705
╠➥ 425 Dm = 54.846
╠➥ 500 Dm = 64.818
╠➥ 720 Dm = 91.410
╠➥ 860 Dm = 109.692
╠➥ 1000 Dm = 127.974
╠➥ 1075 Dm = 137.115
╠➥ 1440 Dm = 182.820
╠➥ 2000 Dm = 249.300
╠➥ 2720 Dm = 340.710
╠➥ 4000 Dm = 498.600
║
╠➥M.M = 27.700
╠➥M.B = 110.800
║
╚═〘 *MR.057 STORE* 〙`);
    }
});
// LIST MENU
client.on('message', msg => {
    if (msg.body == 'menu') {
        msg.reply(`
╔══✪〘 INFORMATION 〙✪══  
║
╠➥ MENU LAYANAN MR.057
╠➥ Codder Bot : irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 MENU MR.057 STORE 〙✪══
║
╠➥ *JASA REKBER/PULBER*
║
╠═══✪〘MENU〙✪══✪〘COMMAND〙✪═
║
╠➥ *CONVERT PULSA : cvpulsa*
╠➥ *DM FREE FIRE  : listff*
╠➥ *DM ML         : listml*
╠➥ *UC PUBG       : listpubg*
╠➥ *PULSA TF TSEL : pulsatf*
╠➥ *PULSA ALL OPR : allpulsa*
╠➥ *QUOTA         : paketdata*
╠➥ *GARENA SHELL  : listshell*
╠➥ *CV EMONEY     : cvemoney*
╠➥ *PULSA LISTRIK : listrik*
╠➥ *CV PAYPAL     : cvpaypal* 
║
╚═〘 MR.057 STORE 〙`);
    }
});
//LIST PULSA TF
client.on('message', msg => {
    if (msg.body == 'pulsatf') {
        msg.reply(`
╔══✪〘 MENU PULSA TF 〙✪══
║
╠➥ *PULSA TF TELKOM*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 PULSA TF TSEL 〙✪══
║ 
╠➥ 5.000 Harga= 6.000
╠➥ 10.000 harga= 11.000
╠➥ 15.000 harga= 15.000
╠➥ 20.000 harga= 19.000
╠➥ 25.000 harga= 23.500
╠➥ 30.000 harga= 28.000
╠➥ 35.000 harga =33.000
╠➥ 40.000 harga =36.500
╠➥ 45.000 harga= 42.000
╠➥ 50.000 harga= 44.000
╠➥ 55.000 harga= 50.000
╠➥ 60.000 harga= 53.000
╠➥ 65.000 harga= 58.000
╠➥ 70.000 harga= 62.000
╠➥ 75.000 harga= 66.000
╠➥ 80.000 harga= 70.500
╠➥ 85.000 harga= 75.000
╠➥ 90.000 harga= 80.000
╠➥ 95.000 harga= 83.500
╠➥ 100.000 harga= 87.000
╠➥ 110.000 harga= 97.000
╠➥ 120.000 harga= 105.000
╠➥ 130.000 harga= 115.000
╠➥ 140.000 harga= 122.000
╠➥ 150.000 harga= 133.000
╠➥ 200.000 harga= 172.000
╠➥ 250.000 harga= 225.000
╠➥ 300.000 harga= 262.000
╠➥ 400.000 harga= 350.000
╠➥ 500.000 harga= 435.000
║
╚═〘 *MR.057 STORE* 〙`);
    }
});
//list PULSA ALL OPERATOR
client.on('message', msg => {
    if (msg.body == 'allpulsa') {
        msg.reply(`
🔰 --[ *PULSA ALL OPERATOR* ]-- 🔰
          
Hi,👋️
INI MENU PULSA ALL OPERATOR ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : ISI ULANG ALL OPERATOR* 
       
Telkomsel M-Kios
Indosat isi ulang
Axis isi ulang
Tri isi ulang
Smartfrend isi ulang
Xl isi ulang
Byu isi ulang

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
          
🔰 --[ *MR.057 BOT* ]-- 🔰`);
    }
});
//LIST PAKET DATA / QUOTA
client.on('message', msg => {
    if (msg.body == 'paketdata') {
        msg.reply(`
╔══✪〘 MENU QUOTA INTERNET 〙✪══
║
╠➥ *QUOTA INTERNET*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 QUOTA INTERNET 〙✪══
║ 
╠➥ Quota telkomsel = qtsel
╠➥ Quota indosat = qindo
╠➥ Quota axis = qaxis
╠➥ Quota tri = qtri
╠➥ Quota smartfrend = qsmart
╠➥ Quota xl = qxl
║
╚═〘 *MR.057 STORE* 〙`);
    }
});
//QTELKOMSEL
client.on('message', msg => {
    if (msg.body == 'qtsel') {
        msg.reply(`
🔰 --[ *MENU QUOTA TELKOMSEL* ]-- 🔰
          
Hi,👋️ 
INI MENU QUOTA TELKOMSEL ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : LIST QUOTA TELKOMSEL* 
       
Telkomsel Data Flash = t1
Telkomsel Semua Jaringan = t2
Telkomsel Data Mini = t3 
Telkomsel GamesMax = t4
Telkomsel Data Bulk = t5 
Telkomsel Paket Combo = t6 
Gift Quota tsel super murah = t7

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
          
🔰 --[ *MR.057 BOT* ]-- 🔰`);
    }
});
//QINDOSAT
client.on('message', msg => {
    if (msg.body == 'qindo') {
        msg.reply(`
🔰 --[ *MENU QUOTA INDOSAT* ]-- 🔰
          
Hi,👋️ 
INI MENU QUOTA INDOSAT ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : LIST QUOTA INDOSAT* 
       
Gift data = isat1
Indosat Data = isat2
Indosat Yellow = isat3
Indosat Internet Unlimited = isat4
Indosat Freedom Internet = isat5
ISAT FREEDOM COMBO = isat6
Indosat Freedom Combo = isat7
ISAT FREEDOM UNLIMITED = isat8
ISAT FREEDOM INTERNET = isat9
Indosat Paket Ekstra = isat10
Indosat Freedom = isat11

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
          
🔰 --[ *MR.057 BOT* ]-- 🔰`);
    }
});
//QAXIS
client.on('message', msg => {
    if (msg.body == 'qaxis') {
        msg.reply(`
🔰 --[ *MENU QUOTA AXIS* ]-- 🔰
          
Hi,👋️ 
INI MENU QUOTA AXIS ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : LIST QUOTA AXIS* 
       
Axis bronet = axis1
Axis Owsem = axis2

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
          
🔰 --[ *MR.057 BOT* ]-- 🔰`);
    }
});
//QTRI
client.on('message', msg => {
    if (msg.body == 'qtri') {
        msg.reply(`
🔰 --[ *MENU QUOTA TRI* ]-- 🔰
          
Hi,👋️ 
INI MENU QUOTA TRI ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : LIST QUOTA TRI* 
       
Tri data = tri1
Three Mix Small = tri2
Three Mini = tri3
Three Always On = tri4
Three Mix Combo = tri5
Three Mix Super = tri6
Three AlwaysOn Unlimited = tri7

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
          
🔰 --[ *MR.057 BOT* ]-- 🔰`);
    }
});
//QSMART
client.on('message', msg => {
    if (msg.body == 'qsmart') {
        msg.reply(`
🔰 --[ *MENU QUOTA SMARTFREN* ]-- 🔰
          
Hi,👋️ 
INI MENU QUOTA SMARTFREN ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : LIST QUOTA SMARTFREN* 
       
Smart Internet
Smart Data

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
          
🔰 --[ *MR.057 BOT* ]-- 🔰`);
    }
});
//QXL
client.on('message', msg => {
    if (msg.body == 'qxl') {
        msg.reply(`
🔰 --[ *MENU QUOTA XL* ]-- 🔰
          
Hi,👋️ 
INI MENU QUOTA XL ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : LIST QUOTA XL* 
       
XL Combo LITE = xl1
XL Hotrod = xl2
XL Xtra Combo = xl3
XL Xtra Combo VIP = xl4

⚠️ *PAYMENT* ⚠️
*- SCAN BARCODE = PROFIL GRUB*
*- DANA = 082351466247*
*- OVO = 082351466247*
*- GOPAY = 081348421097*
*- LINKAJA = 081348421097*
*- BRIVA = 88810082351466247*
          
🔰 --[ *MR.057 BOT* ]-- 🔰`);
    }
});
// list GSHELL
client.on('message', msg => {
    if (msg.body == 'listshell') {
        msg.reply(`
╔══✪〘 MENU GARENA SHELL 〙✪══
║
╠➥ *GARENA SHELL*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 GARENA SHELL 〙✪══
║ 
╠➥ 33 gs = 9.500
╠➥ 66 gs = 19.000
╠➥ 165 gs = 46.000
╠➥ 330 gs = 91.500
║
╠➥ 3.300 gs = 911.000
║
╚═〘 *MR.057 STORE* 〙`);
    }
});
// LIST DIAMOND ML
client.on('message', msg => {
    if (msg.body == 'listml') {
        msg.reply(`
╔══✪〘 MENU DM ML 〙✪══
║
╠➥ *DIAMOND ML*
╠➥ *MR.057*
╠➥ CODDER BOT : @irfnadi_
╠➥ wa.me/6281348421097
║
╠══✪〘 DIAMOND ML 〙✪══
║ 
╠➥ 3💎 = 1.800
╠➥ 12💎 = 3.800
╠➥ 15💎 = kosong
╠➥ 28💎 = 8.000
╠➥ 30💎 = kosong
╠➥ 33💎 = kosong
╠➥ 36💎 = 9.900
╠➥ 45💎 = kosong
╠➥ 59💎 = 15.700
╠➥ 60💎 = kosong
╠➥ 74💎 = 19.700
╠➥ 85💎 = 22.700
╠➥ 170💎 = 45.000
╠➥ 167💎 = kosong
╠➥ 185💎 = 49.900
╠➥ 222💎 = 59.900
╠➥ 296💎 = 80.000
╠➥ 370💎 = 100.000
╠➥ 568💎 = 146.000
╠➥ 702💎 = kosong
╠➥ 875💎 = 223.000
╠➥ 1159💎 = 293.000
╠➥ 1830💎 = 475.000
╠➥ 2010 💎 = 486.000
╠➥ 3638💎 = kosong
╠➥ 4830💎 = 1.167.000
╠➥ 6050💎 = 1.487.000
║
╚═〘 *MR.057 STORE* 〙`);
    }
});
// MENU PE PA PE PA
client.on('message', msg => {
    if (msg.body == 'p') {
        msg.reply(`
        Pe pa pe pa

        Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
    }
});
// PE PA PE PA 2
client.on('message', msg => {
    if (msg.body == 'P') {
        msg.reply(`
        Pe pa pe pa

        Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
    }
});
// asaalamualaikum
client.on('message', msg => {
    if (msg.body == 'assalamualaikum') {
        msg.reply(`
        waalaikumsalam

        Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
    }
});
// Assalamualaikum
client.on('message', msg => {
    if (msg.body == 'Assalamualaikum') {
        msg.reply(`
        Waalaikumsalam

        Ya ada apa bisa di bantu kalau bingung ketik : *menu* ya say.`);
    }
});

client.initialize();



