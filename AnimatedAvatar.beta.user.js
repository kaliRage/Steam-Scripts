// ==UserScript==
// @name         Animated Avatar
// @namespace    *steamcommunity.com/
// @version      4.3.0 test
// @description  This script makes your avatar animated using standard game avatars in Steam
// @author       Lite_OnE
// @match        *://steamcommunity.com/id/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==

var _0xd90e=["\x54\x46\x32","\x69\x73\x79\x69\x75\x6D","\x55\x6E\x6D\x65\x63\x68\x61\x6E\x69\x63\x61\x6C","\x52\x4F\x32","\x4E\x69\x6E\x6A\x61\x73\x50\x6C\x75\x73\x50\x6C\x75\x73","\x53\x75\x70\x65\x72\x44\x69\x73\x74\x72\x6F","\x73\x65\x6E\x74\x72\x69\x73","\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x5F\x70\x72\x6F\x66\x69\x6C\x65\x5F\x61\x63\x74\x69\x6F\x6E\x20\x62\x74\x6E\x5F\x6D\x65\x64\x69\x75\x6D\x22\x20\x69\x64\x3D\x22\x64\x69\x73\x61\x62\x6C\x65\x5F\x61\x76\x22\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x45\x33\x34\x32\x33\x34\x3B\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x3B\x22\x3E\x44\x69\x73\x61\x62\x6C\x65\x20\x41\x6E\x69\x6D\x61\x74\x65\x64\x20\x41\x76\x61\x74\x61\x72\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x61\x3E\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x5F\x70\x72\x6F\x66\x69\x6C\x65\x5F\x61\x63\x74\x69\x6F\x6E\x20\x62\x74\x6E\x5F\x6D\x65\x64\x69\x75\x6D\x22\x20\x69\x64\x3D\x22\x65\x6E\x61\x62\x6C\x65\x5F\x61\x76\x22\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x30\x31\x42\x31\x41\x46\x3B\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x62\x6C\x6F\x63\x6B\x22\x3E\x45\x6E\x61\x62\x6C\x65\x20\x41\x6E\x69\x6D\x61\x74\x65\x64\x20\x41\x76\x61\x74\x61\x72\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x61\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x6F\x70\x75\x70\x5F\x62\x6C\x6F\x63\x6B\x5F\x6E\x65\x77\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x6F\x70\x75\x70\x5F\x62\x6F\x64\x79\x20\x70\x6F\x70\x75\x70\x5F\x6D\x65\x6E\x75\x22\x20\x69\x64\x3D\x22\x61\x76\x61\x74\x61\x72\x5F\x70\x72\x65\x73\x65\x74\x73\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x73\x74\x61\x74\x69\x63\x3B\x20\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x20\x31\x30\x30\x30\x3B\x20\x77\x69\x64\x74\x68\x3A\x20\x31\x38\x35\x70\x78\x3B\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x74\x65\x61\x6D\x63\x6F\x6D\x6D\x75\x6E\x69\x74\x79\x2E\x63\x6F\x6D\x2F\x67\x61\x6D\x65\x73\x2F","\x2F\x73\x65\x6C\x65\x63\x74\x41\x76\x61\x74\x61\x72","\x70\x6F\x73\x74","\x6C\x65\x6E\x67\x74\x68","\x3A","\x73\x70\x6C\x69\x74","\x68\x72\x65\x66","\x61\x74\x74\x72","\x68\x74\x74\x70\x73","\x68\x74\x74\x70\x3A","\x61\x70\x70\x65\x6E\x64","\x2E\x70\x72\x6F\x66\x69\x6C\x65\x5F\x68\x65\x61\x64\x65\x72\x5F\x61\x63\x74\x69\x6F\x6E\x73","\x23\x65\x6E\x61\x62\x6C\x65\x5F\x61\x76","\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x6F\x70\x75\x70\x5F\x6D\x65\x6E\x75\x5F\x69\x74\x65\x6D\x20\x20\x62\x74\x6E\x5F\x70\x72\x6F\x66\x69\x6C\x65\x5F\x61\x63\x74\x69\x6F\x6E\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x22\x3E\x50\x72\x65\x73\x65\x74\x20","\x3C\x2F\x61\x3E","\x23\x61\x76\x61\x74\x61\x72\x5F\x70\x72\x65\x73\x65\x74\x73","\x64\x69\x73\x70\x6C\x61\x79","\x63\x73\x73","\x62\x6C\x6F\x63\x6B","\x6E\x6F\x6E\x65","\x74\x65\x78\x74","\x73\x70\x61\x6E","\x66\x69\x6E\x64","\x45\x6E\x61\x62\x6C\x65\x20\x41\x6E\x69\x6D\x61\x74\x65\x64\x20\x41\x76\x61\x74\x61\x72","\x43\x68\x6F\x6F\x73\x65\x20\x41\x6E\x69\x6D\x61\x74\x65\x64\x20\x50\x72\x65\x73\x65\x74","\x63\x6C\x69\x63\x6B","\x23\x64\x69\x73\x61\x62\x6C\x65\x5F\x61\x76","\x69\x6E\x64\x65\x78","\x2E\x70\x6F\x70\x75\x70\x5F\x6D\x65\x6E\x75\x5F\x69\x74\x65\x6D\x2E\x62\x74\x6E\x5F\x70\x72\x6F\x66\x69\x6C\x65\x5F\x61\x63\x74\x69\x6F\x6E","\x49\x6E\x66\x6F","\x41\x6E\x69\x6D\x61\x74\x65\x64\x20\x61\x76\x61\x74\x61\x72\x20\x69\x73\x20\x64\x69\x73\x61\x62\x6C\x65\x64\x21\x20\x41\x6E\x79\x20\x71\x75\x65\x73\x74\x69\x6F\x6E\x73\x3F\x20\x56\x69\x73\x69\x74\x20\x74\x68\x65\x20\x6F\x72\x69\x67\x69\x6E\x61\x6C\x20\x67\x75\x69\x64\x65\x20\x70\x61\x67\x65\x3A\x20\x73\x74\x65\x61\x6D\x63\x6F\x6D\x6D\x75\x6E\x69\x74\x79\x2E\x63\x6F\x6D\x2F\x73\x68\x61\x72\x65\x64\x66\x69\x6C\x65\x73\x2F\x66\x69\x6C\x65\x64\x65\x74\x61\x69\x6C\x73\x2F\x3F\x69\x64\x3D\x38\x35\x37\x38\x36\x34\x36\x32\x32\x20\x20\x20\x41\x75\x74\x68\x6F\x72\x3A\x20\x4C\x69\x74\x65\x5F\x4F\x6E\x45\x2E\x20\x50\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x53\x74\x65\x61\x6D\x20\x54\x72\x69\x63\x6B\x73","\x72\x65\x61\x64\x79"];var p=1000,stop_flag,vip=[
    [0,1,2,1,263860], //the first values are avatar indexes, the last one is a game appid/appname
    [10,19,_0xd90e[0]],[3,2,1,4,8,0,6,_0xd90e[1]],[0,1,_0xd90e[2]],[3,1,10,345860],[3,2,0,265490],[0,1,0,233530],[14,15,353540],[18,17,16,15,14,_0xd90e[3]]],s=1,ad=[[471220,4],[269570,8],[526800,5],[_0xd90e[4],12],[_0xd90e[5],8],[453830,7],[_0xd90e[6],29],[538410,6],[536470,4],[432330,20]],cp,data_1=_0xd90e[7],data_2=_0xd90e[8];function preset(_0xc63fxa){if(stop_flag=== 0){if(_0xc63fxa< ad[cp][1]){$[_0xd90e[11]](_0xd90e[9]+ ad[cp][0]+ _0xd90e[10],{sessionid:g_sessionID,selectedAvatar:_0xc63fxa});setTimeout(function(){_0xc63fxa++;preset(_0xc63fxa)},p)}else {preset(0)}}}function presetVIP(_0xc63fxc){if(stop_flag=== 0){if(_0xc63fxc< vip[cp][_0xd90e[12]]- 1){$[_0xd90e[11]](_0xd90e[9]+ vip[cp][vip[cp][_0xd90e[12]]- 1]+ _0xd90e[10],{sessionid:g_sessionID,selectedAvatar:vip[cp][_0xc63fxc]});setTimeout(function(){_0xc63fxc++;presetVIP(_0xc63fxc)},750)}else {presetVIP(0)}}}if($(location)[_0xd90e[16]](_0xd90e[15])[_0xd90e[14]](_0xd90e[13])[0]== _0xd90e[17]){$(location)[_0xd90e[16]](_0xd90e[15],_0xd90e[18]+ $J(location)[_0xd90e[16]](_0xd90e[15])[_0xd90e[14]](_0xd90e[13])[1])};$(document)[_0xd90e[40]](function(){$(_0xd90e[20])[_0xd90e[19]](data_1);$(_0xd90e[21])[_0xd90e[19]](data_2);for(j= 1;j<= vip[_0xd90e[12]];j++){$(_0xd90e[24])[_0xd90e[19]](_0xd90e[22]+ j+ _0xd90e[23])};$(_0xd90e[21])[_0xd90e[34]](function(){if($(_0xd90e[24])[_0xd90e[26]](_0xd90e[25])== _0xd90e[27]){$(_0xd90e[24])[_0xd90e[26]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xd90e[28]})}else {$(_0xd90e[24])[_0xd90e[26]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xd90e[27]})};if($(_0xd90e[21])[_0xd90e[31]](_0xd90e[30])[_0xd90e[29]]()== _0xd90e[32]){$(_0xd90e[21])[_0xd90e[31]](_0xd90e[30])[_0xd90e[29]](_0xd90e[33])}else {$(_0xd90e[21])[_0xd90e[31]](_0xd90e[30])[_0xd90e[29]](_0xd90e[32])}});$(_0xd90e[37])[_0xd90e[34]](function(){$(_0xd90e[21])[_0xd90e[31]](_0xd90e[30])[_0xd90e[26]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xd90e[28]});$(_0xd90e[35])[_0xd90e[31]](_0xd90e[30])[_0xd90e[26]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xd90e[27]});stop_flag= 0;cp= $(this)[_0xd90e[36]]();presetVIP(0)});$(_0xd90e[35])[_0xd90e[34]](function(){stop_flag= 1;ShowAlertDialog(_0xd90e[38],_0xd90e[39]);$(_0xd90e[21])[_0xd90e[31]](_0xd90e[30])[_0xd90e[26]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xd90e[27]});$(_0xd90e[35])[_0xd90e[31]](_0xd90e[30])[_0xd90e[26]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xd90e[28]});$(_0xd90e[21])[_0xd90e[31]](_0xd90e[30])[_0xd90e[29]](_0xd90e[32])})})